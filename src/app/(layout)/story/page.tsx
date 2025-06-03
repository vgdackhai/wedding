import Image from "next/image";
import { StoryItem } from "./StoryItem";

interface StoryLineItem {
  date: string;
  image: string;
  description: string;
}

export default function Story() {
  const storyLine: Array<StoryLineItem> = [
    {
      date: "May 2022",
      image: "/story/ft5_2022.jpeg",
      description:
        "Tháng 5 năm ấy, em chính thức nhận công việc trợ lý, hỗ trợ cho một team dự án tiềm năng của công ty. Ngập tràn khí thế và nhiệt huyết, em đã tự nhủ sẽ trở thành “mama tổng quản” của dự án này. Còn anh – một đồng nghiệp hiền lành, tốt bụng với tất cả mọi người – đã để lại trong em ấn tượng rất đẹp. Chúng ta không nói chuyện nhiều, nhưng vẫn âm thầm có những ấn tượng tốt về nhau từ những điều nhỏ nhặt nhất.",
    },
    {
      date: "May 2023",
      image: "/story/t5_2023.jpg",
      description:
        "Mình có chuyến du lịch đầu tiên cùng G10. Em khi ấy một mình đứng ra tổ chức cả chuyến đi, loay hoay trong bao việc tưởng chừng quá sức. Trên chuyến bay đến Huế, vì nhường chỗ cho mọi người, em và anh tình cờ ngồi cạnh nhau. Những cuộc trò chuyện ngắn đã mở ra sự thấu hiểu, anh lặng lẽ hỗ trợ em suốt chuyến đi, an ủi, động viên khi em gặp sự cố. Em từng nghĩ, đó chỉ là sự quan tâm của một đồng nghiệp tốt bụng.",
    },
    {
      date: "June 2023",
      image: "/story/t6_2023.jpg",
      description:
        "Vài sự kiện nhỏ đã đưa hai đứa đến gần nhau hơn. Mình bắt đầu trò chuyện nhiều hơn, tâm sự nhiều hơn, có thể nói cùng nhau cả đêm không chán. Có lẽ, đó chính là lúc tình cảm được nhen nhóm, âm thầm mà mãnh liệt.",
    },
    {
      date: "July 7 2023",
      image: "/story/f7_7_2023.png",
      description:
        'Anh đưa em đi dạo khắp nơi, kể em nghe đủ chuyện trên đời. Rồi trước cửa nhà, anh nhẹ nhàng ôm em và bày tỏ tình cảm. Em lúc ấy đã thích anh rất nhiều, nhưng vẫn cố "làm giá", bắt anh chờ đến ngày hôm sau mới gật đầu. Hai đứa bước vào mối quan hệ mới với những trái tim từng nhiều vết xước. Mình chưa chắc điều gì ở tương lai, chỉ biết rằng: đối phương là người đáng để trân trọng và yêu thương.',
    },
    {
      date: "September 2023",
      image: "/story/t9_2023.jpg",
      description:
        "Lần đầu tiên em và anh về ra mắt gia đình. Cả hai hồi hộp, lo lắng không biết có làm tốt hay không. Nhưng điều kỳ diệu là, bố mẹ hai bên đều đón nhận chúng mình bằng sự dịu dàng, gần gũi và yêu thương. Cũng trong tháng đó, mình có chuyến đi chơi đầu tiên cùng bạn bè sau khi chính thức yêu nhau. Chuyến đi Sài Gòn – Phan Thiết như một bước ngoặt, giúp cả hai thêm thấu hiểu và chắc chắn hơn về mối quan hệ.",
    },
    {
      date: "November 2023",
      image: "/story/ft11_2023.jpg",
      description:
        "Anh từng nói, anh mong có một chuyến đi xa, nơi chỉ có hai đứa mình. Và Phú Quốc – nơi nên thơ, lặng lẽ – đã trở thành nơi chúng mình trao nhau lời hẹn thề, rằng sẽ cùng nhau đi suốt cuộc đời.",
    },
    {
      date: "April 2024",
      image: "/story/t4_2024.jpeg",
      description:
        "Cô gái thích bay nhảy như em lại một lần nữa rủ được anh đi Đà Lạt – thành phố em yêu vì không khí dịu êm và đẹp như giấc mơ cổ tích. Chuyến đi này là lần đầu tiên mình cùng nhau thực hiện lời hứa: ghi lại những bức ảnh kỷ niệm ở nơi từng đi qua, để một ngày nào đó, ảnh cưới sẽ là những mảnh ghép thật sống động và ý nghĩa về hành trình yêu của chúng mình.",
    },
    {
      date: "July 2024",
      image: "/story/ft7_2024.png",
      description:
        "Anh dành tặng em chuyến đi Sapa nhân dịp sinh nhật. Thời điểm ấy là lúc em gặp nhiều khó khăn nhất, đứng trước những thay đổi lớn về công việc và định hướng tương lai. Anh vẫn luôn bên em – lắng nghe, thấu hiểu, tiếp thêm sức mạnh. Một chàng trai dịu dàng, kiên nhẫn nắm tay em qua mọi thử thách.",
    },
    {
      date: "February 2025",
      image: "/story/ft2_2025.jpg",
      description:
        "Chúng mình cùng về thưa chuyện với bố mẹ hai bên, xin phép được tiến tới hôn nhân. Mọi người đều đã xem nhau như người thân từ rất lâu, nên khi hai đứa thông báo, ai cũng vui vẻ đồng thuận. Từ đó, cả hai gia đình cùng bắt tay vào chuẩn bị cho ngày trọng đại của chúng mình – từng hạng mục đều chất chứa yêu thương và kỳ vọng.",
    },
    {
      date: "Now and Forever",
      image: "/story/now.jpg",
      description: `Chúng con xin chân thành cảm ơn bố mẹ hai bên – những người đã luôn ủng hộ, yêu thương và dõi theo chúng con trong suốt hành trình này. Xin tri ân những người bạn, đồng nghiệp thân yêu – những người đã luôn "đẩy thuyền", ủng hộ và giúp hai đứa can đảm bước lên một con thuyền thật sự, cùng nhau hướng về tương lai.
Tiệc cưới sắp tới chính là dịp để hai đứa gửi lời cảm ơn sâu sắc đến tất cả những người thân yêu đã góp mặt trong hành trình tuyệt vời này. Hy vọng sẽ nhận được những lời chúc phúc chân thành và sự hiện diện đông đủ của mọi người.
`,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"/loveline-vector.png"}
        width={60}
        height={40}
        alt="love-line"
      />
      <div className="flex min-h-fit">
        <div className="hidden sm:block">
          {storyLine.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <StoryItem key={`item-${item.date}`} {...item} arrow="right" />
              );
            }

            return null;
          })}
        </div>

        <div className="w-0.5 h-auto bg-[#f0394d] flex-grow"></div>

        <div className="hidden sm:block mt-20">
          {storyLine.map((item, index) => {
            if (index % 2 === 1) {
              return (
                <StoryItem key={`item-${item.date}`} {...item} arrow="left" />
              );
            }

            return null;
          })}
        </div>

        <div className="block sm:hidden">
          {storyLine.map((item) => {
            return (
              <StoryItem key={`item-${item.date}`} {...item} arrow="left" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
