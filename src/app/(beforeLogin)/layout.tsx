import { ReactNode } from "react";
import { container } from "../global.css";

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={container}>
      {children}
      {modal}
    </div>
  );
}
