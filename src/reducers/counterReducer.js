import {INCREMENT, DECREMENT} from '../constants/actionTypes';
import objectAssign from 'object-assign';



// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

const ACTION_HANDLERS = {
  [INCREMENT]: (state) => {
    return objectAssign({}, state, {
      count: state.count+1
    });
  },
  [DECREMENT]: (state) => {
    return objectAssign({}, state, {
      count: state.count-1
    });
  }
};


const initialState = {
  count: 0
};

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
