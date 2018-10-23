import React from "react";
import styles from "./Focus.module.css";

const FocusDisplay = ({
  focus,
  isChecked,
  handleOnClick,
  removeFocus,
  isVisible
}) => {
  return (
    <section className={isVisible ? styles.focus : styles.focusClosed}>
      <h3>TODAY</h3>
      <span className={styles.displayed}>
        <span onClick={handleOnClick}>
          {
            <i
              className={
                isChecked ? "far fa-check-square fa-lg" : "far fa-square fa-lg"
              }
            />
          }
        </span>
        <span className={!isChecked ? styles.name : styles.nameStriked}>
          {focus}
        </span>
        <span>
          <i
            className="far fa-times-circle fa-2x"
            aria-hidden="true"
            onClick={removeFocus}
          />
        </span>
      </span>
    </section>
  );
};

export default FocusDisplay;
