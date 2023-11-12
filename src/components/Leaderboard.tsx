import { useEffect, useState } from "react";

type UserData = {
  name: string;
  score: number;
  movesCount: number;
  city: string;
};

const endpoint = "http://45.8.248.224/users";

export const Leaderboard = () => {
  const [usersData, setUsersData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const data = await fetch(endpoint, { mode: "cors" });
      console.log(data);
    };
    fetchUsersData();
  }, []);

  return <p>Leaderboard</p>;
};
