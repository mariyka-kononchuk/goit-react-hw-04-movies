import React from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//import ImageGalleryItem from '../ImageGalleryItem';
//import { List } from './ImageGallery.styled.jsx'

export default function MoviesList({ movies }) {
        return (
            <div>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </div> 
        )
    }


MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};
