import { container } from "./main.css";
import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={container}>
      {children}
      {modal}
    </div>
  );
}
