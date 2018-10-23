import React from 'react';
import { connect } from 'react-redux';
import * as actions from "actions";

const Background = ({background, fetchBackground}) => {
  const now = new Date();
  console.log(now.getUTCDate())
  if(background === null || background.lastUpdate.toString() !== now.getUTCDate()){
    fetchBackground();
  } 
  if(!background){
    return <div>Loading Background</div>
  } else {
    return <div />
  }
}

function mapStateToProps({background}){
  return {background}
}

export default connect(mapStateToProps, actions)(Background);
