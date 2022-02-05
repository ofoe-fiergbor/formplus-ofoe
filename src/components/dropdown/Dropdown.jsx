import React from "react";
import styles from  "./dropdown.module.css";

const Dropdown = ({ label, options, handleChange }) => {
  return (
    <div className={styles.optionContainer}>
      <label htmlFor="cars" className={styles.label}>{label}</label>
      <select className={styles.select} onChange={(e) => handleChange(e)} name={label}>
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
