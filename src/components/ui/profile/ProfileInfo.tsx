"use client";

import { Edit2 } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

const info = [
    {
        label: "FULL NAME",
        value: "Alex Rivera",
    },
    {
        label: "AGE",
        value: "22",
    },
    {
        label: "EMAIL ADDRESS",
        value: "alex.rivera@iitb.ac.in",
    },
    {
        label: "PHONE NUMBER",
        value: "+91 98765 43210",
    },
    {
        label: "USER TYPE",
        value: "Student",
    },
];

export default function ProfileInfo() {
    return (
        <section className="w-full rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm md:p-8">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

                <h2
                    className={`${geist.className} text-xl md:text-2xl font-semibold text-[#161D16]`}
                >
                    Personal Information
                </h2>

                <button className="rounded-lg p-2 transition hover:bg-[#F5F7F5]">
                    <Edit2
                        size={18}
                        className="text-[#006E2F]"
                    />
                </button>

            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 gap-y-7 gap-x-16 sm:grid-cols-2">

                {info.map((item) => (
                    <div
                        key={item.label}
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            {item.label}
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {item.value}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}