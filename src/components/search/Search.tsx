import { ChangeEvent, useCallback, useState } from "react";
// @ts-ignore
import debounce from "lodash.debounce";
import Image from "next/image";
import { getWeatherInfo } from "@/services/getData";

import styles from "./search.module.scss";

import search from "@/assets/images/staticImages/search.png";
import clear from "@/assets/images/staticImages/close.png";

const Search: React.FC = () => {
  const [value, setValue] = useState("");

  const onClear = () => {
    setValue("");
  };

  const testDebounce = useCallback(
    debounce((inputValue: string) => {
      getWeatherInfo(inputValue);
    }, 3000),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    testDebounce(inputValue);
  };

  return (
    <div className={styles.root}>
      <Image src={search} alt="search" className={styles.icon} />
      <input
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Enter the name of the pizza"
      />

      {value && (
        <Image
          onClick={onClear}
          className={styles.clear}
          src={clear}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
