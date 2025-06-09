import {
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Event() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="min-w-96 w-0 p-8 bg-white text-black space-y-2 animate-fade-up">
        <div className="relative w-full aspect-square">
          <img
            alt="Event Thumbnail"
            src="/events/thanh_hon.jpg"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="text-center text-2xl text-[#f0394d] font-normal uppercase py-4">
          Lễ Thành Hôn
        </div>
        <div className="flex items-center justify-center gap-1 font-semibold">
          <div>
            <ClockIcon className="w-5 h-5" />
          </div>
          11:00 22/06/2025
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="py-1 text-[#f0394d]">
            <MapPinIcon className="w-6 h-6" />
          </div>
          <div className="text-center text-xs uppercase">
            Tại Sảnh 3 + 4 - Tầng 03 - Tòa nhà THE ZEI Mỹ Đình
          </div>
          <div className="text-center text-2xl py-1">Forevermark Lê Đức Thọ</div>
          <div className="text-center text-xs uppercase">
            Số 8 Lê Đức Thọ, Nam Từ Liêm, Hà Nội
          </div>
        </div>
        <a
          target="_blank"
          href="https://maps.app.goo.gl/jMfQZfPuUkpDwiHYA?g_st=com.google.maps.preview.copy"
          className="flex items-center justify-center text-indigo-500 hover:text-indigo-700 hover:underline"
        >
          Xem bản đồ
          <ChevronRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
