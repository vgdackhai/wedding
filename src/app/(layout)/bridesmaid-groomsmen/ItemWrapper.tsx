"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Item } from "./Item";
import Slider, { Settings } from "react-slick";
import { useRef } from "react";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // We'll use custom arrows
  autoplay: true,
  autoplaySpeed: 3000,
};

interface Props {
  items: Array<{
    image: string;
    name: string;
    description: string;
  }>;
  title: string;
  titleColor?: string;
  className?: string;
}

export const ItemWrapper = ({
  items,
  title,
  titleColor = "red",
  className = "",
}: Props) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className={`p-4 relative bg-white min-w-72 ${className}`}>
      <div
        className="absolute text-nowrap top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-1 px-2"
        style={{
          background: titleColor,
        }}
      >
        {title}
      </div>
      <div className="flex gap-4 mt-8">
        <div
          className="w-6 h-auto flex items-center justify-center cursor-pointer"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </div>
        <div className="overflow-hidden relative w-72">
          <Slider {...settings} ref={sliderRef}>
            {items.map((item, idx) => (
              <Item
                key={idx}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
        <div
          className="w-6 h-auto flex items-center justify-center cursor-pointer"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
};
