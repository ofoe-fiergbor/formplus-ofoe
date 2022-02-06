import React from "react";
import Dropdown from "../dropdown/Dropdown";
import styles from "./sortingParms.module.css";
import { useDispatch, useSelector } from "react-redux";
import { optionTypes } from "../../constants/optionsTypes";
import {
  sortByCategory,
  sortByDate,
  sortInOrder,
} from "../../domain/redux/templateSlicer";

const SortingParams = () => {
  const { dateSort, orderSort, currentCategory } = useSelector(
    (state) => state.templates
  );
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    dispatch(sortByCategory(e.target.value));
  };
  const handleOrderChange = (e) => {
    dispatch(sortInOrder(e.target.value));
  };
  const handleDateChange = (e) => {
    dispatch(sortByDate(e.target.value));
  };

  return (
    <div className={styles.sortingParamContainer}>
      <p className={styles.sort_text}>Sort By:</p>
      <div className={styles.paramContainer}>
        <Dropdown
          handleChange={handleCategoryChange}
          value={currentCategory}
          key={optionTypes[0].name}
          label={optionTypes[0].name}
          options={optionTypes[0].options}
        />
        <Dropdown
          handleChange={handleOrderChange}
          value={orderSort}
          key={optionTypes[1].name}
          label={optionTypes[1].name}
          options={optionTypes[1].options}
        />
        <Dropdown
          handleChange={handleDateChange}
          key={optionTypes[2].name}
          value={dateSort}
          label={optionTypes[2].name}
          options={optionTypes[2].options}
        />
      </div>
    </div>
  );
};

export default SortingParams;
