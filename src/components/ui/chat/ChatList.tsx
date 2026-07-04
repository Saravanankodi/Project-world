"use client";

import Link from "next/link";
import ChatCard from "@/components/Cards/ChatCard";
import { chatData } from "@/data/chatData";
const ChatList = () => {
    const chatList = Object.entries(chatData.chats).map(([userId, chat]) => ({
        userId,
        lastMessage: chat.lastMessage,
        updatedAt: chat.updatedAt,
    }));
  return (
    <>
    {chatList.map(chat => (
        <Link
            key={chat.userId}
            href={`/Chat/${chat.userId}`}
        >
            <ChatCard
                name={chat.userId}
                message={chat.lastMessage}
                time={chat.updatedAt}
            />
        </Link>
    ))}   
    </>
  )
}

export default ChatList