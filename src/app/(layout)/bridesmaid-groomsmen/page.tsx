import { ItemWrapper } from "./ItemWrapper";

const items = [
  {
    image: "/bridesmaid/to_thuy_hang.jpg",
    name: "Lý Mạc Sầu",
    description:
      "Là cô gái gái Huế thân thiện, hay cười, dễ giao tiếp nhưng thích yên tĩnh một mình. Thường hướng về những thói quen, sở thích mang tính truyền thống.",
  },
  {
    image: "/bridesmaid/dao_thu_tra.jpg",
    name: "Lý Mạc Sầu",
    description:
      "Cô gái năng động, vui vẻ, luôn mang lại tiếng cười cho mọi người xung quanh.",
  },
  {
    image: "/bridesmaid/bui_ngan_ha_trang.jpg",
    name: "Lý Mạc Sầu",
    description:
      "Cô gái năng động, vui vẻ, luôn mang lại tiếng cười cho mọi người xung quanh.",
  },
  // Add more items as needed
];

export default function BridesmaidGroomsmen() {
  return (
    <div className="flex flex-col sm:flex-row gap-12">
      <ItemWrapper
        items={items}
        title="Phù Dâu"
        className="animate-fade-up sm:animate-fade-right"
      />
      <ItemWrapper
        items={items}
        title="Phù Rể"
        titleColor="#03c0cc"
        className="animate-fade-up sm:animate-fade-left"
      />
    </div>
  );
}
