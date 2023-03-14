import React, { useState } from "react";
import styles from "./CommentList.module.css";

const CommentList = (props) => {
  const { comment } = props;
  const [feedComments, setFeedComments] = useState([]);

  const handleRemove = (index) => {
    const copiedFeedComments = [...feedComments];
    copiedFeedComments.splice(index, 1);
    setFeedComments(copiedFeedComments);
  };

  return (
    <li className={styles.comment}>
      <div className={styles.info}>
        <p className={styles.date}>{comment.date}</p>
        <button className={styles.button} onClick={handleRemove}>
          삭제
        </button>
      </div>
      <h3 className={styles.title}>{comment.comment}</h3>
    </li>
  );
};

export default CommentList;
