import styles from "./searchbar.module.css";
import { searchTemplate } from "../../domain/redux/templateSlicer";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(searchTemplate(e.target.value));
  };

  return (
    <form className={styles.searchContainer}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search Templates"
        onChange={(e) => handleOnChange(e)}
      />
      <button className={styles.button} disabled>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
