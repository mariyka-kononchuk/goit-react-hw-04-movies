import React from 'react';
import {lazy, Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
// import HomeView from '../../views/HomeView';
// import MoviesView from '../../views/MoviesView';
// import MovieDetailsView from '../../views/MovieDetailsView';
// import NotFoundView from '../../views/NotFoundView';

const HomeView = lazy(() => import('../../views/HomeView.js') /*webpackChunkName: "home-view" */);
const MoviesView = lazy(() => import('../../views/MoviesView.js') /*webpackChunkName: "movies-view" */);
const MovieDetailsView = lazy(() => import('../../views/MovieDetailsView.js') /*webpackChunkName: "movies-details-view" */);
const NotFoundView = lazy(() => import('../../views/NotFoundView.js') /*webpackChunkName: "not-found-view" */);

export default function App() {
    return (
        <Container>
            <Navigation />
            <Suspense fallback={<div>Loading</div>}>
                <Switch>
                    
                    <Route path="/" exact>
                        <HomeView />
                    </Route>

                    <Route path="/movies" exact>
                        <MoviesView />
                    </Route>

                    <Route path="/movies/:movieId" >
                        <MovieDetailsView />
                    </Route>

                    <Route>
                        <NotFoundView />
                    </Route>
                </Switch>
            </Suspense>
           
        </Container>
    )
}