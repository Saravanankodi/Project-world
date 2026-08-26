"use client";

import Issusescard from "@/components/Cards/Issusescard";
import PurchasedCard from "@/components/Cards/PurchasedCard";

import { Code, Db, Pencil } from "@/components/icons/purchases";
import SvgDiamond from "@/components/icons/purchases/Diamond";

import SectionHeader from "@/components/ui/base/SectionHeader";

import { inter, geist } from "@/lib/fonts";

import { auth } from "@/lib/firebase";
import { getBuyerOrders } from "@/services/order";
import {
    getProjectById,
    Project,
} from "@/services/project";

import { onAuthStateChanged } from "firebase/auth";

import {
    useEffect,
    useState,
} from "react";


interface PurchasedProject {
    id: string;
    image: string;
    category: string;
    title: string;
    description: string;
    rating: number;
    author: string;
    authorAvatar: string;
    price: number;
    bookmarked: boolean;
}


const My_PurchasesPage = () => {

    const [cards, setCards] = useState<PurchasedProject[]>([]);
    const [loading, setLoading] = useState(true);


    // ==========================================
    // FETCH PURCHASED PROJECTS
    // ==========================================

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            async (user) => {

                if (!user) {
                    setCards([]);
                    setLoading(false);
                    return;
                }

                try {

                    setLoading(true);

                    // Get only PAID orders
                    const orders =
                        await getBuyerOrders(user.uid);


                    // Get project for every order
                    const purchasedProjects =
                        await Promise.all(
                            orders.map(
                                async (order) => {

                                    if (!order.projectId) {
                                        return null;
                                    }

                                    const project =
                                        await getProjectById(
                                            order.projectId
                                        );

                                    if (!project) {
                                        return null;
                                    }

                                    return {
                                        order,
                                        project,
                                    };
                                }
                            )
                        );


                    // Remove null projects
                    const validProjects =
                        purchasedProjects.filter(
                            (
                                item
                            ): item is {
                                order: typeof orders[number];
                                project: Project;
                            } =>
                                item !== null
                        );


                    // Convert Firestore data
                    // to PurchasedCard props
                    const formattedProjects =
                        validProjects.map(
                            ({
                                order,
                                project,
                            }) => ({

                                id:
                                    order.id ??
                                    project.id ??
                                    "",

                                image:
                                    project
                                        .technicalDetails
                                        ?.resources
                                        ?.screenshots?.[0] ||
                                    "/preview/preview-2.jpg",

                                category:
                                    project
                                        .projectInformation
                                        ?.domain ||
                                    "Project",

                                title:
                                    project
                                        .projectInformation
                                        ?.title ||
                                    "Untitled Project",

                                description:
                                    project
                                        .projectInformation
                                        ?.description ||
                                    "",

                                rating: 4.9,

                                author:
                                    "Creator",

                                authorAvatar:
                                    "/Topbar/ProfileImage.png",

                                price:
                                    order.amount ??
                                    project
                                        .priceDetails
                                        ?.basePrice ??
                                    0,

                                bookmarked: false,
                            })
                        );


                    setCards(
                        formattedProjects
                    );

                } catch (error) {

                    console.error(
                        "Failed to fetch purchased projects:",
                        error
                    );

                    setCards([]);

                } finally {

                    setLoading(false);

                }
            }
        );


        return () => unsubscribe();

    }, []);


    // ==========================================
    // RECENT PROJECTS
    // ==========================================

    const recentProjects = [
        {
            title: "HyperCloud SaaS UI",
            value: "2 hours ago",
            icon: (
                <Code className="text-[#027A48]" />
            ),
        },
        {
            title: "E-Commerce Schema",
            value: "Yesterday",
            icon: (
                <Db className="text-[#027A48]" />
            ),
        },
        {
            title: "Payment Gateway Project",
            value: "3 days ago",
            icon: (
                <SvgDiamond className="text-[#027A48]" />
            ),
        },
        {
            title: "Design System 2.0",
            value: "Last week",
            icon: (
                <Pencil className="text-[#027A48]" />
            ),
        },
    ];


    return (

        <div className="px-4 py-5">

            <div className="mb-2">

                <div
                    className={`${geist.className} mb-2 text-3xl lg:text-[32px] font-bold text-[#006E2F]`}
                >
                    My Purchased Projects
                </div>

                <div
                    className={`${inter.className} text-sm xl:text-base font-normal text-[#3D4A3D]`}
                >
                    Access your purchased projects, resources, and creator support.
                </div>

            </div>


            <SectionHeader
                title="Recently Accessed"
                viewAll="View All History"
                href="/History"
                uppercase
            />


            <section className="grid gap-2 sm:gap-6 grid-cols-2 lg:grid-cols-4 pt-2 pb-4">

                {recentProjects.map(
                    (item, index) => (

                        <div
                            key={item.title}
                            className={`${index >= 2
                                ? "hidden lg:block"
                                : "block"
                                }`}
                        >

                            <Issusescard
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

                    )
                )}

            </section>


            {/* =====================================
                PURCHASED PROJECTS
            ===================================== */}

            {loading ? (

                <div className="flex flex-col justify-center items-center mt-30">

                    <span
                        className={`${geist.className} text-[#565E74] text-lg`}
                    >
                        Loading purchased projects...
                    </span>

                </div>

            ) : cards.length > 0 ? (

                <div className="overflow-x-auto md:overflow-visible scrollbar-hide">

                    <div className="flex gap-3 md:gap-6 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">

                        {cards.map((card) => (

                            <div
                                key={card.id}
                                className="w-60 shrink-0 md:w-auto"
                            >

                                <PurchasedCard
                                    {...card}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            ) : (

                <div className="flex flex-col justify-center items-center mt-30">

                    <img
                        src="/Empty/Cart.png"
                        alt="cart"
                    />

                    <span
                        className={`text-[#565E74] ${geist.className} text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium`}
                    >
                        No Projects Purchased
                    </span>

                </div>

            )}

        </div>
    );
};

export default My_PurchasesPage;