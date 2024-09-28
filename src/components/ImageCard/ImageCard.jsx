import styles from "./ImageCard.module.css";

const ImageCard = ({ data, openModal }) => {
  return (
    <div className={styles.card} onClick={() => openModal(data)}>
      <img
        className={styles.image}
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default ImageCard;
