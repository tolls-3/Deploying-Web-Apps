import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreator";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./componenst/login";
import FriendsList from "./componenst/Friends";
import AddFriend from "./componenst/AddFriendForm";

function App(props) {
  //console.log(props);
  const onLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact to="/">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends">Friends</NavLink>
          </li>
          <li>
            <NavLink to="/addfriends">Add Friends</NavLink>
          </li>
        </ul>

        <button className='button2' onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/friends"
          render={props => withAuthCheck(FriendsList, props)}
        />
        <Route
          exact
          path="/addfriends"
          render={props => withAuthCheck(AddFriend, props)}
        />
      </main>
    </div>
  );
}

function withAuthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default withRouter(
  connect(
    state => {
      //console.log(state)
      return state;
    },
    actionCreators
  )(App)
);
