import toast from "react-hot-toast";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={styles.header}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const search = e.target.elements["search"].value;

          if (search.trim().length === 0) {
            toast.error("Please enter a search query!", {
              position: "top-right",
            });
          } else {
            onSubmit(search);
          }
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.search}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
