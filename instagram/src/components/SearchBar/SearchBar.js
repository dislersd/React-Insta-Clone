import React from "react";
import styled from "styled-components";
import "./SearchBar.css";

const SearchBarInput = styled.input`
  width: 30rem;
  font-size: 2rem;
  padding: 0.5rem;
`;
const LogoAndH1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstaLogo = styled.a`
  border-right: 1px solid black;
  padding-right: 15px;
  margin-right: 10px;
  color: #000;
  font-size: 3rem;
`;

const NavIcon = styled.a`
  margin: 0 2rem;
  font-size: 2.5rem;
  color: #000;
`;

const SearchBar = props => {
  return (
    <nav>
      <LogoAndH1>
        <InstaLogo href="#home">
          <i className="fab fa-instagram" />
        </InstaLogo>
        <h1>Instagram</h1>
      </LogoAndH1>

      <SearchBarInput
        name="inputValue"
        type="text"
        placeholder="Search..."
        onKeyDown={props.searchPosts}
      />

      <div className="nav-icons">
        <NavIcon href="1">
          <i className="far fa-compass" />
        </NavIcon>
        <NavIcon href="1">
          <i className="far fa-heart" />
        </NavIcon>
        <NavIcon href="1">
          <i className="far fa-user" />
        </NavIcon>
      </div>
    </nav>
  );
};

export default SearchBar;
