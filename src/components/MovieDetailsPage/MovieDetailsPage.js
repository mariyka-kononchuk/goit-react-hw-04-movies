import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, NavLink, Route, useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { fetchMovieDetails } from '../../services/movies-api'
import Cast from '../Cast';


export default function MovieDetailsPage() {
    const match = useRouteMatch;
    console.log(match);
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchMovieDetails(movieId)
            .then((data) => {
                console.log(data.title)
                setMovie(data)
                setStatus('resolved');
            }
               
        )
        .catch(error => {
            console.log("error");
      });
        
    }, [movieId]);

    if (status === 'idle') {
        return (<div></div>)
    }
    
    if (status === 'resolved') {
        console.log(match);
        return (
            
            <div>
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                <p>User score: {movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                 <ul>
                    {movie.genres.map(genre => (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    ))}
                </ul>
                <h3>Additional information</h3>
                <NavLink to="">Cast</NavLink>
                <NavLink to="">Reviews</NavLink>
                    
             
                        
                    {/* <Route path="/movies/:movieId/cast" exact>
                        <Cast />
                    </Route>
                            
                    <Route path="/movies/:movieId/reviews" >
                        <Cast />
                    </Route> */}
                        
            
            </div>
            
        )
    }
}