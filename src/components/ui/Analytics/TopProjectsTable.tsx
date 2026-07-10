"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { geist, inter } from "@/lib/fonts";

const projects = [
    {
        image: "/Bot.svg",
        name: "Autonomous Drone Kit",
        category: "AI / ML",
        sales: 54,
        revenue: "₹45,900",
        rating: 4.9,
        status: "TRENDING",
        className: "bg-[#22C55E1A]",
    },
    {
        image: "/DB.svg",
        name: "Micro-SaaS Boilerplate",
        category: "Web Dev",
        sales: 42,
        revenue: "₹28,500",
        rating: 4.7,
        status: "STEADY",
        className: "bg-[#DAE2FD33]",
    },
];

export default function TopProjectsTable() {
    return (
        <div className="rounded-2xl border border-[#D8E3D8] bg-white">

            <div className="flex items-center justify-between border-b border-[#EEF2EE] p-6">

                <h3 className={`${geist.className} text-lg font-bold text-[#161D16]`}>
                    Top Performing Projects
                </h3>

                <button className={` ${inter.className} text-sm font-bold text-[#006E2F]`}>
                    View All
                </button>

            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-[#EDF6EA]">

                        <tr className={` ${geist.className} text-left text-[10px] uppercase text-[#3D4A3D] font-bold`}>

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
                                                className={`${item.className} object-cover p-2 `}
                                            />

                                        </div>

                                        <span
                                            className={`${geist.className} font-bold text-base text-[#161D16]`}
                                        >
                                            {item.name}
                                        </span>

                                    </div>

                                </td>

                                <td className={`${inter.className} text-[#3D4A3D] text-sm font-medium `}>{item.category}</td>

                                <td className={`${inter.className} text-[#3D4A3D] text-sm font-bold `}>{item.sales}</td>

                                <td className={`${inter.className} text-[#3D4A3D] text-sm font-bold `}>{item.revenue}</td>

                                <td>

                                    <div className={` flex items-center gap-1 ${inter.className} text-[#EAB308] text-sm font-medium `}>

                                        <Star
                                            size={14}
                                            fill="#EAB308"
                                            stroke="#EAB308"
                                        />

                                        {item.rating}

                                    </div>

                                </td>

                                <td>

                                    <span
                                        className={`${inter.className} rounded-full px-3 py-1 text-[10px] uppercase font-bold ${item.status === "TRENDING"
                                            ? "bg-[#22C55E33] text-[#006E2F]"
                                            :
                                            item.status === "STEADY" ?
                                                "bg-[#DCE5D9] text-[#3D4A3D]"

                                                :
                                                "bg-[#F2F4F7] text-[#667085]"
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