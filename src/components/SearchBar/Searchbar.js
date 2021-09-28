import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Header, SearchForm, SearchFormButton, Label, Input } from './Searchbar.styled'

export default function Searchbar({ onSubmit }) {
    
    const [searchName, setSearchName] = useState('');
    const history = useHistory();
    const location = useLocation();

    const handleNameChange = e => {
        setSearchName(e.currentTarget.value.toLowerCase())
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (searchName.trim() === '') {
            return toast('Please enter search word', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            });
        }
        onSubmit(searchName);
        history.push({
            ...location,
            search: `query=${searchName}`
        });
        setSearchName('')
    }

        return (
            <Header>
                <SearchForm  onSubmit={handleSubmit}>
                    <SearchFormButton type="submit">
                        <Label>Search</Label>
                    </SearchFormButton>
                    <Input
                        type="text"
                        name={searchName}
                        value={searchName}
                        onChange = {handleNameChange}
                        autocomplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                </SearchForm>
            </Header>
        )
    
}

Searchbar.propTypes = {
    searchName: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange:PropTypes.func
};

