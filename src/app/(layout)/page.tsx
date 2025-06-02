import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Great_Vibes } from "next/font/google";

const greateVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  style: ["normal"],
  subsets: ["vietnamese"],
});

export default function Home() {
  return (
    <div className="text-white h-full max-w-5xl mx-auto">
      <div
        className="absolute inset-0 w-full h-full z-[-1] overflow-hidden"
        style={{
          backgroundImage: `url("/cover/home.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col justify-start pt-10 md:pt-20 items-center h-full">
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
        <div className="text-lg sm:text-2xl tracking-[0.2em] uppercase mb-2">
          We’re getting married
        </div>
        <div className="text-lg sm:text-2xl tracking-[0.2em] uppercase mb-4">
          22.06.2025
        </div>
        {/* <Clock /> */}
        <a
          href="/confirm"
          className="mt-8 rounded-md bg-transparent px-4 py-3 text-base shadow-sm ring-2 ring-inset text-gray-300 ring-gray-300 inline-flex justify-center items-center hover:ring-white hover:text-white"
        >
          <PaperAirplaneIcon
            aria-hidden="true"
            className="size-5 -rotate-45 -mt-1"
          />
          <span className="ml-1 leading-none">Xác nhận tham dự</span>
        </a>
      </div>
    </div>
  );
}
