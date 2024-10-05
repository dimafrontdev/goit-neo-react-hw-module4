import styles from "./errorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
