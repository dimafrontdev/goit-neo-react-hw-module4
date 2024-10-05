import styles from "./loadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
