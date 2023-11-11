import { useState, useMemo } from "react";
import { Card } from "./Card";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  size: number;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ size }) => {
  // Генерируем числа от 1 до size/2
  const numbers = Array.from(Array(size / 2), (_, index) => index + 1);

  const memoizedCardData = useMemo(() => {
    const generateRandomIcons = () => {
      const icons = numbers.concat(numbers).sort(() => Math.random() - 0.5);
      return icons.map((iconNum, id) => ({ id, iconNum: `${iconNum}`, isFlipped: false }));
    };

    return generateRandomIcons();
  }, [numbers, size]);

  const [cardData] = useState(memoizedCardData);

  return (
    <>
      <h2 className={styles.header}>Memory Game</h2>
      <div className={styles.field}>
        {cardData.map((card) => (
          <Card key={card.id} iconNum={card.iconNum} isFlipped={false} />
        ))}
      </div>
      <button className={styles.button}>Reset Game</button>
    </>
  );
};
