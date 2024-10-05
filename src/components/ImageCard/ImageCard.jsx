import styles from "./imageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <img src={image.urls["small"]} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
