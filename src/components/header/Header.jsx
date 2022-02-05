import React from "react";
import styles from "./header.module.css"
import SearchBar from "../searchBar/SearchBar";
import SortingParams from "../sortingParms/SortingParams";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <SearchBar />
      <SortingParams />
    </div>
  );
};

export default Header;
