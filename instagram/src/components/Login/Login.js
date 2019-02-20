import React from "react";



const Login = props => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="username..."
        onChange={props.changeHandler}
      />

      <input type="text" placeholder="password..." />

      <button onClick={props.signIn} >
      Login
      </button>
    </div>
  );
};

export default Login;
