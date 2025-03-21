"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AcceptJoin() {
  const [searchKey, setSearchKey] = useState("");
  //   const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {};

  return (
    <div className="min-h-full mx-auto divide-y">
      <div className="bg-gray-200 p-10 border-b border-gray-400">
        <div className="mx-auto block relative size-40 rounded-full overflow-hidden outline-1 outline-[#f0394d]">
          <Image
            src={"/home.jpg"}
            layout="fill"
            alt={""}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center mt-4 gap-1">
          <div className="font-coiny text-3xl uppercase">Xác nhận tham dự</div>
          <div className="font-jura text-xl">Đám cưới của</div>
          <div className="flex items-center gap-2 text-2xl">
            <span>Minh Đức</span>
            <div className="relative size-12">
              <Image
                src={"https://preview.iwedding.info/album/heart.gif"}
                layout="fill"
                alt=""
                className="object-contain"
              />
            </div>
            <span>Bích Phương</span>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center p-10">
        <div className="pb-1 font-jura">
          <div className="text-lg text-center">
            Nhập Tên, Số Điện thoại hoặc Mã Khách Mời
          </div>
          <div className="text-center">
            Type your Name, Phone Number or Code
          </div>
        </div>
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          className="py-2 px-3 text-center border border-transparent focus:border-indigo-400 focus:outline-none w-full mb-8"
        />
        <button
          type="button"
          className="w-full rounded-md bg-[#f0394d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f0394d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0394d]"
          onClick={handleSearch}
        >
          <div className="space-y-1 font-jura">
            <div className="text-xl">Tìm kiếm thiệp mời của bạn</div>
            <div>Find your invitation</div>
          </div>
        </button>
        <Link
          href="/"
          className="mt-1 hover:text-indigo-500 cursor-pointer hover:underline"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
