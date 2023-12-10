"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";

import { getWeatherInfo, FormattedWeatherInfo } from "@/services/getData";
import { changeSearchValue } from "@/redux/slices/searchSlice";
import Popup from "../popup/Popup";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import styles from "./days.module.scss";

const Days: React.FC = () => {
  const [data, setData] = useState<FormattedWeatherInfo[] | undefined>(
    undefined
  );
  const [activeTab, setActiveTab] = useState(0);
  const [popup, setPopup] = useState(false);
  const [selectedDayData, setSelectedDayData] =
    useState<FormattedWeatherInfo | null>(null);
  const search = useSelector((state: RootState) => state.searchValue);
  const dispatch = useDispatch();

  const showPopup = (dayData: FormattedWeatherInfo, dayOfWeek: string) => {
    setPopup(true);
    setSelectedDayData({ ...dayData, dayOfWeek });
  };

  const tabs = ["For a week", "For 14 days", "For a month"];
  const daysToShow = [7, 14, 30];

  useEffect(() => {
    if (!search) {
      dispatch(changeSearchValue("Baku"));
    } else {
      getWeatherInfo(daysToShow[activeTab], search).then(setData);
    }
  }, [activeTab, search]);

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
        <div
          onClick={() =>
            showPopup(item, isToday ? "Today" : getDayName(dayOfWeek))
          }
          className={styles.days_items}
          key={i}
        >
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

    return <div className={styles.days_grid}>{items}</div>;
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
      {popup && (
        <Popup dayData={selectedDayData} closePopup={() => setPopup(false)} />
      )}
      <div className={styles.days}>{days}</div>
    </>
  );
};

export default Days;
