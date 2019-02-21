import React, { Component } from "react";
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import "./App.css";
import authenticate from "./authentication/authenticate";


class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramPosts: [],
      inputValue: '',
      filteredPosts: []
    };
  }

  render() {
    return (
      <div className="app-container">
      <PostsPage />
      </div>
    );
  }
}

export default authenticate(PostsPage)(Login);
