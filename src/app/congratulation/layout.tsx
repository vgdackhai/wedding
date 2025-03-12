import { PageWrapper } from "@/components/PageWrapper";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <PageWrapper title="Mừng cưới">{children}</PageWrapper>;
}
