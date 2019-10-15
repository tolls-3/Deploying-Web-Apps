import * as types from "./actionTypes";

const initialFriendState = {
  data: [],
  error: "",
  isFetching: false
};

export function friendReducer(state = initialFriendState, action) {
  switch (action.type) {
    case types.FETCH_FRIENDS_START:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.FETCH_FRIENDS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case types.ADD_FRIENDS_START: {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    case types.ADD_FRIENDS_SUCCESS: {
      return {
        ...state,
        data: action.payload
      };
    }
    case types.ADD_FRIENDS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case types.DELETE_FRIENDS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case types.DELETE_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
