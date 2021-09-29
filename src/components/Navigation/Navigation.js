import React from 'react';
// import { NavLink } from 'react-router-dom'
import { StyledNavLink, StyledNav } from './Navigation.styled.jsx'

const Navigation = () => (
    <StyledNav>
        <StyledNavLink
            exact
            to="/"
            className="s.link"
            activeClassName="s.activeLink">Home</StyledNavLink>
        <StyledNavLink
            to="/movies"
            className="s.link"
            activeClassName="s.activeLink">Movies</StyledNavLink>
    </StyledNav>
)

export default Navigation;
    
    
