import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cx from "clsx";
import styles from "./CreatePage.module.css";

const CreatePage = () => {
  const [text, setText] = useState({ title: "", content: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", {
      title: text.title,
      content: text.content,
    });
    navigate("/");
  };

  console.log(text);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.buttonArea}>
          <button type="submit" className={styles.button}>
            글 등록
          </button>
        </div>
        <div className={styles.textArea}>
          <input
            type="text"
            name="title"
            required
            placeholder="제목"
            value={text.title}
            onChange={handleChange}
            className={cx(styles.input, styles.border)}
          />

          <textarea
            name="content"
            required
            placeholder="내용을 입력하세요."
            value={text.content}
            onChange={handleChange}
            className={cx(styles.textarea, styles.border)}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePage;
