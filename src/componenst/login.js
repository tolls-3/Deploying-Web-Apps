import React, { useState } from "react";
import axios from "axios";
import * as actionCreators from "../state/actionCreator";
import { connect } from "react-redux";
//import { LOGGING_IN } from "../state/actionTypes";

function Login(props) {
  //console.log(props);
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function login(e) {
    e.preventDefault();
    // return function(dispatch) {
    //   // dispatch({
    //   //   type: LOGGING_IN
    //   // });
      axios
        .post("http://localhost:5001/api/login", user)
        .then(res => {
          console.log(res.data);
          localStorage.setItem("token", res.data.payload);
          props.history.push("/friends");
        })
        .catch(error => {
          //debugger;
          alert(error.response.data.error);
        });
    };
  

  function handleChange(e) {
    return setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          autoComplete="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button className="button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default connect(
  state => {
    //console.log(state);
    return state;
  },
  actionCreators
)(Login);
