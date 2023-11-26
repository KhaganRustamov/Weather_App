import styles from "./theme.module.scss";

import "@/app/global.css";

const Theme = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball}></div>
    </div>
  );
};

export default Theme;
