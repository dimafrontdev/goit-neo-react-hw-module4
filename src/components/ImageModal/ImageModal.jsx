import Modal from "react-modal";
import styles from "./imageModal.module.css";

const customStyles = {
  content: {
    padding: 0,
    border: "none",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
};

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <div className={styles.modalWrapper}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        <div className={styles.details}>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
