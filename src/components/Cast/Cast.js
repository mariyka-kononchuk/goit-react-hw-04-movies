import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieCast } from '../../services/movies-api'

export default function Cast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchMovieCast(movieId)
            .then((data) => {
                console.log(data.cast)
                setActors(data.cast)
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
                    {actors.map(actor => (
                        <li key={actor.cast_id}>
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name}/>
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}