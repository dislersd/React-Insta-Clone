import React from "react";



const Login = props => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="username..."
        onChange={props.userHandler}
      />

      <input type="text" placeholder="password..."
      onChange={props.passwordHandler}
       />

      <button onClick={props.signUp} >
      register
      </button>

      <button onClick={props.login} >
      login
      </button>
    </div>
  );
};

export default Login;
