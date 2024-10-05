import { ThreeDots } from "react-loader-spinner";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass={styles.loader}
    />
  );
};

export default Loader;
