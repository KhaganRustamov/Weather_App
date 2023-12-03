"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { getThisDay, FormattedWeatherInfo } from "@/services/getData";
import styles from "./thisDay.module.scss";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import clock from "@/assets/images/staticImages/clock.png";
import navigation from "@/assets/images/staticImages/navigation.png";

const ThisDay: React.FC = () => {
  const [data, setData] = useState<FormattedWeatherInfo | undefined>(undefined);
  const currentTime = new Date();

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    getThisDay().then(setData);
  }, []);

  if (data === undefined) {
    return;
  }

  const { temp, city, weatherType } = data as FormattedWeatherInfo;

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div>
          <div className={styles.temp}>{temp}°</div>
          <div className={styles.day}>Today</div>
        </div>
        <DynamicImages weatherType={weatherType} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.time}>
          <Image src={clock} alt="clock" />
          {formattedTime}
        </div>
        <div className={styles.city}>
          <Image src={navigation} alt="nav" />
          {city}
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
