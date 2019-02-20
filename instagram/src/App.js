import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostWrapper from "./components/PostContainer/PostWrapper";
import data from "./dummy-data";
import "./App.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramPosts: data,
      inputValue: ''
    };
  }

  componentDidMount() {
    this.setState({ dummyData: data})
  }

  // searchPosts = () => {
  //   this.setState({
  //     dummyData: this.state.dummyData.filter( post => 
  //       post.username.includes(this.state.inputValue) 
  //       )
  //   })
  // }

  // this.state.dummyData.username.includes(this.state.inputValue)

  // {this.props.data.map((item, index) => {
  //   if (item.username.includes(this.props.searchTerm)) {
  //       return <Post item={item} key={index} update={this.props.update}/>
  //   } return null;
  //   })}

  // searchPostsHandler = e => {
  //   const posts = this.state.posts.filter(p => {
  //     if (p.username.includes(e.target.value)) {
  //       return p;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };

  searchChanges = e => {
    console.log(this.state.inputValue);
    this.setState({
      [e.target.name]: e.target.value,
  })
}

  render() {
    return (
      <div className="app-container">
          <SearchBar 
          searchChanges={this.searchChanges}/>
          <PostWrapper dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
