import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

const SearchBar = (props) => {
  const { text, handleFilterItem } = props;

  const [login, setLogin] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <BiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="검색"
          className={styles.input}
          value={text}
          onChange={(e) => handleFilterItem(e.target.value)}
        />
      </div>
      {login && (
        <Link to="/create">
          <button className={styles.button}>글 쓰기</button>
        </Link>
      )}
    </div>
  );
};

export default SearchBar;
