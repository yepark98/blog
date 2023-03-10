import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";
import axios from "axios";

import SearchBar from "./SearchBar";
import ListItem from "./ListItem";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3001/posts");
      return result.data;
    }
    fetchData().then((res) => {
      setPosts(res);
    });
  }, []);

  const onFilterItem = (value) => {
    setText(value);
  };

  const searchText = posts.filter((post) => post.title === text);
  const searchFilter = text.length > 0 ? searchText : posts;

  return (
    <section className={styles.container}>
      <SearchBar text={text} handleFilterItem={onFilterItem} />
      {posts.length === 0 ? (
        <div className={styles.textArea}>
          <p className={styles.text}>아직 작성된 포스트가 없습니다.</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {searchFilter.map((post) => (
            <ListItem key={post.id} post={post} id={post.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MainPage;
