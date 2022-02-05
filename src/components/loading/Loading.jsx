import React from "react";
import LoadingCard from "../loadingCard/LoadingCard";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      {[...Array(6).keys()].map((c) => (
        <LoadingCard key={c}/>
      ))}
    </div>
  );
};

export default Loading;
