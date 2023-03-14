import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = () => {
  const [login, setLogin] = useState(false);

  return (
    <Header>
      <Inner>
        <Title>
          <Link to={"/"}>Blog</Link>
        </Title>
        <LoginTitle>
          {login ? (
            <Link to={"/"}>로그아웃</Link>
          ) : (
            <Link to={"login"}>로그인</Link>
          )}
        </LoginTitle>
      </Inner>
    </Header>
  );
};

export default HeaderArea;

const Header = styled.header`
  background-color: #a1c4fd;
`;

const Inner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  max-width: 1020px;
  height: 24px;
  list-style: none;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #ffffff;
`;

const LoginTitle = styled.h2`
  font-size: 16px;
  color: #ffffff;
`;
