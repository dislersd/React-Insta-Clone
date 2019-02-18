import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostWrapper from "./components/PostContainer/PostWrapper";
import logo from "./logo.svg";
import dummyData from "./dummy-data";
import "./App.css";
import "./components/SearchBar/SearchBar.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <PostWrapper dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
