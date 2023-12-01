"use client";

import { useState, useEffect } from "react";

import { getThisDay, FormattedWeatherInfo } from "@/services/getData";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import styles from "./days.module.scss";

const Days = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getThisDay(1).then(setData);
  }, []);

  const { weatherType } = data;

  const tabs = ["На неделю", "На 10 дней", "На месяц"];

  const days = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];

  return (
    <>
      <div className={styles.tabs}>
        <div className={styles.tabs_wrapper}>
          {tabs.map((tab, i) => (
            <div
              className={`${styles.tab} ${tabs === i ? styles.active : ""}`}
              key={i}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className={styles.cancel}>Отменить</div>
      </div>

      <div className={styles.days}>
        {days.map((day, i) => (
          <div className={styles.days_items} key={i}>
            <div className={styles.day}>{day.day}</div>
            <div className={styles.day_info}>{day.day_info}</div>
            <DynamicImages weatherType={weatherType} />
            <div className={styles.temp_day}>{day.temp_day}</div>
            <div className={styles.temp_night}>{day.temp_night}</div>
            <div className={styles.info}>{day.info}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Days;
