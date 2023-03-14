import React from "react";
import cx from "clsx";
import styles from "./CreatePage.module.css";

const CreatePage = () => {
  return (
    <section className={styles.container}>
      <form>
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
            className={cx(styles.input, styles.border)}
          />

          <textarea
            name="content"
            required
            placeholder="내용을 입력하세요."
            className={cx(styles.textarea, styles.border)}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePage;
