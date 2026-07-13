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
    userimage: string;

}

export default function PurchasedProjectCard({
    image,
    title,
    author,
    date,
    price,
    userimage,
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
                    className={`${inter.className} absolute right-3 top-3 rounded-full bg-[#006E2FE5] px-3 py-1 text-[10px] font-bold uppercase text-white shadow`}
                >
                    Purchased
                </span>

            </div>

            {/* Content */}

            <div className="space-y-4 p-5">

                <div>

                    <h2
                        className={`${geist.className} text-sm font-semibold text-[#161D16]`}
                    >
                        {title}
                    </h2>

                    <div
                        className={`${inter.className} mt-3 flex items-center gap-2 text-sm text-[#667085]`}
                    >
                        <div className="h-auto w-6 rounded-full">
                            <Image
                                src={userimage}
                                alt={title}
                                width={20}
                                height={20}
                                className="h-full w-full object-contain rounded-full"
                            />
                        </div>
                        <span>
                            by{" "}
                            <span className={`${inter.className} text-sm font-medium text-[#565E74]`}>
                                {author}
                            </span>
                        </span>

                    </div>

                </div>

                <div className="border-t border-[#e1e1e1]" />

                <div className="flex items-center justify-between">

                    <div>

                        <p
                            className={`${inter.className} text-[9px] uppercase tracking-wide text-[#6D7B6C]`}
                        >
                            Date
                        </p>

                        <div
                            className={`${inter.className} mt-2 text-sm font-medium text-[#161D16]`}
                        >
                            {date}
                        </div>

                    </div>

                    <div className="text-right">

                        <p
                            className={`${inter.className} text-[9px] uppercase tracking-wide text-[#6D7B6C]`}
                        >
                            Paid
                        </p>

                        <p
                            className={`${geist.className} mt-2 text-sm font-medium text-[#006E2F]`}
                        >
                            {price}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}