import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
import HomeView from '../../views/HomeView';
import MoviesView from '../../views/MoviesView';
import NotFoundView from '../../views/NotFoundView';

export default function App() {
    return (
        <Container>
            <Navigation />

            <Switch>
                <Route path="/" exact>
                    <HomeView />
                </Route>

                <Route path="/movies">
                    <MoviesView />
                </Route>

                <Route>
                    <NotFoundView />
                </Route>
            </Switch>

            
        </Container>
    )
}