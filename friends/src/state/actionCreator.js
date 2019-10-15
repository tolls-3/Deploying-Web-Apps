import axiosWithAuth from "../utils/axiosWithAuth";
import * as types from "./actionTypes";

const friendsApi = "http://localhost:5001/api/friends";

export function removeFriend(el) {
  return {
    type: types.DELETE_FRIENDS_SUCCESS,
    payload: el
  };
}

export function fetchFriends() {
  return function(dispatch) {
    dispatch({
      type: types.FETCH_FRIENDS_START
    });
    axiosWithAuth()
      .get(friendsApi)
      .then(res =>
        dispatch({
          type: types.FETCH_FRIENDS_SUCCESS,
          payload: res.data
        })
      )
      .catch(error => {
        dispatch({
          type: types.FETCH_FRIENDS_FAILURE,
          payload: error
        });
      });
  };
}

export function addFriend(char) {
  return function(dispatch) {
    axiosWithAuth()
      .post(friendsApi, char)
      .then(res =>
        dispatch({
          type: types.ADD_FRIENDS_SUCCESS,
          payload: res.data
        })
      )
      .catch(error =>
        dispatch({
          type: types.ADD_FRIENDS_FAILURE,
          payload: error
        })
      );
  };
}

export function deleteFriends(id) {
  return function(dispatch) {
    axiosWithAuth()
      .delete(`http://localhost:5001/api/friends/${id}`)
      .then(({ data }) => dispatch(removeFriend(data)))
      .catch(error =>
        dispatch({
          type: types.DELETE_FRIENDS_FAILURE,
          payload: error
        })
      );
  };
}
