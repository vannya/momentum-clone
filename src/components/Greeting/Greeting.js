import React, { Component } from "react";
import styles from "./Greeting.module.css";

class Greeting extends Component {
  state = {
    time: ""
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1200000
    );
  }

  getTimeOfDay = () => {
    var time = new Date();
    var hour = time.getHours();
    if (hour > 16) {
      return "evening";
    } else if (hour < 12) {
      return "morning";
    } else {
      return "afternoon";
    }
  };

  render() {
    let timeOfDay = this.getTimeOfDay();
    return (
      <section className={styles.greeting}>
        <h1>Good {timeOfDay}, Van</h1>
      </section>
    );
  }
}

export default Greeting;
