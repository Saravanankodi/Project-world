"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
} from "recharts";
import { geist, inter } from "@/lib/fonts";

const data = [
    { month: "Jan", revenue: 12 },
    { month: "Feb", revenue: 14 },
    { month: "Mar", revenue: 11 },
    { month: "Apr", revenue: 32 },
    { month: "May", revenue: 68 },
    { month: "Jun", revenue: 26 },
];

export default function SalesRevenueChart() {
    return (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white px-6 py-3">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <h3
                    className={`${geist.className} text-xs sm:text-lg font-semibold text-[#161D16]`}
                >
                    Sales & Revenue
                </h3>

                <button
                    className={`${inter.className} rounded-lg border border-[#BCCBB94D] bg-[#EDF6EA] px-4 py-2 text-xs sm:text-base text-[#161D16]`}
                >
                    Last 6 Months
                </button>

            </div>

            {/* Chart */}
            <div className="h-55 sm:h-70">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient
                                id="salesGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#22C55E"
                                    stopOpacity={0.35}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#22C55E"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#667085",
                                fontSize: 12,
                            }}
                        />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#22C55E"
                            strokeWidth={3}
                            fill="url(#salesGradient)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}