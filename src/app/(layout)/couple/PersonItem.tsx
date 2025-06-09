import Image from "next/image";

interface Props {
  bgColor: string;
  title: string;
  image: string;
  name: string;
  description: string;
  className?: string;
  avatarClassName?: string;
}

export const PersonItem = ({
  bgColor,
  description,
  image,
  name,
  title,
  className,
  avatarClassName,
}: Props) => {
  return (
    <div
      className={`border max-w-md flex flex-col gap-4 items-center text-white p-8 bg-red-500 ${className}`}
      style={{ background: bgColor }}
    >
      <p>{title}</p>
      <div className="w-72 h-72 aspect-square overflow-hidden relative rounded-full">
        <img
          src={image}
          className={`object-cover ${avatarClassName}`}
          alt="avatar"
        />
      </div>
      <div>{name}</div>
      <div className="text-center text-sm">{description}</div>
    </div>
  );
};
