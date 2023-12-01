"use client";

import { useState, useEffect } from "react";

import { getAllDay, FormattedWeatherInfo } from "@/services/getData";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import styles from "./days.module.scss";

const Days = () => {
  const [data, setData] = useState<FormattedWeatherInfo[] | undefined>(
    undefined
  );

  useEffect(() => {
    getAllDay(7).then(setData);
  }, []);

  if (data === undefined) {
    return;
  }

  const tabs = ["На неделю", "На 10 дней", "На месяц"];

  const renderWeatherCard = (days: FormattedWeatherInfo[]) => {
    const items = days.map((item, i) => (
      <div className={styles.days_items} key={i}>
        <div className={styles.day}>1</div>
        <div className={styles.day_info}>2</div>
        <DynamicImages weatherType={item.weatherType} />
        <div className={styles.temp_day}>{item.tempDay}°</div>
        <div className={styles.temp_night}>{item.tempNight}°</div>
        <div className={styles.info}>{item.description}</div>
      </div>
    ));

    return <div className={styles.days_flex}>{items}</div>;
  };

  const days = renderWeatherCard(data);

  return (
    <>
        <div className={styles.tabs}>
          {tabs.map((tab, i) => (
            <div
              className={`${styles.tab} ${
                tabs[i] === tabs[i] ? styles.active : ""
              }`}
              key={i}
            >
              {tab}
            </div>
          ))}
        </div>
      <div className={styles.days}>{days}</div>
    </>
  );
};

export default Days;
