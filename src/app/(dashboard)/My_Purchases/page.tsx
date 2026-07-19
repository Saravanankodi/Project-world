import Issusescard from "@/components/Cards/Issusescard";
import PurchasedCard from "@/components/Cards/PurchasedCard";
import { Code, Db, Pencil } from "@/components/icons/purchases";
import SvgDiamond from "@/components/icons/purchases/Diamond";
import SectionHeader from "@/components/ui/base/SectionHeader";
import { inter, geist } from "@/lib/fonts"
import {MonitorSmartphone,Database,Diamond,WandSparkles} from "lucide-react"

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
    ];

    const recentProjects = [
        {
            title: "HyperCloud SaaS UI",
            value: "2 hours ago",
            icon: <Code className="text-[#027A48]" />,
        },
        {
            title: "E-Commerce Schema",
            value: "Yesterday",
            icon: <Db className="text-[#027A48]"  />,
        },
        {
            title: "Payment Gateway Project",
            value: "3 days ago",
            icon: <SvgDiamond className="text-[#027A48]"  />,
        },
        {
            title: "Design System 2.0",
            value: "Last week",
            icon: <Pencil className="text-[#027A48]"  />,
        },
    ];

    return (

        <div className="px-4 py-5">

            <div className="mb-2">
                <div className={`${geist.className} mb-2 text-3xl lg:text-[32px] font-bold text-[#006E2F]`}>My Purchased Projects</div>
                <div className={`${inter.className} text-sm xl:text-base font-normal text-[#3D4A3D]`}>Access your purchased projects, resources, and creator support.</div>
            </div>

            <SectionHeader
                title="Recently Accessed"
                viewAll="View All History"
                href="/History"
                uppercase
            />

            <section className="grid gap-2 sm:gap-6 grid-cols-2 lg:grid-cols-4 pt-2 pb-4">

                {recentProjects.map((item, index) => (
                    <div
                        key={item.title}
                        className={`${index >= 2 ? "hidden lg:block" : "block"}`}
                    >
                    <Issusescard
                        key={item.title}
                        title={item.title}
                        value={item.value}
                        icon={
                            <div className="flex sm:h-14 sm:w-14 h-10 w-10 items-center justify-center rounded-xl bg-[#DDECDD]">
                                {item.icon}
                            </div>
                        }
                        variant="reverse"
                    />
                    </div>

                ))}

            </section>

            {cards.length > 0 ? (
                <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                    <div className="flex  gap-3 md:gap-6 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
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