"use client";

import Image from "next/image";
import { Star, User } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface PurchaseSummaryCardProps {
    image: string;
    title: string;
    category: string;
    rating: number;
    reviews: number;
    creator: string;
    creatorRole: string;
    projectPrice: number;
    platformFee: number;
}

export default function PurchaseSummaryCard({
    image,
    title,
    category,
    rating,
    reviews,
    creator,
    creatorRole,
    projectPrice,
    platformFee,
}: PurchaseSummaryCardProps) {
    const total = projectPrice + platformFee;

    return (
        <div className="overflow-hidden rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

            {/* Thumbnail */}

            <div className="relative h-52 w-full">

                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

                <span
                    className={`${inter.className} absolute right-4 top-4 rounded-full bg-[#0A8A43] px-3 py-1 text-[10px] font-bold uppercase text-white`}
                >
                    Bestseller
                </span>

            </div>

            {/* Project */}

            <div className="space-y-5 p-5">

                <div>

                    <h2
                        className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                    >
                        {title}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">

                        <span className="text-[#027A48]">
                            {category}
                        </span>

                        <span className="text-[#98A2B3]">
                            •
                        </span>

                        <div className="flex items-center gap-1">

                            <Star
                                size={14}
                                fill="#FACC15"
                                className="text-[#FACC15]"
                            />

                            <span className="font-medium">
                                {rating}
                            </span>

                            <span className="text-[#667085]">
                                ({reviews} reviews)
                            </span>

                        </div>

                    </div>

                </div>

                <div className="border-t border-[#EEF2EE]" />

                {/* Creator */}

                <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF3]">

                        <User
                            size={22}
                            className="text-[#027A48]"
                        />

                    </div>

                    <div>

                        <h4
                            className={`${geist.className} font-medium`}
                        >
                            {creator}
                        </h4>

                        <p
                            className={`${inter.className} text-sm text-[#667085]`}
                        >
                            {creatorRole}
                        </p>

                    </div>

                </div>

                <div className="border-t border-[#EEF2EE]" />

                {/* Price */}

                <div className="space-y-3">

                    <div className="flex justify-between">

                        <span className="text-[#667085]">
                            Project Price
                        </span>

                        <span className="font-medium">
                            ${projectPrice.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-[#667085]">
                            Platform Fee
                        </span>

                        <span className="font-medium">
                            ${platformFee.toFixed(2)}
                        </span>

                    </div>

                    <div className="border-t border-[#EEF2EE]" />

                    <div className="flex justify-between">

                        <span
                            className={`${geist.className} text-lg font-semibold`}
                        >
                            Total Amount
                        </span>

                        <span
                            className={`${geist.className} text-xl font-bold text-[#027A48]`}
                        >
                            ${total.toFixed(2)}
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}