import React, { useState } from "react";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {};

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>회원가입</h2>
      <form onSubmit={handleSubmit} className={styles.signup}>
        <div className={styles.idSection}>
          <input
            type="text"
            placeholder="아이디"
            className={styles.idInput}
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className={styles.idButton} onClick={handleClick}>
            중복 확인
          </button>
        </div>
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.pwInput}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className={styles.pwInput}
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </section>
  );
};

export default SignupPage;
