"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { geist, inter } from "@/lib/fonts";

const data = [
    {
        month: "Jan",
        visits: 120,
        conversion: 40,
    },
    {
        month: "Feb",
        visits: 180,
        conversion: 60,
    },
    {
        month: "Mar",
        visits: 240,
        conversion: 90,
    },
    {
        month: "Apr",
        visits: 310,
        conversion: 120,
    },
    {
        month: "May",
        visits: 420,
        conversion: 180,
    },
    {
        month: "Jun",
        visits: 510,
        conversion: 230,
    },
];

export default function ProjectVisibilityChart() {
    return (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white px-6 py-3">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h3
                        className={`${geist.className} text-xs sm:text-lg font-semibold text-[#161D16]`}
                    >
                        Project Visibility
                    </h3>

                </div>

                {/* Legend */}
                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-2">

                        <span className="h-3 w-3 rounded-full bg-[#006E2F]" />

                        <span className={`${inter.className} text-[8px] sm:text-xs text-[#161D16]`}>
                            Visits
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <span className="h-3 w-3 rounded-full bg-[#BCCBB9]" />

                        <span className={`${inter.className} text-[8px] sm:text-xs text-[#161D16]`}>
                            Conversion
                        </span>

                    </div>

                </div>

            </div>

            {/* Chart */}

            <div className="h-58.5 sm:h-75">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={data}
                        barGap={6}
                    >

                        <CartesianGrid
                            vertical={false}
                            stroke="#F2F4F7"
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#667085",
                                fontSize: 12,
                            }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#667085",
                                fontSize: 12,
                            }}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="visits"
                            fill="#006E2F"
                            radius={[3, 3, 0, 0]}
                        />

                        <Bar
                            dataKey="conversion"
                            fill="#E2EBDE"
                            radius={[3, 3, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}