"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    viewAll?: string;
    href?: string;
    uppercase?: boolean;
}

const SectionHeader = ({
    title,
    subtitle,
    viewAll,
    href = "#",
    uppercase = false,
}: SectionHeaderProps) => {
    return (
        <div className="w-full  flex items-center justify-between">


            <div>
                <h2
                    className={`${geist.className}  text-[#161D16]
                    ${uppercase
                            ? "text-sm  uppercase font-semibold"
                            : "text-lg font-bold"
                        }`}
                >
                    {title}
                </h2>
                <div>
                    {subtitle && (
                        <p
                            className={`${inter.className} mt-1 text-xs text-[#667085]`}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
            {viewAll && (
                <div className="flex items-center justify-end">               
                    <Link
                        href={href}
                        className={`${geist.className} flex items-center gap-1 font-semibold text-[#027A48] hover:underline text-xs sm:text-sm`}
                    >
                        {viewAll}
                        <ChevronRight size={18} />
                    </Link>

                </div>
            )}



        </div>
    );
};

export default SectionHeader;