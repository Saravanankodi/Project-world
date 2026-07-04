import ChatWindow from "@/components/ui/chat/ChatWindow";


export default async function Page({
    params,
}: {
    params: Promise<{ userId: string }>;
}) {
    const { userId } = await params;

    return (
        <ChatWindow userId={userId} />
    );
}