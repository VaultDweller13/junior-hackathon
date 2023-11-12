import React from "react";

import styles from "./WinPopup.module.css";

interface WinPopupProps {
  score: number;
  onClose: () => void;
}

export const WinPopup: React.FC<WinPopupProps> = ({ score, onClose }) => {
  return (
    <div className={styles.popup}>
      <h3>Congratulations!</h3>
      <p>You done it in {score} flips</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
