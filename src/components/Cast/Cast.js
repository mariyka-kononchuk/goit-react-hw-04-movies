import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/movies-api';
import { List, Image, Name, Character, CharacterStyle} from './Cast.styled.jsx'

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
                <List>
                    {actors.map(actor => (
                        <li key={actor.cast_id}>
                            <Image src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name}/>
                            <Name>{actor.name}</Name>
                            <Character><CharacterStyle>Character:</CharacterStyle> {actor.character}</Character>
                        </li>
                    ))}
                </List>
            </div>
        )
    }
}