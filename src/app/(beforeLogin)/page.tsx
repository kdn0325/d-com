import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>로고</div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup">계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
}
