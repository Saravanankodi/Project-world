"use client";

import Image from "next/image";
import { CalendarDays, User } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface PurchasedProjectCardProps {
    image: string;
    title: string;
    author: string;
    date: string;
    price: string;
}

export default function PurchasedProjectCard({
    image,
    title,
    author,
    date,
    price,
}: PurchasedProjectCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

            {/* Thumbnail */}

            <div className="relative h-44 w-full">

                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

                <span
                    className={`${inter.className} absolute right-3 top-3 rounded-full bg-[#16A34A] px-3 py-1 text-[10px] font-bold uppercase text-white shadow`}
                >
                    Purchased
                </span>

            </div>

            {/* Content */}

            <div className="space-y-4 p-5">

                <div>

                    <h2
                        className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                    >
                        {title}
                    </h2>

                    <div
                        className={`${inter.className} mt-3 flex items-center gap-2 text-sm text-[#667085]`}
                    >
                        <User size={16} />

                        <span>
                            by{" "}
                            <span className="font-medium text-[#344054]">
                                {author}
                            </span>
                        </span>

                    </div>

                </div>

                <div className="border-t border-[#EEF2EE]" />

                <div className="flex items-center justify-between">

                    <div>

                        <p
                            className={`${inter.className} text-[11px] uppercase tracking-wide text-[#98A2B3]`}
                        >
                            Date
                        </p>

                        <div
                            className={`${inter.className} mt-2 flex items-center gap-2 text-sm font-medium text-[#161D16]`}
                        >
                            <CalendarDays size={15} />

                            {date}
                        </div>

                    </div>

                    <div className="text-right">

                        <p
                            className={`${inter.className} text-[11px] uppercase tracking-wide text-[#98A2B3]`}
                        >
                            Paid
                        </p>

                        <p
                            className={`${geist.className} mt-2 text-xl font-bold text-[#027A48]`}
                        >
                            {price}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}