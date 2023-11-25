import Image from "next/image";

import styles from "./thisDayInfo.module.scss";

import thermometer from "@/assets/images/staticImages/thermometer.png";
import pressure from "@/assets/images/staticImages/pressure.png";
import rain from "@/assets/images/staticImages/rain.png";
import wind from "@/assets/images/staticImages/wind.png";

export const items = [
  {
    icon: <Image src={thermometer} width={35} height={35} />,
    name: "Температура",
    value: "20° - ощущается как 17°",
  },
  {
    icon: <Image src={pressure} width={35} height={35} />,
    name: "Давление",
    value: "765 мм ртутного столба - нормальное",
  },
  {
    icon: <Image src={rain} width={35} height={35} />,
    name: "Осадки",
    value: "Без осадков",
  },
  {
    icon: <Image src={wind} width={35} height={35} />,
    name: "Ветер",
    value: "3 м/с юго-запад - легкий ветер",
  },
];

const ThisDayInfo = () => {
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
