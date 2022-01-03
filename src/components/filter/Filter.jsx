import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filterChange }) => {
  return (
    <div className={styles.column}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        required
        type="text"
        name="filter"
        onChange={filterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Input a name"
      />
    </div>
  );
};

export default Filter;
