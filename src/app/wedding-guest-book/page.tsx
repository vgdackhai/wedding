"use client";

import { MessageList } from "./MessageList";
import { SendMessageForm } from "./SendMessageForm";

export default function WeddingGuestBook() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full animate-fade-up">
      <SendMessageForm />
      <MessageList />
    </div>
  );
}
