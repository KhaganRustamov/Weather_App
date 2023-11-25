import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";

import styles from "./days.module.scss";

const Days = () => {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];

  const days = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "28 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сб",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Вс",
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
            <div className={styles.tab} key={i}>
              {tab.value}
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
            <div className={styles.img}>
              <DynamicImages id={day.icon_id} />
            </div>
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
