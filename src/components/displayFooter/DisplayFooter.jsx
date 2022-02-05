import React from "react";
import styles from "./displayFooter.module.css";

const DisplayFooter = ({ totalPages, goBack, goNext, currentPage }) => {
  return (
    <div className={styles.display_footer_container}>
      <p onClick={() => goBack()} className={styles.previous_txt}>
        Previous
      </p>
      <div className={styles.counter_container}>
        <div className={styles.counter_container_innier_div}>
          <p>{currentPage}</p>
        </div>
        <p>{`of ${totalPages}`}</p>
      </div>
      <div onClick={() => goNext()} className={styles.next_container}>
        <p className={styles.next_txt}>Next</p>
        <i className={`fas fa-chevron-right ${styles.icon}`}></i>
      </div>
    </div>
  );
};

export default DisplayFooter;
