import Projectcard from "@/components/Cards/Projectcard";
import { inter, geist } from "@/lib/fonts"
import Button from "@/components/Button/Button";
import Filter from "@/components/icons/main/Filter";
const Saved_ProjectsPage = () => {
    const cards = [
        {
            id: 1,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 2,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 3,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 4,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 5,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 6,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 7,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
        {
            id: 8,
            image: "/Auth/login.png",
            category: "Civil Engineering",
            title: "Eco-Smart Bridge Infrastructure",
            description:
                "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
            rating: 4.9,
            author: "Alex Rivera",
            authorAvatar: "/Topbar/ProfileImage.png",
            price: 120,
            bookmarked: true,
        },
    ];

    return (
        <div>

            <div className="mb-2">
                <div className={`${geist.className} mb-1 text-3xl lg:text-[32px] font-bold text-[#006E2F]`}>Saved Projects</div>
                <div className="md:flex items-center justify-between mb-2">
                    <div className={`${inter.className} mb-2 text-sm xl:text-base font-normal text-[#3D4A3D]`}>Your collection of projects that inspire, interest, or help your journey.</div>
                    <div><Button
                        leftIcon={<Filter />}
                        className={`md:px-6 md:py-3 px-3 py-2  bg-[#DCE5D9] text-sm text-[#161D16] ${geist.className} `}
                    >
                        Create Project
                    </Button></div>
                </div>
            </div>

            {cards.length > 0 ? (
                <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                    <div className="flex w-max gap-3 md:gap-6 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
                        {cards.map((card) => (
                            <div key={card.id} className="w-60 shrink-0 md:w-auto">
                                <Projectcard {...card} />
                            </div>
                        ))}
                    </div>
                </div>) : (
                <div className="flex flex-col justify-center items-center mt-30">
                    <img src="/Empty/AddFile.png" alt="addfiles" />
                    <span className={`text-[#565E74] ${geist.className} text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium`}>No Saved Projects</span>
                </div>)
            }
        </div>
    )
}



export default Saved_ProjectsPage