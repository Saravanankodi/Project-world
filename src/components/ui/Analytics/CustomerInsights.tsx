"use client";

import StatsCard from "@/components/Cards/StatsCard";
import { geist } from "@/lib/fonts";

export default function CustomerInsights() {
    return (
        <div className="rounded-2xl border border-[#D8E3D8] bg-white p-6">

            <h3 className={`${geist.className} mb-6 text-lg font-bold text-[#161D16]`}>
                Customer Insights
            </h3>

            <div className="grid grid-cols-3 gap-4">

                <StatsCard
                    title="New Buyers"
                    value="84"
                    trend="+28%"
                    className="bg-[#EDF6EA] border border-[#BCCBB94D]"
                />

                <StatsCard
                    title="Returning"
                    value="36"
                    trend="+12%"
                    className="bg-[#EDF6EA] border border-[#BCCBB94D]"
                />

                <StatsCard
                    title="Avg. Order"
                    value="₹820"
                    trend="Stable"
                    className="bg-[#EDF6EA] border border-[#BCCBB94D]"
                />

            </div>

        </div>
    );
}