import React from 'react';
import { useHistory} from 'react-router-dom';
import HomeView from './HomeView';

export default function NotFoundView() {
    const history = useHistory();
    history.push('/');
    
    return <HomeView />
};