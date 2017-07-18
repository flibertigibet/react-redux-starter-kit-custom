import {INCREMENT, DECREMENT, DOUBLE} from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware

export function doubleAsync() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dispatch(double()));
      }, 1000);
    });
  };
}

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

function double() {
  return {
    type: DOUBLE
  };
}
