import React, { useState, useEffect} from 'react';
import { fetchPopularMovies } from '../services/movies-api'
import MoviesList from '../components/MoviesList';

export default function HomeView() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
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
            <h1>Trending today</h1>
            <MoviesList movies={movies} />
        </div>
    )
}
    
        
    
                
           
      
        

    
    


