import PurchasedCard from "@/components/Cards/PurchasedCard";
import { inter, geist } from "@/lib/fonts"

const My_PurchasesPage = () => {
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
                <div className={`${geist.className} mb-2 text-3xl lg:text-[32px] font-bold text-[#006E2F]`}>My Purchased Projects</div>
                <div className={`${inter.className} text-sm xl:text-base font-normal text-[#3D4A3D]`}>Access your purchased projects, resources, and creator support.</div>
            </div>

            {cards.length > 0 ? (
                <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                    <div className="flex  gap-3 md:gap-6 md:grid md:w-full md:grid-cols-3 2xl:grid-cols-4">
                        {cards.map((card) => (
                            <div key={card.id} className="w-60 shrink-0 md:w-auto">
                                <PurchasedCard {...card} />
                            </div>
                        ))}
                    </div>
                </div>) : (
                <div className="flex flex-col justify-center items-center mt-30">
                    <img src="/Empty/Cart.png" alt="cart" />
                        <span className={`text-[#565E74] ${geist.className} text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium`}> No Projects Purchased</span>
                </div>)
            }
        </div>

    )
}

export default My_PurchasesPage