import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovieReviews } from '../../services/movies-api';
import { List, Item, Author, Content, NoReviews} from './Reviews.styled.jsx'

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then((data) => {
                console.log("array",data.results)
                if (data.results.length === 0) {
                   setStatus('rejected'); 
                } else {
                    setReviews(data.results)
                    setStatus('resolved');
                }
                
                
            }
        )
        .catch(error => {
            console.log("error");
           
      });
        
    }, [movieId]);

    if (status === 'idle') {
        return (<div></div>)
    }
    if (status === 'rejected') {
        return (<NoReviews>We don't have any reviews for this movie.</NoReviews>)
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