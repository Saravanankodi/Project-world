"use client";

import { geist, inter } from "@/lib/fonts";
import AnalyticsFilter from "./AnalyticsFilter";

interface AnalyticsHeaderProps {
    title?: string;
    description?: string;
}

export default function AnalyticsHeader({
    title = "Sales Analytics",
    description = "Track your revenue, sales performance, audience growth, and creator success.",
}: AnalyticsHeaderProps) {
    return (
        <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-2">
                <h1
                    className={`${geist.className} text-2xl font-bold text-[#161D16] md:text-3xl`}
                >
                    {title}
                </h1>

                <p
                    className={`${inter.className} max-w-2xl text-sm text-[#3D4A3D] md:text-base`}
                >
                    {description}
                </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
            <AnalyticsFilter />
            </div>
        </div>
    );
}