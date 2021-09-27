import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReviews} from '../../services/movies-api'

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then((data) => {
                console.log(data.results)
                setReviews(data.results)
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
                        <li key={review.id}>
                            
                            <p>{review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}