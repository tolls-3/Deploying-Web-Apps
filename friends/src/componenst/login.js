import React, { useState, useRef } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Login(props) {
  //console.log(props)
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function login(e) {
    e.preventDefault();
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
  }

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
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button className='button' type="submit">Log in</button>
      </form>
    </div>
  );
}
