import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import axios from "axios";
import { FormEvent, useState } from "react";
import { GuestMessage } from "./types";
import { HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  fetchData: () => Promise<void>;
}

export const SendMessageForm = ({ fetchData }: Props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<GuestMessage>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    try {
      setLoading(true);
      event.preventDefault();
      await axios.post("/api/guest-books", formData);
      await fetchData();
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
            className="bg-[#f0394d] text-white py-2 min-w-40 rounded-md hover:bg-opacity-80 text-center inline-flex justify-center items-center h-10"
            disabled={loading}
          >
            {loading ? (
              <div className="block">
                <HeartIcon
                  fill="white"
                  className="text-[#f0394d] animate-ping w-6 h-6"
                />
              </div>
            ) : (
              "Gửi"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
