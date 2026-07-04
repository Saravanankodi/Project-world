import ChatList from "@/components/ui/chat/ChatList";

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex h-full w-full">

            {/* Sidebar */}
            <aside className="hidden md:block md:max-w-75 lg:max-w-80 xl:max-w-90 2xl:max-w-100 h-full flex-col gap-1 overflow-y-scroll bg-[#EDF6EA] ">
                <ChatList />
            </aside>

            {/* Chat */}
            <main className="w-full h-full flex-1 bg-[#F3FCEF] flex flex-col p-2">
                {children}
            </main>

        </section>
    );
}