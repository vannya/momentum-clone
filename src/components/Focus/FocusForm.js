import React from "react";
import styles from "./Focus.module.css";

const FocusForm = ({ onSubmit, isVisible }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.focusInput.value.toString());
    e.target.reset();
  };
  return (
    <section className={isVisible ? styles.focusClosed : styles.focus}>
      <form className={styles.formRendered} onSubmit={handleSubmit}>
        <section className={styles.question}>
          What is your main focus for today?
        </section>
        <input type="text" name="focusInput" autoComplete="off" />
      </form>
    </section>
  );
};

export default FocusForm;
