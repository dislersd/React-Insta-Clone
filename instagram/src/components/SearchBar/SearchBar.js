import React from 'react';


const SearchBar = () => {
  return(
    <nav>
      <div className="logo-and-h1">
        <a href="#home">#</a>
        <h1>Instagram</h1>
      </div>
      <input className="nav-searchbar" type="text"/>
      <div className="nav-icons">
        <a href="">A</a>
        <a href="">B</a>
        <a href="">C</a>
      </div>
    </nav>
  );
}

export default SearchBar;