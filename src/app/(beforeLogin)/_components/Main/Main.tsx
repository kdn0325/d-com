import React from "react";
import Link from "next/link";
import { h1, h2, h3, left, login, right, signup } from "./Main.css";

const Main = () => {
  return (
    <>
      <div className={left}>로고</div>
      <div className={right}>
        <h1 className={h1}>지금 일어나고 있는 일</h1>
        <h2 className={h2}>지금 가입하세요.</h2>
        <Link className={signup} href="/i/flow/signup">
          계정 만들기
        </Link>
        <h3 className={h3}>이미 트위터에 가입하셨나요?</h3>
        <Link className={login} href="/login">
          로그인
        </Link>
      </div>
    </>
  );
};

export default Main;
