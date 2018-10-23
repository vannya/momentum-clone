import axios from "axios";
import {
  FETCH_BACKGROUND,
  SET_FOCUS,
  REMOVE_FOCUS,
  TOGGLE_FOCUS
} from "actions/types";
import cred from "config";

/** Background actions */
export const fetchBackground = () => async dispatch => {
  const res = await axios.get(
    "https://api.unsplash.com/photos/random?collections=1097296&client_id=" +
      cred.applicationId +
      "&utm_source=vannya&utm_medium=referral&utm_campaign=api-credit"
  );

  dispatch({ type: FETCH_BACKGROUND, payload: res.data });
};


/** Focus actions */
export const setFocus = newFocus => dispatch => {
  dispatch({
    type: SET_FOCUS,
    payload: newFocus
  });
};

export const removeFocus = () => dispatch => {
  dispatch({
    type: REMOVE_FOCUS
  });
};

export const toggleFocus = currentFocus => dispatch => {
  dispatch({
    type: TOGGLE_FOCUS,
    payload: currentFocus
  });
};
