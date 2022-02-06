import styles from "./searchbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchTemplate } from "../../domain/redux/templateSlicer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.templates);

  const handleOnChange = (e) => {
    dispatch(searchTemplate(e.target.value));
  };

  return (
    <form className={styles.searchContainer}>
      <input
        type="text"
        disabled={isLoading}
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
