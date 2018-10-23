import React, { Component } from "react";
import { connect } from 'react-redux';
// import Background from "components/Background";
import Focus from "components/Focus";
import Greeting from "components/Greeting";
import styles from "App.module.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        className={styles.app}
        style={{/*
          background: `url(${
            this.props.background.currentImg
          }) no-repeat center center fixed`,
          backgroundSize: "cover"
        */
          background: '#364864'
      }}
      >
        {/*<Background />*/}
        <section className={styles.topApp}></section>
        <section className={styles.centerApp}>
          <Greeting />        
          <Focus />
        </section>
        <section className={styles.bottomApp}></section>
      </div>
    );
  }
}

function mapStateToProps({background}){
  return {background}
}

export default connect(mapStateToProps)(App);
