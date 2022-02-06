import React from "react";
import Card from "../card/Card";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./cardDisplay.module.css";
import DisplayFooter from "../displayFooter/DisplayFooter";
import { sortingOrder } from "../../constants/optionsTypes";
import {
  sortNameAscending,
  sortNameDescending,
  dateAscending,
  dateDescending,
} from "../../domain/utils/Utils";

const CardDisplay = () => {
  const {
    dateSort,
    templates,
    orderSort,
    searchedTemplate,
    currentCategory,
    categorySortedTemplates,
  } = useSelector((state) => state.templates);
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage] = useState(15);

  // Get current posts
  const indexOfLastTemplate = currentPage * templatesPerPage;

  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;

  let data = categorySortedTemplates
    ? categorySortedTemplates
    : searchedTemplate
    ? searchedTemplate
    : templates;

  const sort = (arr) => {
    if (orderSort === sortingOrder.ascending) {
      return sortNameAscending([...arr]);
    } else if (orderSort === sortingOrder.descending) {
      return sortNameDescending([...arr]);
    } else if (dateSort === sortingOrder.descending) {
      return dateDescending([...arr]);
    } else if (dateSort === sortingOrder.ascending) {
      return dateAscending([...arr]);
    } else {
      return arr;
    }
  };

  const currentTemplates = sort(data)?.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  const totalPages = Math.ceil(data?.length / templatesPerPage);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.card_display_container}>
      <div className={styles.card_display_heading}>
        <p className={styles.category_heading}>{currentCategory} Templates</p>
        <p className={styles.category_count}>{data?.length} templates</p>
      </div>

      <div className={styles.card_display_main}>
        {currentTemplates?.map((template, index) => (
          <Card key={index} template={template} />
        ))}
      </div>
      <DisplayFooter
        goNext={goNext}
        goBack={goBack}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CardDisplay;
