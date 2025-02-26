import { PersonItem } from "./PersonItem";

export default function Couple() {
  return (
    <div className="flex flex-col sm:flex-row gap-12">
      <PersonItem
        className="sm:animate-fade-right"
        bgColor="#f0394d"
        title="Cô Dâu"
        name="ABC"
        childOf={{ father: "", mother: "" }}
        image="/home.jpg"
        description="Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc."
      />
      <PersonItem
        className="sm:animate-fade-left"
        bgColor="#03c0cc"
        title="Chú Rể"
        name="ABC"
        childOf={{ father: "", mother: "" }}
        image="/home.jpg"
        description="Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc."
      />
    </div>
  );
}
