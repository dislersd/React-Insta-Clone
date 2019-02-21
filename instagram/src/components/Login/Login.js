import React from "react";
import "./Login.css"



const Login = props => {
  return (
    <div className="login-container">
      <input 
        type="text" 
        placeholder="username..."
        onChange={props.userHandler}
      />

      <input type="text" placeholder="password..."
      onChange={props.passwordHandler}
       />

      <button className='register-button' onClick={props.signUp} >
      register
      </button>

      <button onClick={props.login} >
      login
      </button>
    </div>
  );
};

export default Login;
