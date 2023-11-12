import React from "react";

import styles from "./WinPopup.module.css";

interface WinPopupProps {
  score: number;
  onClose: () => void;
}

export const WinPopup: React.FC<WinPopupProps> = ({ score, onClose }) => {
  return (
    <div className={styles.popup}>
      <h3>Поздравляем!</h3>
      <p>Вы нашли все совпадения за {score} ходов</p>
      <button onClick={onClose}>Играть ещё</button>
    </div>
  );
};
