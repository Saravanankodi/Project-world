"use client";

import Image from "next/image";
import { inter } from "@/lib/fonts";

interface TransactionItemProps {
    image: string;
    name: string;
    project: string;
    time: string;
    amount: string;
}

export default function TransactionItem({
    image,
    name,
    project,
    time,
    amount,
}: TransactionItemProps) {
    return (
        <div className="flex items-center justify-between rounded-xl border-b border-[#DCE5D9] p-4 hover:bg-[#F9FAFB] transition">

            <div className="flex items-center gap-4">

                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#BCCBB9]">

                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />

                </div>

                <div>

                    <h4
                        className={`${inter.className} text-sm font-semibold text-[#161D16]`}
                    >
                        {name}
                    </h4>

                    <p
                        className={`${inter.className} text-xs text-[#667085]`}
                    >
                        {project}
                    </p>

                </div>

            </div>

            <div className="text-right">

                <p
                    className={`${inter.className} text-sm font-semibold text-[#006E2F]`}
                >
                    {amount}
                </p>

                <p
                    className={`${inter.className} text-xs text-[#98A2B3]`}
                >
                    {time}
                </p>

            </div>

        </div>
    );
}