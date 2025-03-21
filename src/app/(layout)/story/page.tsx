import Image from "next/image";
import { StoryItem } from "./StoryItem";

interface StoryLineItem {
  title: string;
  date: string;
  image: string;
  description: string;
}

export default function Story() {
  const storyLine: Array<StoryLineItem> = [
    {
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2015",
      image: "/home.jpg",
      description:
        "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
    },
    {
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2016",
      image: "/home.jpg",
      description:
        "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
    },
    {
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2017",
      image: "/home.jpg",
      description:
        "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
    },
    {
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2018",
      image: "/home.jpg",
      description:
        "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
    },
    {
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2019",
      image: "/home.jpg",
      description:
        "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
    },
    {
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2020",
      image: "/home.jpg",
      description:
        "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
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
