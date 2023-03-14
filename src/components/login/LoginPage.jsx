import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>로그인</h2>
      <form onSubmit={handleSubmit} className={styles.login}>
        <input
          type="text"
          placeholder="아이디"
          className={styles.Input}
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.Input}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
      <div className={styles.signup}>
        <Link to="/signup" className={styles.signupLink}>
          회원가입
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
