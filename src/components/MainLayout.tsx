import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "./Card";
import { WinPopup } from "./WinPopup";
import styles from "./MainLayout.module.css";
import { Leaderboard } from "./Leaderboard";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  size: number;
}

type CardData = {
  iconNum: string;
  index: number;
  isFlipped: boolean;
};

export const MainLayout = ({ size }: MainLayoutProps) => {
  const pairsNum = Math.ceil(size / 2);
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [isFieldDisabled, setIsFieldDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const flippedPairRef = useRef<number[] | null[]>([null, null]);
  const [isOpen, setIsOpen] = useState(false);
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

  const createBoard = useCallback(() => {
    setScore(0);
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

  const checkIfBoardFlipped = () => {
    if (!cardData.length) return;

    if (cardData.every((item) => item.isFlipped)) {
      setTimeout(() => {
        setPopupVisible(true);
      }, 1000);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
    createBoard();
  };

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    createBoard();
  }, [createBoard]);

  useEffect(() => {
    checkIfBoardFlipped();
  });

  const onCardClick = (index: number) => {
    flipCard(index);

    if (flippedPair[0] === null) {
      flippedPair[0] = index;
    } else {
      flippedPair[1] = index;
      setScore((score) => score + 1);

      if (
        cardData[flippedPair[0]].iconNum === cardData[flippedPair[1]].iconNum
      ) {
        setScore((score) => score);
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
      <h2 className={styles.header}>
        <span>П</span>
        <span>е</span>
        <span>р</span>
        <span>е</span>
        <span>в</span>
        <span>е</span>
        <span>р</span>
        <span>т</span>
        <span>ы</span>
        <span>ш</span>
        <span>и</span>
      </h2>

      <div className={styles.top}>
        <p className={styles.score}>Ходов: {score}</p>

        <button
          className={styles["button-leaderboard"]}
          onClick={handleSidebar}
        >
          Leaderboard
        </button>
      </div>
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
      <button className={styles.button} onClick={createBoard}>
        Начать Заново
      </button>
      {popupVisible && <WinPopup score={score} onClose={closePopup} />}
      <Sidebar isOpen={isOpen}>
        <Leaderboard />
      </Sidebar>
    </>
  );
};
