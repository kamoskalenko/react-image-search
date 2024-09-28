import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={!!image}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        className={styles.modalContent}
        overlayClassName={styles.overlay}
      >
        {image && (
          <div className="overlay">
            <div className="modalContent">
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                className={styles.image}
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
