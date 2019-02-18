import React from 'react';
import './SearchBar.css'


const SearchBar = () => {
  return(
    <nav>
      <div className="logo-and-h1">
        <a href="#home">#</a>
        <h1>Instagram</h1>
      </div>
      <input className="nav-searchbar" type="text"/>
      <div className="nav-icons">
        <a href="1">A</a>
        <a href="1">B</a>
        <a href="1">C</a>
      </div>
    </nav>
  );
}

export default SearchBar;