import React, { useState, useEffect} from 'react';
import MoviesList from '../MoviesList';
import Searchbar from '../SearchBar';
import { fetchMovieSearch } from '../../services/movies-api'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function MoviesPage() {
    const [searchName, setSearchName] = useState('');
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');

    const handleSearchSubmit = (searchName) => {
        setSearchName(searchName);
        //setMovies([]);
    }
    
    useEffect(() => {
    if (!searchName) {
      return
        }
        
    fetchMovieSearch(searchName)
        .then((data) => {
            console.log(data);
        if (data.results.length === 0) {
          return toast('Alas, no items found per your query', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
        const newMovies = [...movies, ...data.results];
        setMovies(newMovies);
        setStatus('resolved');
        // setSpinner(false);
        
      })
      .catch(error => {
        setStatus('rejected');
        // setSpinner(false);
      });

    }, [searchName])

    if (status === 'idle') {
        return (
            <div>
                <Searchbar onSubmit={handleSearchSubmit} />
                <Toaster/>
            </div>)
    }
    
    if (status === 'rejected') {
        toast('Извините, по вашему запросу ничего не найдено', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
        return (
            <div>
                <Searchbar onSubmit={handleSearchSubmit} />
                <Toaster/>
            </div>)
    }
    
    if (status === 'resolved') {
        return (
           <div>
            <Searchbar onSubmit={handleSearchSubmit} />
            <MoviesList movies={movies}/>
            <Toaster/>
        </div>
        )
    }
}