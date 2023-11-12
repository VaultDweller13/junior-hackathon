import { Card } from "./Card";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  size: number;
}

export const MainLayout = ({ size }: MainLayoutProps) => {
  const fieldSize = Math.ceil(size / 2);
  const numbers = Array.from(Array(fieldSize), (_, index) => index + 1);

  const cardData = numbers
    .concat(numbers)
    .sort(() => Math.random() - 0.5)
    .map((num, index) => (
      <Card key={index} iconNum={`${num}`} isFlipped={false} />
    ));

  return (
    <>
      <h2 className={styles.header}>Memory Game</h2>
      <div className={styles.field}>{cardData}</div>
      <button className={styles.button}>Reset Game</button>
    </>
  );
};
