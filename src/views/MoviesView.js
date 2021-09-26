import React, { useState, useEffect} from 'react';
import MoviesPage from '../components/MoviesPage';
import Searchbar from '../components/SearchBar';
import { fetchMovieSearch } from '../services/movies-api'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function MoviesView() {
    const [searchName, setSearchName] = useState('');
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');

    const handleSearchSubmit = (searchName) => {
        setSearchName(searchName);
        setMovies([]);
    }
    
    useEffect(() => {
    if (!searchName) {
      return
        }
        
    fetchMovieSearch(searchName)
        .then((data) => {
            console.log(data);
        // if (data.hits.length === 0) {
        //   return toast('Alas, no items found per your query', {
        //     style: {
        //       borderRadius: '10px',
        //       background: '#333',
        //       color: '#fff',
        //     },
        //   });
        // }
        let newMovies = [...movies, ...data.results];
        setMovies(newMovies);
        setStatus('resolved');
        // setSpinner(false);
        
      })
      .catch(error => {
        setStatus('rejected');
        // setSpinner(false);
      });

  }, [searchName])

    return (
        <div>
            <Searchbar onSubmit={handleSearchSubmit} />
            <MoviesPage movies={movies} status={status }/>
            <Toaster/>
        </div>
    )
}