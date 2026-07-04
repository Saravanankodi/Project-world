"use client";

import ChatInput from "@/components/ui/chat/ChatInput";
import { chatData } from "@/data/chatData";


interface Props {
    userId: string;
}

export default function ChatWindow({ userId }: Props) {
    const activeChat = chatData.chats[userId];

    const messages = Object.entries(activeChat.messages).map(([id, msg]) => ({
        id,
        ...msg,
    }));

    const sendMessage = (message: string) => {
        console.log(message);
    };

    return (
        <section className="w-full h-full flex-1 flex flex-col gap-2 p-2">
            <div className="flex-1 overflow-y-auto flex flex-col gap-3 p-4">
                {messages.map((msg) => {
                    const isMe = msg.senderId === chatData.currentUser;

                    return (
                        <div
                            key={msg.id}
                            className={`max-w-xs ${
                                isMe ? "self-end" : "self-start"
                            }`}
                        >
                            <p
                                className={`px-4 py-3 rounded-2xl ${
                                    isMe
                                        ? "bg-[#006E2F] text-white rounded-tr-none"
                                        : "bg-white text-black rounded-tl-none"
                                }`}
                            >
                                {msg.msg}
                            </p>

                            <p className="text-[10px] text-[#3D4A3D] mt-1 text-right">
                                {new Date(msg.createdAt).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>
                    );
                })}
            </div>

            <ChatInput onSend={sendMessage} />
        </section>
    );
}