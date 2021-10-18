import React from 'react';
import ReactDOM from 'react-dom';

import './SearchBox.css';

const SearchBox = (props) => {

    return (
        <div className="search-container">
            <input className="search-box" name="keyword" placeholder="Search keyword" 
                onChange={ (event) => { props.searchHandler(event.target.value) } }
            />
        </div>
    )
}

export default SearchBox;