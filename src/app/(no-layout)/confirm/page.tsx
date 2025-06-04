"use client";

import Checkbox from "@/components/Checkbox";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AcceptJoin() {
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    will_join: true, // Default to true
    guest_of: [] as string[], // Array to hold guest of names
    number_of_guests: 1,
  });

  const handleChange = (
    key: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting form data:", formData);
      setLoading(true);
      await axios.post("/api/confirm", formData);
      setConfirmed(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full mx-auto divide-y">
      <div className="bg-gray-200 p-10 border-b border-gray-400">
        <div className="mx-auto block relative size-40 rounded-full overflow-hidden outline-1 outline-[#f0394d]">
          <Image
            src={"/story/now.jpg"}
            layout="fill"
            alt={""}
            className="object-cover object-top"
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
      <form className="max-w-2xl mx-auto flex flex-col items-center justify-center p-10 gap-4">
        {isConfirmed ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Cảm ơn bạn đã xác nhận!</h2>
            {formData.will_join ? (
              <p className="text-lg">
                Chúng tôi rất vui khi bạn sẽ tham dự đám cưới của chúng tôi.
              </p>
            ) : (
              <p className="text-lg">
                Rất tiếc khi bạn không thể tham dự, cảm ơn bạn đã thông báo.
              </p>
            )}
          </div>
        ) : (
          <>
            <div className="flex flex-col items-start w-full">
              <div className="pb-1 font-jura">
                <div className="text-lg text-left">Họ Tên của bạn</div>
              </div>
              <input
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                className="py-2 px-3 text-center border border-transparent focus:border-indigo-400 focus:outline-none w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="pb-1 font-jura">
                <div className="text-lg text-left">Số điện thoại</div>
              </div>
              <input
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                type="number"
                className="py-2 px-3 text-center border border-transparent focus:border-indigo-400 focus:outline-none w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="pb-1 font-jura">
                <div className="text-lg text-left">Bạn sẽ tham gia chứ?</div>
              </div>
              <div className="space-y-2 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div className="flex items-center">
                  <input
                    id={"confirm_yes"}
                    name="notification-method"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    checked={formData.will_join}
                    onChange={(e) =>
                      handleChange("will_join", e.target.checked)
                    }
                  />
                  <label
                    htmlFor={"confirm_yes"}
                    className="ml-3 block text-sm/6 text-gray-900"
                  >
                    Có, tôi sẽ tham gia
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id={"confirm_no"}
                    name="notification-method"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    checked={!formData.will_join}
                    onChange={(e) =>
                      handleChange("will_join", !e.target.checked)
                    }
                  />
                  <label
                    htmlFor={"confirm_no"}
                    className="ml-3 block text-sm/6 text-gray-900"
                  >
                    Xin lỗi, tôi bận mất rồi
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="pb-1 font-jura">
                <div className="text-lg text-left">
                  Bạn là khách mời của ai?
                </div>
              </div>
              <div className="space-y-2 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div className="flex items-center">
                  <Checkbox
                    id="guest_of_bride"
                    name="guest_of_bride"
                    label="Cô Dâu"
                    checked={formData.guest_of.includes("Cô Dâu")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          guest_of: [...formData.guest_of, "Cô Dâu"],
                        });
                      } else {
                        setFormData({
                          ...formData,
                          guest_of: formData.guest_of.filter(
                            (guest) => guest !== "Cô Dâu"
                          ),
                        });
                      }
                    }}
                  />
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="guest_of_grooms"
                    name="guest_of_grooms"
                    label="Chú Rể"
                    checked={formData.guest_of.includes("Chú Rể")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          guest_of: [...formData.guest_of, "Chú Rể"],
                        });
                      } else {
                        setFormData({
                          ...formData,
                          guest_of: formData.guest_of.filter(
                            (guest) => guest !== "Chú Rể"
                          ),
                        });
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {formData.will_join ? (
              <div className="flex flex-col items-start w-full">
                <div className="pb-1 font-jura">
                  <div className="text-lg text-left">
                    Bạn đi bao nhiêu người?
                  </div>
                </div>
                <input
                  value={formData.number_of_guests}
                  onChange={(e) =>
                    handleChange("number_of_guests", e.target.value)
                  }
                  type="number"
                  min={1}
                  className="py-2 px-3 text-center border border-transparent focus:border-indigo-400 focus:outline-none w-full"
                />
              </div>
            ) : null}

            <button
              type="submit"
              className="cursor-pointer w-full rounded-md bg-[#f0394d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f0394d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0394d]"
              onClick={handleSubmit}
              disabled={loading || isConfirmed}
            >
              <div className="space-y-1 font-jura">
                {isConfirmed ? (
                  <>
                    <div className="text-xl">Cảm ơn bạn đã nhận lời mời</div>
                    <div>Find your invitation</div>
                  </>
                ) : (
                  <div className="text-xl">Xác nhận tham gia</div>
                )}
              </div>
            </button>
          </>
        )}
        <Link
          href="/"
          className="mt-1 hover:text-indigo-500 cursor-pointer hover:underline"
        >
          Back
        </Link>
      </form>
    </div>
  );
}
