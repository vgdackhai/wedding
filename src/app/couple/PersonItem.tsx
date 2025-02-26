import Image from "next/image";

interface Props {
  bgColor: string;
  title: string;
  image: string;
  name: string;
  childOf: {
    father: string;
    mother: string;
  };

  description: string;
  className?: string;
}

export const PersonItem = ({
  bgColor,
  childOf,
  description,
  image,
  name,
  title,
  className,
}: Props) => {
  return (
    <div
      className={`border max-w-md flex flex-col gap-4 items-center text-white p-8 bg-red-500 ${className}`}
      style={{ background: bgColor }}
    >
      <p>{title}</p>
      <div className="w-72 h-72 aspect-square overflow-hidden relative rounded-full">
        <Image src={image} className="object-cover" fill={true} alt="avatar" />
      </div>
      <div>{name}</div>
      <div>
        <div>
          Con ông: <span>{childOf.father}</span>
        </div>
        <div>
          Con bà: <span>{childOf.mother}</span>
        </div>
      </div>
      <div className="text-center">{description}</div>
    </div>
  );
};
