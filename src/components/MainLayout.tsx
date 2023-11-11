import { useState, useEffect } from "react";
import { Card } from "./Card";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  const [cardData, setCardData] = useState<{ id: number; iconNum: string }[]>([]);

  // Уникальные иконки
  const uniqueIcons = ["1", "2", "3", "4"];

  // Генерируем случайные числа от 1 до 8 для распределения иконок
  const generateRandomIcons = () => {
    const icons = Array.from({ length: 8 }, (_, index) => uniqueIcons[index % uniqueIcons.length]);
    return icons.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Получаем случайные иконки
    const randomIcons = generateRandomIcons();

    // Создаем данные для каждой карточки
    const cards = randomIcons.map((iconNum, index) => ({ id: index, iconNum }));

    // Устанавливаем состояние с данными о карточках
    setCardData(cards);
  }, []);

  return (
    <>
      <h2 className={styles.header}>Memory Game</h2>
      <div className={styles.field}>
        {cardData.map((card) => (
          <Card key={card.id} iconNum={card.iconNum} />
        ))}
      </div>
      <button className={styles.button}>Reset Game</button>
    </>
  );
};
