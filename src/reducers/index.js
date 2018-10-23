import {combineReducers} from "redux";
import backgroundReducer from "reducers/background";
import focusReducer from "reducers/focus";

export default combineReducers({
  background: backgroundReducer,
  focus: focusReducer
})
