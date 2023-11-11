import styles from "./Card.module.css";

type CardProps = {
  iconNum: string;
};

export const Card = ({ iconNum }: CardProps) => {
  return (
    <div className={styles.card}>
      <img
        src={`/icons/${iconNum}.svg`}
        alt="Card icon"
        className={styles.icon}
      />
    </div>
  );
};
