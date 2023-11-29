"use client";

import { useEffect, useState } from "react";
import { getThisDay } from "@/services/getData";
import styles from "./thisDay.module.scss";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";

const ThisDay = () => {
  const [data, setData] = useState({});
  const currentTime = new Date();

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const fetchData = async () => {
      setData(await getThisDay());
    };
    fetchData();
  }, []);

  const { temp, city} = data;

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div>
          <div className={styles.temp}>{temp}°</div>
          <div className={styles.day}>Today</div>
        </div>
        <DynamicImages id="sun" />
      </div>
      <div className={styles.bottom}>
        <div>Time: {formattedTime}</div>
        <div>{city}</div>
      </div>
    </div>
  );
};

export default ThisDay;
