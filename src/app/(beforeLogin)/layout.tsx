import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div>
      Before login layout
      {children}
      {modal}
    </div>
  );
}
