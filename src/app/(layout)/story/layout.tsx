import { PageWrapper } from "@/components/PageWrapper";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <PageWrapper
      title="Chuyện Tình Yêu"
      bgImg="/cover/love_story.jpg"
      bgPosition="top"
    >
      {children}
    </PageWrapper>
  );
}
