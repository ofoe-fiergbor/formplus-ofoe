import React from "react";
import styles from "./notice.module.css";
import { noticeMessage } from "../../constants/texts";

const Notice = () => {
  return (
    <div className={styles.notice_container}>
      <div id={styles.icon}>i</div>
      <p>{noticeMessage}</p>
    </div>
  );
};

export default Notice;
