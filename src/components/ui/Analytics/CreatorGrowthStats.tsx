"use client";

import { Eye, Users, Heart } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

const stats = [
    {
        icon: Eye,
        title: "Profile Views",
    },
    {
        icon: Users,
        title: "New Followers",
    },
    {
        icon: Heart,
        title: "Project Saves",
    },
];

export default function CreatorGrowthStats() {
    return (
        <div className="rounded-2xl border border-[#E8F0E4] bg-white shadow-lg shadow-[#0F172A0D] p-6">

            <h3 className={`${geist.className} mb-6 text-lg font-bold text-[#161D16]`}>
                Creator Growth Stats
            </h3>

            <div className="space-y-5">

                {stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="flex items-center gap-3"
                        >

                            <Icon
                                size={18}
                                className="text-[#3D4A3D]"
                            />

                            <span
                                className={`${inter.className} text-base font-medium text-[#161D16]`}
                            >
                                {item.title}
                            </span>

                        </div>

                    );

                })}

            </div>

        </div>
    );
}