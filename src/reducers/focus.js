import { SET_FOCUS, REMOVE_FOCUS, TOGGLE_FOCUS } from "actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_FOCUS:
      return {
        focus: action.payload,
        isChecked: false,
        isVisible: true
      };
    case REMOVE_FOCUS:
      return {
        focus: "",
        isChecked: false,
        isVisible: false
      };
    case TOGGLE_FOCUS:
      return {
        focus: action.payload.focus,
        isChecked: !action.payload.isChecked,
        isVisible: action.payload.isVisible
      };
    default:
      return state;
  }
}
