"use client";

import { geist, inter } from "@/lib/fonts";

const categories = [
    {
        name: "AI / ML",
        value: 48,
    },
    {
        name: "Web Development",
        value: 25,
    },
    {
        name: "IoT Systems",
        value: 12,
    },
    {
        name: "Mechanical",
        value: 10,
    },
    {
        name: "Civil",
        value: 5,
    },
];

export default function CategorySales() {
    return (
        <div className="rounded-2xl border border-[#006E2F] bg-white p-6 shadow-lg shadow-[#0F172A0D]">

            <h3
                className={`${geist.className} mb-8 text-lg font-semibold text-[#161D16]`}
            >
                Sales by Category
            </h3>

            <div className="space-y-6">

                {categories.map((item) => (

                    <div key={item.name}>

                        <div className="mb-2 flex items-center justify-between">

                            <span
                                className={`${geist.className} text-sm font-medium text-[#161D16]`}
                            >
                                {item.name}
                            </span>

                            <span
                                className={`${geist.className} text-sm font-bold text-[#161D16]`}
                            >
                                {item.value}%
                            </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#E8F0E4]">

                            <div
                                className="h-full rounded-full bg-[#006E2F] transition-all duration-500"
                                style={{
                                    width: `${item.value}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}