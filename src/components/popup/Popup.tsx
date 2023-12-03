"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { getWeatherInfo, FormattedWeatherInfo } from "@/services/getData";
import styles from "./popup.module.scss";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";
import close from "@/assets/images/staticImages/close.png";
import thermometer from "@/assets/images/staticImages/thermometer.png";
import pressureImg from "@/assets/images/staticImages/pressure.png";
import humidityImg from "@/assets/images/staticImages/humidity.png";
import wind from "@/assets/images/staticImages/wind.png";
import clock from "@/assets/images/staticImages/clock.png";
import navigation from "@/assets/images/staticImages/navigation.png";

interface PopupProps {
  dayData: FormattedWeatherInfo | null;
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ dayData, closePopup }) => {
  const currentTime = new Date();

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    getWeatherInfo(1);
  }, []);

  if (!dayData) {
    return null;
  }

  const {
    temp,
    city,
    tempFeelsLike,
    pressure,
    humidity,
    windSpeed,
    weatherType,
  } = dayData;

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
  return (
    <>
      <div className={styles.blur}>
        <div className={styles.popup}>
          <div className={styles.day}>
            <div className={styles.day__temp}>{temp}°</div>
            <div className={styles.day__name}>Среда</div>
            <DynamicImages weatherType={weatherType} />
            <div className={styles.day__time}>
              <Image src={clock} alt="clock" />
              {formattedTime}
            </div>
            <div className={styles.day__city}>
              <Image src={navigation} alt="nav" />
              {city}
            </div>
          </div>
          <div className={styles.info}>
            {items.map((item, i) => (
              <div className={styles.items} key={i}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.value}>{item.value}</div>
              </div>
            ))}
          </div>
          <Image
            className={styles.close}
            onClick={closePopup}
            alt="close"
            src={close}
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
