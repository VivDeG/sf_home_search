import { merge } from 'lodash';
import { RECEIVE_ALL_HOMES } from '../actions/home_actions';

const homesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HOMES:
      return merge({}, action.homes);
    default:
      return state;
  }
};

export default homesReducer;