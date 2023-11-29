"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./thisDayInfo.module.scss";
import { getThisDay, FormattedWeatherInfo } from "@/services/getData";
import thermometer from "@/assets/images/staticImages/thermometer.png";
import pressureImg from "@/assets/images/staticImages/pressure.png";
import humidityImg from "@/assets/images/staticImages/humidity.png";
import wind from "@/assets/images/staticImages/wind.png";

const ThisDayInfo = () => {
  const [data, setData] = useState<FormattedWeatherInfo | undefined>(undefined);
  const { temp, tempFeelsLike, pressure, humidity, windSpeed } =
    data as FormattedWeatherInfo;

  const items = [
    {
      icon: (
        <Image src={thermometer} width={35} height={35} alt="thermometer" />
      ),
      name: "Temperature",
      value: `${temp}°C - feels like ${tempFeelsLike}°C`,
    },
    {
      icon: <Image src={pressureImg} width={35} height={35} alt="pressure" />,
      name: "Pressure",
      value: `${pressure} mm Hg`,
    },
    {
      icon: <Image src={humidityImg} width={35} height={35} alt="humidity" />,
      name: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <Image src={wind} width={35} height={35} alt="wind" />,
      name: "Wind",
      value: `${windSpeed} m/s`,
    },
  ];

  useEffect(() => {
    getThisDay().then(setData);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.indicators}>
        {items.map((item, i) => (
          <div className={styles.items} key={i}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThisDayInfo;
