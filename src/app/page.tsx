import { Clock } from "@/components/Clock";
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
      <div className="flex flex-col justify-center items-center h-full">
        <div
          className={`${greateVibes.variable} text-[96px] relative leading-[1.1]`}
        >
          <span className="absolute -translate-x-full text-nowrap px-4">
            {/* Minh Đức */}
          </span>
          <span>
            <HeartIcon className="w-16 h-16 text-[#f0394d]" fill="#f0394d" />
          </span>
          <span className="absolute text-nowrap px-4">{/* Bích Phương */}</span>
        </div>
        <div className="text-2xl tracking-[0.2em] uppercase my-10">
          We’re getting married
        </div>
        <Clock />
        <button
          type="button"
          className="mt-10 rounded-md bg-transparent px-3.5 py-2.5 text-sm shadow-sm ring-1 ring-inset ring-gray-300 inline-flex"
        >
          <PaperAirplaneIcon
            aria-hidden="true"
            className="-ml-0.5 size-5 mr-1 -rotate-45"
          />
          <span>Xác nhận tham dự</span>
        </button>
      </div>
    </div>
  );
}
