import React from 'react';
import './Layout.css';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input
                className='searchBox' type='search' placeholder='Search for a country'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;