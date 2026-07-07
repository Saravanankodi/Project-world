"use client";

import { geist, inter } from "@/lib/fonts";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const data = [
    { month: "Jan", current: 18, previous: 15 },
    { month: "Feb", current: 28, previous: 19 },
    { month: "Mar", current: 38, previous: 23 },
    { month: "Apr", current: 55, previous: 27 },
    { month: "May", current: 72, previous: 29 },
    { month: "Jun", current: 68, previous: 26 },
    { month: "Jul", current: 78, previous: 33 },
];

export default function RevenueChart() {
    return (
        <div className="rounded-2xl border border-[#D8E3D8] bg-white p-6">

            {/* Header */}

            <div className="mb-6 flex items-center justify-between">

                <h3
                    className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                >
                    Revenue Overview
                </h3>

                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-2">

                        <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />

                        <span
                            className={`${geist.className} text-xs text-[#3D4A3D]`}
                        >
                            Current
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <div className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />

                        <span
                            className={`${inter.className} text-xs text-[#3D4A3D]`}
                        >
                            Previous
                        </span>

                    </div>

                </div>

            </div>

            <div className="h-75">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient
                                id="greenFill"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#22C55E"
                                    stopOpacity={0.25}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#22C55E"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid
                            stroke="#EEF2EE"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="month"
                            tick={{
                                fill: "#667085",
                                fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            hide
                        />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="previous"
                            stroke="#C4C7C5"
                            fill="none"
                            strokeDasharray="4 4"
                            strokeWidth={2}
                        />

                        <Area
                            type="monotone"
                            dataKey="current"
                            stroke="#22C55E"
                            fill="url(#greenFill)"
                            strokeWidth={3}
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}