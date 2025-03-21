import {
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export const EventItem = () => {
  return (
    <div className="min-w-96 w-0 p-8 bg-white text-black space-y-2 animate-fade-up">
      <div className="relative w-full aspect-square">
        <img src="/home.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="text-center text-2xl text-[#f0394d] font-normal uppercase py-4">
        Lễ cưới nhà nữ
      </div>
      <div className="flex items-center justify-center gap-1 font-semibold">
        <div>
          <ClockIcon className="w-5 h-5" />
        </div>
        07:30 10/02/2023
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="py-1 text-[#f0394d]">
          <MapPinIcon className="w-6 h-6" />
        </div>
        <div className="text-center">
          TƯ GIA NHÀ NỮ - 123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
        </div>
      </div>
      <a href="" className="flex items-center justify-center gap-1 text-indigo-500 hover:text-indigo-700 hover:underline">
        Xem bản đồ
        <ChevronRightIcon className="w-4 h-4" />
      </a>
    </div>
  );
};
