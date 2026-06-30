import Projectcard from "@/components/Cards/Projectcard";
import { inter } from "@/lib/fonts"
const ExplorePage = () => {
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
            <div className=" flex flex-col gap-2 mb-4">
                <div>
                    <div className={`${inter.className} mb-2 text-3xl lg:text-[32px] font-semibold text-[#006E2F]`}>Explore Projects</div>
                    <div className={`${inter.className} text-sm xl:text-base font-normal text-[#565E74]`}>Discover verified projects created by students and professionals.</div>
                </div>
                <div className={`${inter.className} text-sm font-normal text-[#3D4A3D]`}>Showing 1,240 projects</div>
            </div>
            <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                <div className="flex  gap-3 md:gap-6 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div key={card.id} className="w-60 shrink-0 md:w-auto">
                            <Projectcard {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExplorePage