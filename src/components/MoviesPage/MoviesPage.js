import React from 'react';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
//import ImageGalleryItem from '../ImageGalleryItem';
//import { List } from './ImageGallery.styled.jsx'



export default function MoviesPage({ movies, status}) {
    if (status === 'idle') {
        return <div></div>
    }
    
    if (status === 'rejected') {
        console.log('nothing')
        return toast('Извините, по вашему запросу ничего не найдено', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    }
    
    if (status === 'resolved') {
        return (
            <div>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </div> 
        )
    }
}

// MoviesPage.propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     largeImage: PropTypes.string,
//     onClick:PropTypes.func.isRequired
// };

