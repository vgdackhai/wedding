import { HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  date: string;
  image: string;
  description: string;
  arrow?: "left" | "right";
}

export const StoryItem = ({
  date,
  description,
  image,
  arrow = "left",
}: Props) => {
  return (
    <div
      className={`max-w-96 p-8 bg-white text-black space-y-4 m-8 h-fit relative ${
        arrow === "left" ? "animate-fade-left" : "animate-fade-right"
      }`}
    >
      <div className="py-2 px-4 bg-[#07abae] w-fit rounded-sm text-white">
        {date}
      </div>

      <img
        alt=""
        src={image}
        className="object-cover w-80 aspect-square object-center"
      />

      <div>{description}</div>

      {arrow === "right" ? <RightArrow /> : <LeftArrow />}
    </div>
  );
};

const RightArrow = () => {
  return (
    <div className="absolute top-0 right-0 flex gap-[5px] translate-x-full items-center justify-center">
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "12px solid white",
          borderTop: "12px solid transparent",
          borderBottom: "12px solid transparent",
        }}
      ></div>
      <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
        <HeartIcon fill="#f0394d" color="#f0394d" className="w-4" />
      </div>
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div className="absolute top-0 left-0 flex gap-[5px] -translate-x-full items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
        <HeartIcon fill="#f0394d" color="#f0394d" className="w-4" />
      </div>
      <div
        className="w-0 h-0"
        style={{
          borderRight: "12px solid white",
          borderTop: "12px solid transparent",
          borderBottom: "12px solid transparent",
        }}
      ></div>
    </div>
  );
};
