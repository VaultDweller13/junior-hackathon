import { Dispatch, SetStateAction } from "react";
import { Card } from "./Card";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  size: number;
}

export const MainLayout = ({ size }: MainLayoutProps) => {
  const pairsNum = Math.ceil(size / 2);
  const numbers = Array.from(Array(pairsNum), (_, index) => index + 1);
  let flippedCardsDiff = 0;
  let flippedCardsCounter = 0;
  let firstFlippedCardCallback: Dispatch<SetStateAction<boolean>> | null = null;
  let counter = pairsNum;

  const onFlip = (id: string, setIsOpen: Dispatch<SetStateAction<boolean>>) => {
    const num = parseInt(id);

    if (!flippedCardsCounter) {
      flippedCardsDiff = num;
      flippedCardsCounter = 1;
      firstFlippedCardCallback = setIsOpen;
    } else {
      if (!(flippedCardsDiff - num)) {
        counter--;
        if (!counter) {
          setTimeout(() => {
            alert("Congratulations!");
          }, 1000);
        }
      } else {
        setTimeout(() => {
          if (firstFlippedCardCallback) firstFlippedCardCallback(false);
          setIsOpen(false);
        }, 1000);
      }

      flippedCardsDiff = 0;
      flippedCardsCounter = 0;
    }
  };

  const cardData = numbers
    .concat(numbers)
    .sort(() => Math.random() - 0.5)
    .map((num, index) => (
      <Card key={index} iconNum={`${num}`} isFlipped={false} onFlip={onFlip} />
    ));

  return (
    <>
      <h2 className={styles.header}>Memory Game</h2>
      <div className={styles.field}>{cardData}</div>
      <button className={styles.button}>Reset Game</button>
    </>
  );
};
