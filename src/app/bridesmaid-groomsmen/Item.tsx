import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
}

export const Item = ({ description, image, name }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-black w-72">
      <div className="relative w-64 h-64 aspect-square rounded-full overflow-hidden">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div>{name}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};
