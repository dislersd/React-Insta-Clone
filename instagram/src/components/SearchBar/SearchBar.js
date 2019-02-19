import React from 'react';
import './SearchBar.css'


const SearchBar = () => {
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
      type="text"
      placeholder="Search..."
      />
      <div className="nav-icons">
        <a href="1"><i class="far fa-compass"></i></a>
        <a href="1"><i class="far fa-heart"></i></a>
        <a href="1"><i class="far fa-user"></i></a>
      </div>
    </nav>
  );
}

export default SearchBar;