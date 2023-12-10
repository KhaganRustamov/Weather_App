"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { AppDispatch } from "@/redux/store";
import { changeSearchValue } from "@/redux/slices/searchSlice";
import { getWeatherInfo } from "@/services/getData";

import styles from "./search.module.scss";

import searching from "@/assets/images/staticImages/search.png";
import close from "@/assets/images/staticImages/close.png";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const onClear = () => {
    setValue("");
    dispatch(changeSearchValue(""));
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(changeSearchValue(e.target.value));
    getWeatherInfo(1, e.target.value);
  };

  return (
    <div className={styles.root}>
      <Image src={searching} alt="search" className={styles.icon} />
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
