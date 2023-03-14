import React from "react";
import styles from "./MainPage.module.css";

import SearchBar from "./SearchBar";
import ListItem from "./ListItem";

const MainPage = () => {
  return (
    <section className={styles.container}>
      <SearchBar />
      <ul className={styles.list}>
        <ListItem />
      </ul>
    </section>
  );
};

export default MainPage;
