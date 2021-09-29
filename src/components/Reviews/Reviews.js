import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-api';
import { List, Item, Author, Content} from './Reviews.styled.jsx'

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
                <List>
                    {reviews.map(review => (
                        <Item key={review.id}>
                            
                            <Author>{review.author}</Author>
                            <Content>{review.content}</Content>
                        </Item>
                    ))}
                </List>
            </div>
        )
    }
}