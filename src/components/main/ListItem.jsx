import React from "react";
import styles from "./ListItem.module.css";
import { useNavigate } from "react-router-dom";

const ListItem = (props) => {
  const { post } = props;

  const navigate = useNavigate();

  return (
    <>
      <li
        className={styles.listItem}
        onClick={() => navigate(`/product/${post.id}`)}
      >
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.content}>{post.content}</p>
      </li>
    </>
  );
};

export default ListItem;
