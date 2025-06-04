import { PageWrapper } from "@/components/PageWrapper";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <PageWrapper
      title="Phù Dâu & Phù Rể"
      bgImg="/cover/fphu.jpg"
      bgPosition="bottom"
    >
      {children}
    </PageWrapper>
  );
}
