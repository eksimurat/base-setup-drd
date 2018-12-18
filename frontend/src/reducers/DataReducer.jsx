import { FETCH_USER } from "../actions/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, ...action.user];
    default:
      return state;
  }
};