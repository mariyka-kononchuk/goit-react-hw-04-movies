import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

import MoviesList from '../MoviesList';
import Searchbar from '../SearchBar';
import SpinnerLoader from '../Loader';
import { fetchMovieSearch } from '../../services/movies-api'

export default function MoviesPage() {
  const searchWord = localStorage.getItem('query');
  const [searchName, setSearchName] = useState(searchWord ? searchWord : '');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [spinner, setSpinner] = useState(false);

  const handleSearchSubmit = (searchName) => {
      setSearchName(searchName);
      setMovies([]);
      setSpinner(true);
  }
    
    useEffect(() => {
      if (!searchName) {
      return
        }
    fetchMovieSearch(searchName)
        .then((data) => {
          if (data.results.length === 0) {
          setSpinner(false);
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
        setSpinner(false);
      })
      .catch(error => {
        setStatus('rejected');
        setSpinner(false);
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
            <MoviesList movies={movies} query={searchName} />
            <Toaster />
            {spinner && <SpinnerLoader />}
        </div>
        )
    }
}

MoviesPage.propTypes = {
    searchName: PropTypes.string,
};