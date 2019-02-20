import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostWrapper from "./components/PostContainer/PostWrapper";
import data from "./dummy-data";
import "./App.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramPosts: [],
      inputValue: '',
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ instagramPosts: data})
  }
  
  // Kevins Code Solutions

  // {this.props.data.map((item, index) => {
  //   if (item.username.includes(this.props.searchTerm)) {
  //       return <Post item={item} key={index} update={this.props.update}/>
  //   } return null;
  //   })}

  // Lambda Solution

  searchPostsHandler = e => {
    const posts = this.state.instagramPosts.filter( post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };




//   searchChanges = e => {
//     console.log(this.state.inputValue);
//     this.setState({
//       [e.target.name]: e.target.value,
//   })
// }

  render() {
    return (
      <div className="app-container">
          <SearchBar 
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
          />
          <div class="post-parent">
            <PostWrapper
            dummyData={
              this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.instagramPosts
              }
              />
          </div>
      </div>
    );
  }
}

export default App;
