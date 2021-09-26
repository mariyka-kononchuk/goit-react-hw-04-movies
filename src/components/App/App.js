import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
import HomeView from '../../views/HomeView';

export default function App() {
    return (
        <Container>
            <Navigation />
            <Route path="/" exact>
                <HomeView />
            </Route>
        </Container>
    )
}