import React from "react";
import { useSelector } from "react-redux";
import styles from "./dropdown.module.css";

const Dropdown = ({ label, options, handleChange }) => {
  const { isLoading } = useSelector((state) => state.templates);

  return (
    <div className={styles.optionContainer}>
      <label htmlFor="cars" className={styles.label}>
        {label}
      </label>
      <select
        disabled={isLoading}
        className={styles.select}
        onChange={(e) => handleChange(e)}
        name={label}
      >
        {options.map((option) => (
          <option key={option.value} value={options.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
