import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        inputValue: ""
      };
    }

    componentDidMount() {}

    signIn = e => {
      e.preventDefault();
      localStorage.setItem("user", this.state.inputValue);
      window.location.reload();
    };

    changeHandler = e => {
      console.log(e.target.value);
      this.setState({ inputValue: e.target.value })
    }

    render() {
      if (localStorage.getItem("user") === this.state.inputValue) {
        return <App />;
      }
      return <LoginPage {...this.state} changeHandler={this.changeHandler} signIn={this.signIn} />;
    }
  };

export default authenticate;
