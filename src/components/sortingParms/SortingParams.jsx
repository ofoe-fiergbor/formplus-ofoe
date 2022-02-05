import React from "react";
import styles from "./sortingParms.module.css";
import { useDispatch } from "react-redux";
import Dropdown from "../dropdown/Dropdown";
import { optionTypes, sortPreferences } from "../../constants/optionsTypes";
import {
  sortByCategory,
  sortByDate,
  sortInOrder,
} from "../../domain/redux/templateSlicer";

const SortingParams = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case sortPreferences.category:
        dispatch(sortByCategory(value));
        break;
      case sortPreferences.order:
        dispatch(sortInOrder(value));
        break;
      case sortPreferences.date:
        dispatch(sortByDate(value));
        break;
    }
  };

  return (
    <div className={styles.sortingParamContainer}>
      <p className={styles.sort_text}>Sort By:</p>
      <div className={styles.paramContainer}>
        {optionTypes.map((optionType) => (
          <Dropdown
            handleChange={handleChange}
            key={optionType.name}
            label={optionType.name}
            options={optionType.options}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingParams;
