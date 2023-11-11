import styles from "./Card.module.css";
import icon from "./family-svgrepo-com.svg";

export const Card = () => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="Card icon" className={styles.icon} />
    </div>
  );
};
