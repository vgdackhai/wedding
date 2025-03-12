import { WalletItem } from "./WalletItem";

export default function Congratulations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-4">
      <WalletItem
        title="Mừng cưới đến cô dâu"
        bank="VPBank"
        name="Tên nè"
        bankNumber="Số nè"
        bankBranch="Chi nhánh nè"
        qr="/home.jpg"
        key={"for-brides"}
        titleBgColor="#f0394d"
        className="animate-fade-right"
      />
      <WalletItem
        title="Mừng cưới đến chú rể"
        bank="VPBank"
        name="Tên nè"
        bankNumber="Số nè"
        bankBranch="Chi nhánh nè"
        qr="/home.jpg"
        key={"for-grooms"}
        titleBgColor="#07aeab"
        className="animate-fade-left"
      />
    </div>
  );
}
