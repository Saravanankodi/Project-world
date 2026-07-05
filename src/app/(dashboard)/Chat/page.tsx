import ChatList from "@/components/ui/chat/ChatList";
import { MessageSquare, MessageSquareReply } from "lucide-react";

export default function ChatPage() {
    return (
        <section className="w-full h-full px-4 py-5 ">
            <aside className="w-auto md:hidden">
                <ChatList />
            </aside>
            <main className="w-full h-full flex flex-col gap-3 items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#E2EBDE] ">
                    <MessageSquare size={42}/>
                </div>
                <aside className="w-fit space-y-2 max-w-sm">
                    <h2 className="text-2xl text-center text-[#161D16] font-semibold">
                        Your Workspace Chat
                    </h2>
                    <p className="text-base text-center text-[#3D4A3D] ">
                        Select a conversation to start chatting.
                    </p>
                    <p className="text-base text-[#6D7B6C] text-center">
                        Connect with creators, discuss project details, and
                        collaborate in real-time within the ProjectVerse
                        ecosystem.
                    </p>
                </aside>
            </main>
        </section>
    );
}