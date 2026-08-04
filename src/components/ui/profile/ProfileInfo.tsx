"use client";

import { Edit2 } from "lucide-react";
import { geist, inter } from "@/lib/fonts";
import { UserProfile } from "@/types/types";

type ProfileProps = {
    info: UserProfile | null;
}

export default function ProfileInfo({info}:ProfileProps) {
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
                <div
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            FULL NAME
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {info?.name}
                        </p>
                </div>
                <div
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            AGE
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {info?.age}
                        </p>
                </div>
                <div
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            EMAIL ADDRESS
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {info?.email}
                        </p>
                </div>
                <div
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            PHONE NUMBER
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {info?.phone || 12345678}
                        </p>
                </div>
                <div
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            USER TYPE
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {info?.userType}
                        </p>
                </div>
            </div>

        </section>
    );
}