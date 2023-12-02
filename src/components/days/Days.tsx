"use client";

import { useState, useEffect } from "react";

import { getAllDay, FormattedWeatherInfo } from "@/services/getData";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import styles from "./days.module.scss";

const Days = () => {
  const [data, setData] = useState<FormattedWeatherInfo[] | undefined>(
    undefined
  );
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["На неделю", "На 14 дней", "На месяц"];
  const daysToShow = [7, 14, 30];

  useEffect(() => {
    getAllDay(daysToShow[activeTab]).then(setData);
  }, [activeTab]);

  if (data === undefined) {
    return null;
  }

  const renderWeatherCard = (days: FormattedWeatherInfo[]) => {
    const items = days.map((item, i) => (
      <div className={styles.days_items} key={i}>
        <div className={styles.day}>{1}</div>
        <div className={styles.day_info}>{1}</div>
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
            className={`${styles.tab} ${activeTab === i ? styles.active : ""}`}
            key={i}
            onClick={() => setActiveTab(i)}
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
