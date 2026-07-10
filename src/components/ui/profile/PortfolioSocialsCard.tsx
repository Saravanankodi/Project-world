"use client";

import { Globe, Code2, Share2, Megaphone } from "lucide-react";
import { geist } from "@/lib/fonts";



export default function PortfolioSocialsCard() {
    return (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white px-6 py-5 shadow-sm">
            <div className="flex items-center justify-between">

                {/* Title */}
                <h2
                    className={`${geist.className} text-sm sm:text-2xl font-semibold text-[#161D16]`}
                >
                    Portfolio & Socials
                </h2>

                {/* Icons */}
                <div className="flex items-center gap-1 sm:gap-5">

                    <button
                        className="rounded-lg p-2 text-[#3D4A3D] transition hover:bg-[#F6FAF4]"
                    >
                        <Globe size={18} strokeWidth={2} />
                    </button>

                    <button
                        className="rounded-lg p-2 text-[#3D4A3D] transition hover:bg-[#F6FAF4]"
                    >
                        <Code2 size={18} strokeWidth={2} />
                    </button>

                    <button
                        className="rounded-lg p-2 text-[#3D4A3D] transition hover:bg-[#F6FAF4]"
                    >
                        <Share2 size={18} strokeWidth={2} />
                    </button>

                    <button
                        className="rounded-lg p-2 text-[#3D4A3D] transition hover:bg-[#F6FAF4]"
                    >
                        <Megaphone size={18} strokeWidth={2} />
                    </button>

                </div>

            </div>
        </div>
    );
}