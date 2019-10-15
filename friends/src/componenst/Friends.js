import React from "react";
import { connect } from "react-redux";
import { fetchFriends, deleteFriends } from "../state/actionCreator";

function FriendsList(props) {
  //console.log(props);

  function getFriends() {
    props.fetchFriends();
  }

  function delSmurf(e, id) {
    //debugger;
    e.preventDefault();
    props.deleteFriends(id);
  }
  return (
    <div>
      <button className='button' onClick={getFriends}>FETCH FRIENDS</button>
      <div>
        {props.friend.data.map(char => (
          <div key={char.id}>
            NAME:{char.name} AGE:{char.age} EMAIL:{char.email}
            <button
              className="button2"
              onClick={function(e) {
                return delSmurf(e, char.id);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default connect(
  state => state,
  { fetchFriends, deleteFriends }
)(FriendsList);
