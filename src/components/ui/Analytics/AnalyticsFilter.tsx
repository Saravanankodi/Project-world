"use client";

import { Download } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";
import { useState } from "react";

export default function AnalyticsFilter() {
    const [selected, setSelected] = useState("month");

    const tabs = [
        {
            id: "month",
            label: "This Month",
        },
        {
            id: "quarter",
            label: "Quarter",
        },
        {
            id: "year",
            label: "Year",
        },
    ];

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex rounded-xl border border-[#D8E3D8] bg-[#E8F0E4] p-1">

                {tabs.map((tab) => (

                    <button
                        key={tab.id}
                        onClick={() => setSelected(tab.id)}
                        className={`${geist.className}
                        rounded-lg px-4 py-2 text-sm font-medium transition

                        ${selected === tab.id
                                ? "bg-white text-[#006E2F] shadow-sm"
                            : "text-[#3D4A3D]"
                            }`}
                    >
                        {tab.label}
                    </button>

                ))}

            </div>

            <Button
                leftIcon={<Download size={16} />}
                className={` ${geist.className} bg-[#161D16] text-white text-sm hover:bg-black`}
            >
                Export
            </Button>

        </div>
    );
}