import { Clock } from "@/components/Clock";
import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const greateVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  style: ["normal"],
  subsets: ["vietnamese"],
});

export default function Home() {
  return (
    <div className="text-white h-full max-w-5xl mx-auto">
      <div className="absolute inset-0 w-full h-full z-[-1] overflow-hidden">
        <div className="relative w-full h-full animate-right-in">
          <Image src="/cover/home.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div
          className={`${greateVibes.variable} text-4xl sm:text-[96px] relative leading-[1.1] inline-flex justify-center items-center font-great-vibes`}
        >
          <span className="text-nowrap px-4">Minh Đức</span>
          <span>
            <HeartIcon
              className="size-8 sm:size-16 text-[#f0394d]"
              fill="#f0394d"
            />
          </span>
          <span className="text-nowrap px-4">Bích Phương</span>
        </div>
        <div className="text-lg sm:text-2xl tracking-[0.2em] uppercase my-4">
          We’re getting married
        </div>
        <Clock />
        <a
          href="/confirm"
          className="mt-12 rounded-md bg-transparent px-4 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-300 inline-flex justify-center items-center"
        >
          <PaperAirplaneIcon
            aria-hidden="true"
            className="-ml-0.5 size-5 mr-1 -rotate-45"
          />
          <span>Xác nhận tham dự</span>
        </a>
      </div>
    </div>
  );
}
