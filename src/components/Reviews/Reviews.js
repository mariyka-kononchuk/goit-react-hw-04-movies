import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReviews} from '../../services/movies-api'

export default function Cast() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then((data) => {
                console.log(data)
                setReviews(data)
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
                <ul>
                    {reviews.map(review => (
                        <li key={review.cast_id}>
                            
                            <p>{review.name}</p>
                            <p>{review.character}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}