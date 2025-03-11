import { HeartIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const PageWrapper = ({ title, children }: Props) => {
  return (
    <div className="max-w-7xl min-h-full mx-auto flex flex-col items-center justify-center p-10">
      <div className="flex flex-col justify-center items-center animate-fade-up font-great-vibes">
        <div className="mb-2 text-5xl border-b-2 border-[#f0394d] leading-normal">
          {title}
        </div>
        <div className="text-[#f0394d] flex items-center gap-4 -mt-5 mb-4 bg-[#faf0e6] px-2">
          <HeartIcon className="w-5 h-5" color="#f0394d" fill="#f0394d" />
        </div>
      </div>
      {children}
    </div>
  );
};
