import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      };
    }
    
    signUp = e => {
      e.preventDefault();
      localStorage.setItem("user", this.state.username);
      localStorage.setItem("password", this.state.password);
      window.location.reload();
    };

    login = () => {
      if (
        localStorage.getItem("user") === this.state.username &&
        localStorage.getItem("password") === this.state.password
      ) {
        this.setState({ loggedIn: true });
      }
    } 

    userHandler = e => {
      console.log(e.target.value);
      this.setState({ username: e.target.value });
    };

    passwordHandler = e => {
      console.log(e.target.value);
      this.setState({ password: e.target.value });
    };

    render() {
      if (this.state.loggedIn) {
        return <App />;
      }
      return (
        <LoginPage
          {...this.state}
          userHandler={this.userHandler}
          passwordHandler={this.passwordHandler}
          signUp={this.signUp}
          login={this.login}
        />
      );
    }
  };

export default authenticate;
