import { PersonItem } from "./PersonItem";

export default function Couple() {
  return (
    <div className="flex flex-col sm:flex-row gap-12">
      <PersonItem
        className="animate-fade-up sm:animate-fade-right"
        bgColor="#f0394d"
        title="Cô Dâu"
        name="Đỗ Thị Bích Phương"
        image="/co_dau.jpeg"
        description="Mình là Đỗ Thị Bích Phương, sinh ngày 09/07/1997 – một cô nàng Cự Giải chính hiệu. Tuy hiện đang làm việc trong lĩnh vực IT, nhưng mình luôn cảm thấy bản thân sinh ra để làm công việc Hành chính – nơi mình có thể tỉ mẩn lựa chọn từng hạng mục từ nhỏ nhất và chăm sóc tất cả mọi người. Mình là người dễ hòa đồng, vui vẻ và khá nhạy cảm. Mình thích du lịch, chụp ảnh và từng có một ước mơ sẽ mua một chiếc máy ảnh thật xịn, rong ruổi khắp thế gian, ghi lại từng khoảnh khắc mình trải nghiệm, lưu dấu những nơi đi qua. Đối với mình, cuộc sống lý tưởng là được trải nghiệm, khám phá thế giới và lưu giữ những kỷ niệm thật đẹp qua từng bức ảnh."
      />
      <PersonItem
        className="animate-fade-up sm:animate-fade-left"
        bgColor="#03c0cc"
        title="Chú Rể"
        name="Ngô Minh Đức"
        image="/chu_re.jpeg"
        description="Mình là Ngô Minh Đức, sinh ngày 22/03/1996, hiện đang sinh sống và làm việc tại Hà Nội với công việc liên quan đến lĩnh vực IT. Mình là người trầm tính, hiền lành và luôn trân trọng sự bình yên. Với mình, hạnh phúc không phải là những điều to tát hay xa vời, mà là những khoảnh khắc giản đơn, chân thành bên cạnh những người thân yêu – một bữa cơm ấm cúng, một ánh mắt thấu hiểu, hay một cái nắm tay giữa dòng đời vội vã. Mỗi ngày trôi qua, mình càng tin rằng, chính những điều nhỏ bé ấy mới là nền tảng bền vững nuôi dưỡng tâm hồn và giữ cho trái tim luôn ấm áp."
      />
    </div>
  );
}
