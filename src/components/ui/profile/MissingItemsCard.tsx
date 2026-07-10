"use client";

import { geist, inter } from "@/lib/fonts";
import { X } from "lucide-react";

interface MissingItemsCardProps {
    items: string[];
}

export default function MissingItemsCard({
    items,
}: MissingItemsCardProps) {
    return (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white sm:p-5 p-2 shadow-sm">

            <h3
                className={`${geist.className} text-[7px] sm:text-xs font-medium uppercase tracking-wide text-[#161D16]`}
            >
                Missing Items
            </h3>

            <div className="mt-4 space-y-3">

                {items.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-2"
                    >
                        <X
                            size={14}
                            className="text-[#F04438]"
                        />

                        <span
                            className={`${inter.className}  text-[7px] sm:text-sm text-[#3D4A3D]`}
                        >
                            {item}
                        </span>
                    </div>
                ))}

            </div>

        </div>
    );
}