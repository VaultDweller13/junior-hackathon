import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <h2 className={styles.header}>Memory Game</h2>
      <div className={styles.info}>
        <p>Time: 100</p>
        <p>Flips: 0</p>
      </div>
      <div className={styles.field}></div>
      <button className={styles.button}>Reset Game</button>
    </>
  );
};

export default MainLayout;
