import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const SendMessageForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white w-full p-8 py-16">
      <div className="text-center py-8">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám
        cưới của chúng tôi!
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <Input
          id="name"
          name="name"
          aria-label="Name"
          label="Nhập họ tên *"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          name="email"
          aria-label="email"
          label="Nhập email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          label="Nhập lời chúc của bạn *"
          required
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#f0394d] text-white py-2 min-w-40 rounded-md hover:bg-opacity-80"
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
};
