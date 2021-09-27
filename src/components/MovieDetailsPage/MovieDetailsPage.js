import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/movies-api'
import Cast from '../Cast';
import Reviews from '../Reviews'

export default function MovieDetailsPage() {
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
        return (
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.poster_path} alt="" />
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
                <Cast />
                <Reviews/>
            </div>
        )
    }
}