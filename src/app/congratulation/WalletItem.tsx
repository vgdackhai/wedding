import Image from "next/image";

interface Props {
  title: string;
  qr: string;
  bank: string;
  name: string;
  bankNumber: string;
  bankBranch: string;
  titleBgColor: string;
  className?: string;
}

export const WalletItem = ({
  bank,
  bankBranch,
  bankNumber,
  name,
  qr,
  title,
  titleBgColor,
  className,
}: Props) => {
  return (
    <div
      className={`relative p-8 bg-white shadow-sm hover:shadow-md ${className}`}
    >
      <div
        className={`absolute top-0 left-1/2 bg-[${titleBgColor}] -translate-y-1/2 -translate-x-1/2 p-2 px-4 rounded-md uppercase text-lg text-white`}
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
          <span>Số tài khảo:</span>
          <span className="font-semibold"> {bankNumber}</span>
        </div>
        <div>
          <span>Chi nhánh:</span>
          <span className="font-semibold"> {bankBranch}</span>
        </div>
      </div>
    </div>
  );
};
