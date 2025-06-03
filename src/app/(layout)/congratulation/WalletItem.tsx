import Image from "next/image";

interface Props {
  title: string;
  qr: string;
  bank: string;
  name: string;
  bankNumber: string;
  className?: string;
  titleClassName?: string;
}

export const WalletItem = ({
  bank,
  bankNumber,
  name,
  qr,
  title,
  className,
  titleClassName,
}: Props) => {
  return (
    <div
      className={`relative p-8 bg-white shadow-sm hover:shadow-md ${className}`}
    >
      <div
        className={`absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-2 px-4 rounded-md uppercase text-lg text-white ${titleClassName}`}
      >
        {title}
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative w-40 aspect-square my-4 border">
          <Image src={qr} fill alt="" className="object-cover" />
        </div>
        <div>
          <span>Ngân hàng:</span>
          <span className="font-semibold"> {bank}</span>
        </div>
        <div>
          <span>Tên tài khoản:</span>
          <span className="font-semibold"> {name}</span>
        </div>
        <div>
          <span>Số tài khoản:</span>
          <span className="font-semibold"> {bankNumber}</span>
        </div>
      </div>
    </div>
  );
};
