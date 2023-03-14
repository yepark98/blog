import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";
import axios from "axios";

import SearchBar from "./SearchBar";
import ListItem from "./ListItem";

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3001/posts");
      return result.data;
    }
    fetchData().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <section className={styles.container}>
      <SearchBar />
      <ul className={styles.list}>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
