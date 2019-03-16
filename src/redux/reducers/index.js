import { combineReducers } from "redux";
import { GET_DATA, SET_STOP } from '../types';

const initialState = {
  data: {},
  curStop: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_DATA:
        return {...state, data: action.payload};
      case SET_STOP:
        return {...state, curStop: action.payload};
      default: 
        return state;
  }
}


export default combineReducers({
  reducer: reducer,
});
