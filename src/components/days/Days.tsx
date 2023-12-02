"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

import { getAllDay, FormattedWeatherInfo } from "@/services/getData";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import styles from "./days.module.scss";

const Days = () => {
  const [data, setData] = useState<FormattedWeatherInfo[] | undefined>(
    undefined
  );
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["For a week", "For 14 days", "For a month"];
  const daysToShow = [7, 14, 30];

  useEffect(() => {
    getAllDay(daysToShow[activeTab]).then(setData);
  }, [activeTab]);

  if (data === undefined) {
    return null;
  }

  const renderWeatherCard = (days: FormattedWeatherInfo[]) => {
    const today = new Date();

    const items = days.slice(0, daysToShow[activeTab]).map((item, i) => {
      const dayOfWeek = (today.getDay() + i) % 7;
      const isToday = dayOfWeek === today.getDay() && i === 0;

      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      return (
        <div className={styles.days_items} key={i}>
          <div className={styles.day}>
            {isToday ? "Today" : getDayName(dayOfWeek)}
          </div>
          <div className={styles.day_info}>{format(currentDate, "d MMM")}</div>
          <DynamicImages weatherType={item.weatherType} />
          <div className={styles.temp_day}>{item.tempDay}°</div>
          <div className={styles.temp_night}>{item.tempNight}°</div>
          <div className={styles.info}>{item.description}</div>
        </div>
      );
    });

    return <div className={styles.days_flex}>{items}</div>;
  };

  const getDayName = (dayIndex: number) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[dayIndex];
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
