import React from 'react';
import { useState, useEffect } from 'react';
import {
    useParams,
    NavLink,
    Link,
    useRouteMatch,
    Route,
    useHistory,
    useLocation
} from 'react-router-dom';

import { fetchMovieDetails } from '../../services/movies-api'
import Cast from '../Cast';
import Reviews from '../Reviews';

import { GoBackButton, MovieName, Score, OverviewTitle, Overview, GenresTitle, Genres, GenresItem, Image, DetailsWrapper, InfoWrapper, InfoTitle, StyledLink } from './MovieDetailsPage.styled.jsx'


export default function MovieDetailsPage() {
    const { url, path } = useRouteMatch();
    //console.log("url", url);
    //console.log("path", path);
    const history = useHistory();
    const location = useLocation();
    // const goBack = history.goBack();
    // console.log("go back", goBack)
    //console.log("history", history);
   // console.log("location", location);


    const { movieId } = useParams();
   //  const [id, setId] = useState(movieId);
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('idle');

    const handleGoBack = () => {
        //if there are no state - forward to the homePage else go back
    //    history.push(location.state?.from ? location.state.from : '/')
        if (location.state.from === '/') {
            history.push(location.state.from)
        } else {
           history.push('/movies');
            const query = location.state.query;
            localStorage.setItem('query', JSON.stringify(query));
            // history.push({
            // path: '/movies',
            // search: `query=${query}`
        // });
           // onSubmit(location.state.query);
        }
        //console.log("location2", location);
        
    }

    useEffect(() => {
        fetchMovieDetails( movieId )
            .then((data) => {
                console.log(data)
                setMovie(data)
                setStatus('resolved');
            }
              
        )
        .catch(error => {
            console.log("error");
      });
        
    }, [movieId]);
    
    const releaseYear = () => {
        const releaseFullDate = new Date(movie.release_date);
        return releaseFullDate.getFullYear();
    }
    
    const userScore = () => {
        const userScorePercentage = movie.vote_average * 10;
        return userScorePercentage;
    }

    if (status === 'idle') {
        return (<div></div>)
    }
    
    if (status === 'resolved') {
         console.log("location", location);
      
        return (
            <div>
                <GoBackButton onClick={handleGoBack}>Go back</GoBackButton>
                
                <DetailsWrapper>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
                    <div>
                        <MovieName>{movie.title} ({releaseYear()})</MovieName>
                        <Score>User score: {userScore()}%</Score>
                        <OverviewTitle>Overview</OverviewTitle>
                        <Overview>{movie.overview}</Overview>
                        <GenresTitle>Genres</GenresTitle>
                        <Genres>
                            {movie.genres.map(genre => (
                                <GenresItem key={genre.id}>
                                    {genre.name}
                                </GenresItem>
                            ))}
                        </Genres>
                    </div>
                </DetailsWrapper>

                <InfoWrapper>
                    <InfoTitle>Additional information</InfoTitle>

                    <StyledLink to={{  ...location,
                                pathname: `${url}/cast`
                                
                                }}>
                                    Cast</StyledLink>
                    <StyledLink to={{  ...location,
                                pathname: `${url}/reviews`
                                
                                }}>Reviews</StyledLink>
                </InfoWrapper>
                     
                <Route path={`${path}/cast`} exact>
                    <Cast />
                </Route>
                            
                <Route path={`${path}/reviews`} >
                    <Reviews />
                </Route>
            </div>
        )
    }
}