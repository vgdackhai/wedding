import Image from "next/image";

interface Props {
  imageUrls: string[];
  selectedImageUrls?: string;
  setSelectedImageUrls: React.Dispatch<React.SetStateAction<string>>;
}

export const ImageViewer = ({
  imageUrls,
  selectedImageUrls,
  setSelectedImageUrls,
}: Props) => {
  return selectedImageUrls ? (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-[9999]"
      onClick={() => setSelectedImageUrls("")}
    >
      <div className="relative h-4/5">
        <Image
          src={selectedImageUrls}
          alt=""
          layout="fill"
          className="object-contain select-none"
        />
      </div>
      <div className="p-4">
        <div className="relative h-40 w-auto">
          <Image
            src={selectedImageUrls}
            alt=""
            layout="fill"
            className="object-contain !w-fit"
          />
        </div>
      </div>
    </div>
  ) : null;
};
