import { combineReducers } from "redux";
import { GET_DATA } from '../types';

const initialState = {
  data: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_DATA:
        return {...state, data: action.payload};
      default: 
        return state;
  }
}


export default combineReducers({
  reducer: reducer,
});
