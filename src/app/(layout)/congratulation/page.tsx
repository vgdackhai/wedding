import { WalletItem } from "./WalletItem";

export default function Congratulations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-4">
      <WalletItem
        title="Mừng cưới đến cô dâu"
        bank="BIDV"
        name="DO THI BICH PHUONG"
        bankNumber="2220 8832 44"
        qr="/banks/phuong_bank.jpg"
        key={"for-brides"}
        titleClassName="bg-[#f0394d]"
        className="animate-fade-right"
      />
      <WalletItem
        title="Mừng cưới đến chú rể"
        bank="TECHCOMBANK"
        name="NGO MINH DUC"
        bankNumber="9232 2299 99"
        qr="/banks/duc_bank.jpg"
        key={"for-grooms"}
        titleClassName="bg-[#07aeab]"
        className="animate-fade-left"
      />
    </div>
  );
}
