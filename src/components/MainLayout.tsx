import { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  size: number;
}

type CardData = {
  iconNum: string;
  index: number;
  isFlipped: boolean;
};

const checkIfBoardFlipped = (data: CardData[]) => {
  if (!data.length) return;

  if (data.every((item) => item.isFlipped)) {
    setTimeout(() => {
      alert("Congratulations!");
    }, 1000);
  }
};

export const MainLayout = ({ size }: MainLayoutProps) => {
  const pairsNum = Math.ceil(size / 2);
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [isFieldDisabled, setIsFieldDisabled] = useState(false);
  const flippedPairRef = useRef<number[] | null[]>([null, null]);
  const flippedPair = flippedPairRef.current;

  const flipCard = (index: number | null) => {
    if (index === null) return;

    setCardData((data) => {
      return data.map((item) => {
        if (item.index === index) {
          return { ...item, isFlipped: !item.isFlipped };
        } else {
          return item;
        }
      });
    });
  };

  useEffect(() => {
    const numbers = Array.from(Array(pairsNum), (_, index) => index + 1);

    setCardData(
      numbers
        .concat(numbers)
        .sort(() => Math.random() - 0.5)
        .map((num, index) => ({
          iconNum: `${num}`,
          index: index,
          isFlipped: false,
        }))
    );
  }, [pairsNum]);

  useEffect(() => {
    checkIfBoardFlipped(cardData);
  });

  const onCardClick = (index: number) => {
    flipCard(index);

    if (flippedPair[0] === null) {
      flippedPair[0] = index;
    } else {
      flippedPair[1] = index;
      if (
        cardData[flippedPair[0]].iconNum === cardData[flippedPair[1]].iconNum
      ) {
        // update score
      } else {
        const indexes = [flippedPair[0], flippedPair[1]];
        setIsFieldDisabled(true);
        setTimeout(() => {
          flipCard(indexes[0]);
          flipCard(indexes[1]);
          setIsFieldDisabled(false);
        }, 750);
      }
      flippedPair[0] = null;
      flippedPair[1] = null;
    }
  };

  return (
    <>
      <h2 className={styles.header}>Memory Game</h2>
      <div
        className={`${styles.field} ${
          isFieldDisabled ? styles["field-disabled"] : ""
        }`}
      >
        {cardData.map((data, index) => (
          <Card
            key={index}
            iconNum={data.iconNum}
            index={index}
            isFlipped={data.isFlipped}
            onClick={onCardClick}
          />
        ))}
      </div>
      <button className={styles.button}>Reset Game</button>
    </>
  );
};
