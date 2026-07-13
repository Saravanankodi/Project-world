"use client";

import {
    BookOpen,
    Code2,
    FileText,
    GraduationCap,
} from "lucide-react";
import { geist, inter } from "@/lib/fonts";

const benefits = [
    {
        icon: Code2,
        title: "Source code access",
    },
    {
        icon: FileText,
        title: "Full Documentation",
    },
    {
        icon: BookOpen,
        title: "Setup Guide",
    },
    {
        icon: GraduationCap,
        title: "Creator Mentorship",
    },
];

export default function PaymentDetails() {
    return (
        <div className="rounded-2xl border border-[#D8E3D3] bg-[#F5FAF3] p-6 shadow-sm">

            <h3
                className={`${geist.className} text-sm font-bold uppercase tracking-wide text-[#667085]`}
            >
                After Successful Payment You Will Get:
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {benefits.map(({ icon: Icon, title }) => (

                    <div
                        key={title}
                        className="flex items-center gap-3"
                    >

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">

                            <Icon
                                size={18}
                                className="text-[#027A48]"
                            />

                        </div>

                        <span
                            className={`${inter.className} text-sm font-medium text-[#161D16]`}
                        >
                            {title}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
}