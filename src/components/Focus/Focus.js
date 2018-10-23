import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import FocusDisplay from "./FocusDisplay";
import FocusForm from "./FocusForm";

class Focus extends Component {
  componentDidMount() {
    if (!this.props.focus) {
      this.props.setFocus("");
    }
  }
  render() {
    const { focus, removeFocus, setFocus, toggleFocus } = this.props;
    if (!focus) {
      return null;
    }
    return (
      <React.Fragment>
        <FocusDisplay
          isVisible={focus.isVisible}
          focus={focus.focus}
          isChecked={focus.isChecked}
          handleOnClick={() => toggleFocus(focus)}
          removeFocus={removeFocus}
        />
        <FocusForm isVisible={focus.isVisible} onSubmit={setFocus} />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ focus }) {
  return { focus };
}

export default connect(
  mapStateToProps,
  actions
)(Focus);
