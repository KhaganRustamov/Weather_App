import styles from "./thisDay.module.scss";

import DynamicImages from "@/assets/images/dynamicImages/DynamicImages";

const ThisDay = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div>
          <div className={styles.temp}>20°</div>
          <div className={styles.day}>Today</div>
        </div>
        <DynamicImages id="sun" />
      </div>
      <div className={styles.bottom}>
        <div>Time: 13:00</div>
        <div>City: Baku</div>
      </div>
    </div>
  );
};

export default ThisDay;
