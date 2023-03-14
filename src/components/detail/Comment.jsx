import React, { useState, useEffect } from "react";
import cx from "clsx";
import dayjs from "dayjs";
import styles from "./Comment.module.css";
import axios from "axios";
import CommentList from "./CommentList";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [feedComments, setFeedComments] = useState([]);

  const handleClick = () => {
    axios.post("http://localhost:3001/comments", {
      comment: comment,
      date: dayjs().format("YYYY-MM-DD HH:mm"),
    });
    setComment("");
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3001/comments`);
      return result.data;
    }
    fetchData().then((res) => {
      setFeedComments(res);
    });
  }, [feedComments]);

  return (
    <section className={styles.comment}>
      <input
        className={styles.input}
        type="text"
        placeholder="댓글 달기"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className={cx(
          styles.button,
          comment.length > 0 ? styles.onBtn : styles.offBtn
        )}
        onClick={handleClick}
      >
        등록
      </button>
      <ul className={styles.commentList}>
        {feedComments.map((feedComment) => (
          <CommentList key={feedComment.id} comment={feedComment} />
        ))}
      </ul>
    </section>
  );
};

export default Comment;
