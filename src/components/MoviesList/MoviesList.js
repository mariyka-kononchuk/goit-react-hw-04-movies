import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Image, StyledLink } from './MoviesList.styled.jsx'

export default function MoviesList({ movies, query }) {
    const match = useRouteMatch();
        return (
            <div>
                <List>
                    {movies.map(movie => (
                        <Item key={movie.id}>
                            <StyledLink
                                to={{
                                    pathname: `movies/${movie.id}`,
                                    state: {
                                        from: `${match.path}`,
                                        query: query,
                                    },
                                }}>
                                {movie.poster_path ?
                                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} /> :
                                    <Image src="https://i.ibb.co/s9cXZV0/poster.jpg" alt={movie.name} />}
                                {movie.title ? movie.title: movie.name}
                            </StyledLink>
                        </Item>
                    ))}
                </List>
            </div> 
        )
    }

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    query: PropTypes.string,
};
