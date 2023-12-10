import Image from "next/image";

import styles from "./header.module.scss";

import logo from "@/assets/images/staticImages/logo.png";
import Theme from "@/components/theme/Theme";
import Search from "../search/Search";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Image
          alt="logo"
          src={logo}
          className={styles.logo}
          width={60}
          height={60}
        />
        <div className={styles.title}>weather forecast</div>
      </div>
      <Search />
      <div className={styles.wrapper}>
        <Theme />
      </div>
    </header>
  );
};

export default Header;
