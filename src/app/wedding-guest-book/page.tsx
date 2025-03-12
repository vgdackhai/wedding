"use client";

import { useEffect, useState } from "react";
import { MessageList } from "./MessageList";
import { SendMessageForm } from "./SendMessageForm";
import { GuestMessage } from "./types";
import axios from "axios";

export default function WeddingGuestBook() {
  const [guestMessages, setGuestMessages] = useState<GuestMessage[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get<{ data: [string, string, string][] }>(
        "/api/guest-books"
      );

      setGuestMessages(
        data.data.map((item) => ({
          name: item[0],
          email: item[1],
          message: item[2],
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full animate-fade-up">
      <SendMessageForm fetchData={fetchData} />
      <MessageList guestMessages={guestMessages} />
    </div>
  );
}
