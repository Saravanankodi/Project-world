import { geist, inter } from "@/lib/fonts";
import React from "react";

interface StatsCardProps {
    title: string;
    value: string;
    badge?: string;
    badgeColor?: string;
    valueColor?: string;
}

const StatsCard = ({
    title,
    value,
    badge,
    badgeColor = "bg-green-100 text-green-700",
    valueColor = "text-[#161D16]",
}: StatsCardProps) => {
    return (
        <div className="rounded-2xl border border-[#D8E3D3] bg-white p-5 shadow-sm">
            <p className={`${geist.className} text-xs font-semibold uppercase tracking-wide text-[#3D4A3D]`}>
                {title}
            </p>

            <div className="mt-3 flex items-center gap-2">
                <h2 className={`text-2xl font-bold ${geist.className} ${valueColor}`}>
                    {value}
                </h2>

                {badge && (
                    <span
                        className={`bg-[#6BFF8F4D] text-[#006E2F] border border-[#ABEFC6] rounded-md px-2 py-1 text-xs font-semibold ${inter.className} ${badgeColor}`}
                    >
                        {badge}
                    </span>
                )}
            </div>
        </div>
    );
};

export default StatsCard;