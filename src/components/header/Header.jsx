'use client'

import Image from "next/image";
import Select from "react-select";

import styles from "./header.module.scss";

import logo from "@/assets/images/staticImages/logo.png";
import Theme from "@/components/theme/Theme";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Header = () => {
  // const colourStyles = {
  //   control: (styles) => ({
  //     ...styles,
  //     backgroundColor: "#F0F8FF",
  //     width: "200px",
  //     height: "30px",
  //     border: "none",
  //     borderRadius: "10px",
  //   }),
  // };

  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Image src={logo} className={styles.logo} width={60} height={60} />
        <div className={styles.title}>weather forecast</div>
      </div>
      <div className={styles.wrapper}>
        <Theme />
        {/* <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        /> */}
      </div>
    </header>
  );
};

export default Header;
