import { useState } from "react";
import styles from "./Card.module.css";

type CardProps = {
  iconNum: string;
  isFlipped: boolean;
};

export const Card = ({ iconNum, isFlipped }: CardProps) => {
  const [isOpen, setIsOpen] = useState(isFlipped);

  const flipCard = () => {
    if (!isOpen) setIsOpen(true);
  };

  return (
    <div className={styles.card} onClick={flipCard}>
      {isOpen && (
        <img
          src={`/icons/${iconNum}.svg`}
          alt="Card icon"
          className={styles.icon}
        />
      )}
    </div>
  );
};
