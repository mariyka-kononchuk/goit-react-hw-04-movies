import React, { useState, useEffect} from 'react';
import { fetchPopularMovies } from '../../services/movies-api'
import MoviesList from '../../components/MoviesList';
import { Title} from './HomeView.styled.jsx'

export default function HomeView() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        localStorage.setItem('query', '');
     
        fetchPopularMovies()
            .then((data) => {
                console.log(data);
                setMovies(data.results);
                // setSpinner(false);
            })
            .catch(error => {
                // setSpinner(false);
            });
    }, [])

    return (
        <div>
            <Title>Trending today</Title>
            <MoviesList movies={movies} />
        </div>
    )
}
    
        
    
                
           
      
        

    
    


