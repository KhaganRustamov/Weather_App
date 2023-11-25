import Select from "react-select";
import { items } from "@/components/thisDayInfo/ThisDayInfo";
import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";

import styles from "./popup.module.scss";

const Popup = () => {
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day__temp}>20°</div>
          <div className={styles.day__name}>Среда</div>
          <div className={styles.img}>
            <DynamicImages id="sun" />
          </div>
          <div className={styles.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={styles.day__city}>
            Время: <span>Санкт-Петербург</span>
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
        <div className={styles.close}>
          <DynamicImages id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
