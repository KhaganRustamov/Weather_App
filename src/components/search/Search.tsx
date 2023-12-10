'use client'

import { ChangeEvent, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
// @ts-ignore
import debounce from "lodash.debounce";
import Image from "next/image";
import { changeSearchValue } from "@/redux/slice/searchSlice";
import { getWeatherInfo } from "@/services/getData";

import styles from "./search.module.scss";

import search from "@/assets/images/staticImages/search.png";
import close from "@/assets/images/staticImages/close.png";

const Search: React.FC = () => {
  // const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onClear = () => {
    setValue("");
    // dispatch(changeSearchValue(""));
  };

  const testDebounce = useCallback(
    debounce((inputValue: string) => {
      // dispatch(changeSearchValue(inputValue)); 
    }, 1000),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    testDebounce(e.target.value);
  };

  return (
    <div className={styles.root}>
      <Image src={search} alt="search" className={styles.icon} />
      <input
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Enter the city"
      />

      {value && (
        <Image
          onClick={onClear}
          className={styles.close}
          src={close}
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
