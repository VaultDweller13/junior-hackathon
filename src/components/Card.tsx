import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Card.module.css";
import { useSpring, a } from "@react-spring/web";

type CardProps = {
  iconNum: string;
  isFlipped: boolean;
  onFlip: (id: string, setIsOpen: Dispatch<SetStateAction<boolean>>) => void;
};

export const Card = ({ iconNum, isFlipped, onFlip }: CardProps) => {
  const [isOpen, setIsOpen] = useState(isFlipped);
  const { transform, opacity } = useSpring({
    opacity: isOpen ? 0 : 1,
    transform: `perspective(600px) rotateY(${isOpen ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 35 },
  });

  const flipCard = () => {
    if (!isOpen) {
      setIsOpen(true);
      onFlip(iconNum, setIsOpen);
    }
  };

  return (
    <div className={styles.container} onClick={flipCard}>
      <a.div
        className={styles.card}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <img
          src={`/icons/${iconNum}.svg`}
          alt="Card icon"
          className={styles.icon}
        />
      </a.div>

      <a.div
        className={styles.card}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      />
    </div>
  );
};
