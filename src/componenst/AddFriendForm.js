import React, { useState } from "react";
import { connect } from "react-redux";
import { addFriend } from "../state/actionCreator";

function AddFriend(props) {
  console.log(props);
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  function inputChange(e) {
    return setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  }

  function submitForm(e) {
    e.preventDefault();
    props.addFriend(friend);
    return setFriend({
      name: "",
      age: "",
      email: ""
    });
  }

  return (
    <div>
      <div>Add A New Friend</div>
      <form onSubmit={submitForm}>
        <label>
          Friend's Name:
          <br />
          <input
            name="name"
            placeholder="Name"
            value={friend.name}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Friend's Age:
          <br />
          <input
            name="age"
            placeholder="Age"
            value={friend.age}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Friend's Email:
          <br />
          <input
            name="email"
            placeholder="Email"
            value={friend.email}
            onChange={inputChange}
          />
        </label>
        <br />
        <div>
          <button className="button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
export default connect(
  state => state,
  { addFriend }
)(AddFriend);
