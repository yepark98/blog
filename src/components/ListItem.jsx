import React from "react";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const { post } = props;

  return (
    <>
      <li className={styles.listItem}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.content}>{post.content}</p>
      </li>
    </>
  );
};

export default ListItem;
