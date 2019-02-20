import React from 'react';
import './SearchBar.css'


const SearchBar = props => {
  return(
    <nav>
      <div className="logo-and-h1">
        <a href="#home">
        <i className="fab fa-instagram"></i>
        </a>
        <h1>Instagram</h1>
      </div>
      
        <input
        className="nav-searchbar"
        name='inputValue'
        type="text"
        placeholder="Search..."
        onChange={props.searchChanges}
        />

      <div className="nav-icons">
        <a href="1"><i className="far fa-compass"></i></a>
        <a href="1"><i className="far fa-heart"></i></a>
        <a href="1"><i className="far fa-user"></i></a>
      </div>
    </nav>
  );
}

export default SearchBar;