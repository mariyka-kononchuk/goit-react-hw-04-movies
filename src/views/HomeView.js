import React, { useState, useEffect} from 'react';
import { fetchPopularMovies } from '../services/movies-api'
import MoviesPage from '../components/MoviesPage';

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
            <MoviesPage movies={movies} />
        </div>
    )
}
    
        
    
                
           
      
        

    
    


