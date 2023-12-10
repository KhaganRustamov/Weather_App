'use client'

import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";

import styles from "./theme.module.scss";

const Theme = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div>🌙</div>
      <div>🔆</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};
  
export default Theme;
