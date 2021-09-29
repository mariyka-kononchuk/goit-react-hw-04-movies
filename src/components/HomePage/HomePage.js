import React, { useState, useEffect} from 'react';
import { fetchPopularMovies } from '../../services/movies-api'
import MoviesList from '../../components/MoviesList';
import { Title} from './HomePage.styled.jsx'

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        localStorage.setItem('query', '');
        fetchPopularMovies()
            .then((data) => {
                setMovies(data.results);
            })
            .catch(error => {
            });
    }, [])

    return (
        <div>
            <Title>Trending today</Title>
            <MoviesList movies={movies} />
        </div>
    )
}