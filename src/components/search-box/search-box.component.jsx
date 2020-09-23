import React from 'react';
import './search-box.styles.css';

// use functional components instead of class components
// 
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={ placeholder }
        onChange = { handleChange }
    />
);