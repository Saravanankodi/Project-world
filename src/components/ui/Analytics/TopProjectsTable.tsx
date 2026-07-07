"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { geist, inter } from "@/lib/fonts";

const projects = [
    {
        image: "/Topbar/Profileimage.jpg",
        name: "Autonomous Drone Kit",
        category: "AI / ML",
        sales: 54,
        revenue: "₹45,900",
        rating: 4.9,
        status: "TRENDING",
    },
    {
        image: "/Topbar/Profileimage.jpg",
        name: "Micro-SaaS Boilerplate",
        category: "Web Dev",
        sales: 42,
        revenue: "₹28,500",
        rating: 4.7,
        status: "STEADY",
    },
];

export default function TopProjectsTable() {
    return (
        <div className="rounded-2xl border border-[#D8E3D8] bg-white">

            <div className="flex items-center justify-between border-b border-[#EEF2EE] p-6">

                <h3 className={`${geist.className} text-lg font-semibold`}>
                    Top Performing Projects
                </h3>

                <button className="text-sm font-semibold text-[#006E2F]">
                    View All
                </button>

            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-[#F8FAF8]">

                        <tr className="text-left text-xs uppercase text-[#667085]">

                            <th className="px-6 py-4">Project</th>
                            <th>Category</th>
                            <th>Sales</th>
                            <th>Revenue</th>
                            <th>Rating</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {projects.map((item) => (

                            <tr
                                key={item.name}
                                className="border-t border-[#EEF2EE]"
                            >

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-3">

                                        <div className="relative h-10 w-10 overflow-hidden rounded-lg">

                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />

                                        </div>

                                        <span
                                            className={`${inter.className} font-medium`}
                                        >
                                            {item.name}
                                        </span>

                                    </div>

                                </td>

                                <td>{item.category}</td>

                                <td>{item.sales}</td>

                                <td>{item.revenue}</td>

                                <td>

                                    <div className="flex items-center gap-1">

                                        <Star
                                            size={14}
                                            fill="#FDB022"
                                            stroke="#FDB022"
                                        />

                                        {item.rating}

                                    </div>

                                </td>

                                <td>

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === "TRENDING"
                                                ? "bg-[#ECFDF3] text-[#027A48]"
                                                : "bg-[#F2F4F7] text-[#667085]"
                                            }`}
                                    >
                                        {item.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}