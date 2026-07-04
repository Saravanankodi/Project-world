"use client";

import { useState } from "react";
import {
  Paperclip,
  Smile,
  SendHorizontal,
} from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className=" h-fit flex items-center gap-3 rounded-2xl border border-[#BCCBB9] bg-white px-3 py-2 shadow-sm">
      {/* Attachment */}
      <button className="text-gray-500 hover:text-black">
        <Paperclip size={20} />
      </button>

      {/* Input */}
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        className="flex-1 bg-transparent outline-none text-base"
      />

      {/* Emoji */}
      <button className="text-gray-500 hover:text-black">
        <Smile size={20} />
      </button>

      {/* Send */}
      <button
        onClick={handleSend}
        className="rounded-xl bg-[#0F172A] p-3 text-white hover:bg-slate-800"
      >
        <SendHorizontal size={20} />
      </button>
    </div>
  );
}