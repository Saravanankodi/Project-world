"use client";

import React from "react";
import { geist, inter } from "@/lib/fonts";
import { TrendingUp } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string;
    icon?: React.ReactNode;
    trend?: string;
    trendUp?: boolean;
    valueColor?: string;
}

export default function StatsCard({
    title,
    value,
    icon,
    trend,
    trendUp = true,
    valueColor = "text-[#161D16]",
}: StatsCardProps) {
    return (
        <div className="rounded-2xl border border-[#D8E3D3] flex flex-col items-start justify-center bg-white  px-5  py-2 shadow-sm transition hover:shadow-md">

            {/* Header */}
            <div className="flex items-center ">

                <p
                    className={`${geist.className} text-xs font-medium uppercase tracking-wide text-[#3D4A3D]`}
                >
                    {title}
                </p>

               
            </div>

            {/* Value */}
            <div className="w-full mt-2 flex items-center justify-between gap-3">

                <h2
                    className={`${geist.className} text-xs sm:text-base font-bold ${valueColor}`}
                >
                    {value}
                </h2>

                {trend && (
                    <span
                        className={`rounded-md  px-2 py-1 text-[10px] sm:text-xs font-semibold ${inter.className} flex gap-2
                        ${trendUp
                                ? "text-[#006E2F]"
                                : "text-[#D92D20]"
                            }`}
                    >                     
                        <TrendingUp size={20} className="text-[#006E2F] text-xs" />
                        {trend}
                    </span>
                )}
                {icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#FBBF24]">
                        {icon}
                    </div>
                )}


            </div>

        </div>
    );
}