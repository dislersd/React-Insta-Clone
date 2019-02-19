import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostWrapper from "./components/PostContainer/PostWrapper";
import data from "./dummy-data";
import "./App.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: data
    };
  }

  componentDidMount() {
    this.setState({ dummyData: data})
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
