import {INCREMENT, DECREMENT} from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
