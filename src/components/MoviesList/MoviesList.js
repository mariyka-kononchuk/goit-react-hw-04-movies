import React from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import PropTypes from 'prop-types';
//import ImageGalleryItem from '../ImageGalleryItem';
//import { List } from './ImageGallery.styled.jsx'

export default function MoviesList({ movies, query }) {
    const match = useRouteMatch();
    console.log("match", match.path)
        return (
            <div>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link
                                to={{
                                    pathname: `movies/${movie.id}`,
                                    state: {
                                        from: `${match.path}`,
                                        query: query,
                                    },
                                    // search:`movies/${movie.id}`
                            }}>
                                {movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </div> 
        )
    }


MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};
