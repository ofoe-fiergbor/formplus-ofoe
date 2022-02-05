import React from "react";
import styles from "./card.module.css";

const Card = ({ template }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_main}>
        <h2 className={styles.template_name}>{template.name}</h2>
        <p className={styles.description}>{template.description}</p>
      </div>

      <div
        onClick={() => window.open(template.link)}
        className={styles.cardFooter}
      >
        <p className={styles.description}>Use Template</p>
      </div>
    </div>
  );
};

export default Card;
