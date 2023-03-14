import React, { useState, useEffect } from "react";
import styles from "./DetailPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import cx from "clsx";

const DetailPage = () => {
  const [posts, setPosts] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const getPosts = async () => {
    const response = await axios.get(
      `http://localhost:3001/posts/${params.id}`
    );
    return setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleRemove = async () => {
    const response = await axios.delete(
      `http://localhost:3001/posts/${params.id}`
    );
    navigate("/");
    return setPosts(response.data);
  };

  console.log(posts.length);

  return (
    <section className={styles.container}>
      <div className={styles.buttonAear}>
        <button type="button" className={cx(styles.button, styles.editButton)}>
          글 수정
        </button>
        <button type="button" className={styles.button} onClick={handleRemove}>
          글 삭제
        </button>
      </div>
      <div className={styles.titleArea}>
        <h3 className={styles.title}>{posts.title}</h3>
        <hr className={styles.divider} />
        <p className={styles.content}>{posts.content}</p>
      </div>
    </section>
  );
};

export default DetailPage;
