import { useEffect, useState } from "react";
import styles from "./Leaderboard.module.css";

type UserData = {
  name: string;
  score: number;
  movesCount: number;
  city: string;
};

const endpoint = "http://45.8.248.224/users";

export const Leaderboard = () => {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [error, setError] = useState("");
  const errorMessage = "Не удалось получить данные :(";

  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch(endpoint, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError("Network response was not OK");
      }
      const data = await response.json();

      setUsersData(data);
    };

    fetchUsersData();
  }, []);

  return error ? (
    <p>{errorMessage}</p>
  ) : (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          <th>Имя</th>
          <th>Город</th>
          <th>Ходы</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((data, index) => (
          <tr key={index}>
            <th>{data.name}</th>
            <th>{data.city}</th>
            <th>{data.movesCount}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
