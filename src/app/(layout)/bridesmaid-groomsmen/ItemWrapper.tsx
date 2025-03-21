import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Item } from "./Item";

export const ItemWrapper = () => {
  return (
    <div className="p-4 relative bg-white min-w-72">
      <div
        className="absolute text-nowrap top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-1 px-2"
        style={{
          background: "red",
        }}
      >
        Phù Dâu
      </div>
      <div className="flex gap-4 mt-8">
        <div className="w-6 h-auto flex items-center justify-center">
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </div>
        <div className="overflow-hidden relative">
          <Item
            image="/home.jpg"
            name="Lý Mạc Sầu"
            description="Là cô gái gái Huế thân thiện, hay cười, dễ giao tiếp nhưng thích yên
            tĩnh một mình. Thường hướng về những thói quen, sở thích mang tính
            truyền thống."
          />
        </div>

        <div className="w-6 h-auto flex items-center justify-center">
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
};
