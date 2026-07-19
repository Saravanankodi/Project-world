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
    userimage: string;
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
    userimage
}: PurchaseSummaryCardProps) {
    const total = projectPrice + platformFee;

    return (
        <div className="overflow-hidden rounded-2xl border border-[#BCCBB94D] bg-white shadow-sm shadow-[#0F172A0D]">

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

            <div className="space-y-5 p-3 sm:p-5">

                <div>

                    <h2
                        className={`${geist.className} text-sm font-semibold text-[#161D16]`}
                    >
                        {title}
                    </h2>

                    <div className={` ${geist.className} mt-2 flex flex-wrap items-center gap-2 text-sm`}>

                        <span className="text-[#006E2F]">
                            {category}
                        </span>

                        <span className="text-[#BCCBB9]">
                            •
                        </span>

                        <div className="flex items-center gap-1">

                            <Star
                                size={14}
                                fill="#FBBF24"
                                className="text-[#FBBF24]"
                            />

                            <span className={`${inter.className} font-semibold text-[#161D16]`}>
                                {rating}
                            </span>

                            <span className={`${inter.className} text-[#3D4A3D]`}>
                                ({reviews} reviews)
                            </span>

                        </div>

                    </div>

                </div>

                <div className="border-t border-[#dfe0df]" />

                {/* Creator */}

                <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF3]">

                        <Image
                            src={userimage}
                            alt={title}
                            width={6}
                            height={6}
                            className="rounded-full w-full h-full object-cover"
                        />

                    </div>

                    <div>

                        <h4
                            className={`${geist.className} font-medium text-sm  text-[#161D16]`}
                        >
                            {creator}
                        </h4>

                        <p
                            className={`${inter.className} text-sm font-medium text-[#3D4A3D]`}
                        >
                            {creatorRole}
                        </p>

                    </div>

                </div>

                

                {/* Price */}

                <div className="space-y-3 bg-[#EDF6EA] rounded-xl p-5">

                    <div className="flex justify-between">

                        <span className={`${inter.className} text-sm text-[#3D4A3D]`}>
                            Project Price
                        </span>

                        <span className={` ${inter.className} text-sm font-medium text-[#3D4A3D]`}>
                            ${projectPrice.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className={`${inter.className} test-sm text-[#3D4A3D]`}>
                            Platform Fee
                        </span>

                        <span className={` ${inter.className} text-sm font-medium text-[#3D4A3D]`}>
                            ${platformFee.toFixed(2)}
                        </span>

                    </div>

                    <div className="border-t border-[#dfe0df]" />

                    <div className={`${inter.className} flex justify-between font-semibold text-sm text-[#161D16]`}>

                        <span
                            className={`${geist.className} text-base font-semibold`}
                        >
                            Total Amount
                        </span>

                        <span
                            className={`${geist.className} text-sm font-semibold text-[#006E2F]`}
                        >
                            ${total.toFixed(2)}
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}