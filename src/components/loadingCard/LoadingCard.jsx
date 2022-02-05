import React from "react";
import styles from "./loadingCard.module.css";

const LoadingCard = () => {
  return (
    <div className={styles.loading_card}>
      <div className={styles.loading_card_main}>
        <div className={styles.lds_dual_ring}></div>
      </div>
      <div className={styles.loading_card_footer}>
          <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingCard;
