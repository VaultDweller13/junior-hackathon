import styles from "./Card.module.css";
import { useSpring, a } from "@react-spring/web";

type CardProps = {
  iconNum: string;
  index: number;
  isFlipped: boolean;
  onClick: (index: number) => void;
};

export const Card = ({ iconNum, index, isFlipped, onClick }: CardProps) => {
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 0 : 1,
    transform: `perspective(600px) rotateY(${isFlipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 35 },
  });

  const flipCard = () => {
    if (!isFlipped) {
      onClick(index);
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
