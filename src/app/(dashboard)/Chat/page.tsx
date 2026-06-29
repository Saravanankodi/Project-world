import {inter, geist} from "@/lib/fonts"
import Button from "@/components/Button/Button"
const ChatPage = () => {
    return (
        <div>
        <div>
            <h1 className={` ${geist.className} text-xl md:text-2xl xl:text-3xl  font-semibold text-[#161D16]`}>
                Messages
            </h1>

            <p className={` ${inter.className} mt-3 text-sm md:text-base text-[#3D4A3D]`}>
                Connect with project creators and buyers.
            </p>

        </div>
            <div className="flex flex-col items-center justify-center">
             <img src="/Empty/Chat.png" alt="chat" />
             <div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className={` ${geist.className} text-xl md:text-2xl xl:text-3xl  font-semibold text-[#161D16]`}>
                            No conversations yet
                        </h1>

                        <p className={` ${inter.className} mt-3 px-3 text-center max-w-lg text-sm md:text-base text-[#3D4A3D]`}>
                            You can chat with project creators after purchasing a
                            project or connect with buyers about your projects.
                        </p>

                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="mt-5 md:mt-8 flex gap-4">
                            <Button
                                className={`rounded-xl bg-[#22C55E] py-3 md:px-6 md:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-3  font-bold text-xs md:text-base lg:text-sm xl:text-base text-white ${geist.className}`}
                            >
                                Explore Projects
                            </Button>

                            <Button
                                className={`rounded-xl border-2 border-[#161D16] bg-white py-3 md:px-6 md:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-3 font-bold  text-xs md:text-base lg:text-sm xl:text-base  text-[#161D16] ${geist.className}`}
                            >
                                My Projects
                            </Button>
                        </div>
                    </div>
             </div>
        </div>
        </div>
    )
}

export default ChatPage