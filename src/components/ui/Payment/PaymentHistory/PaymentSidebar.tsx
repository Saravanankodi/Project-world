"use client";

import {
    CalendarDays,
    History,
    Landmark,
    Plus,
} from "lucide-react";
import { geist, inter } from "@/lib/fonts";

export default function PaymentSidebar() {
    return (
        <div className="w-full lg:space-y-6 flex gap-1 lg:gap-0 lg:block">

            {/* Earnings Insight */}

            <section className="w-1/2 lg:w-full rounded-2xl border border-[#BCCBB933] bg-white p-6 shadow-sm shadow-[#0000000D]">

                <div className="flex items-center justify-between mb-6">

                    <h3
                        className={`${geist.className} text-xs uppercase tracking-wide text-[#667085]`}
                    >
                        EARNINGS INSIGHTS
                    </h3>

                </div>

                <div className="space-y-6">

                    {/* This Month */}

                    <div className="flex items-start justify-between ">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006E2F1A]">
                                <CalendarDays
                                    size={18}
                                    className="text-[#006E2F]"
                                />
                            </div>

                            <div>

                                <p
                                    className={`${inter.className} text-sm text-[#3D4A3D] font-normal`}
                                >
                                    This Month
                                </p>

                                <h4
                                    className={`${geist.className} text-base font-normal text-[#161D16]`}
                                >
                                    ₹24,850
                                </h4>

                            </div>
                        </div>
                        <span
                            className={`${inter.className} text-xs font-semibold text-[#006E2F]`}
                        >
                            +8%
                        </span>

                    </div>

                    {/* Last Month */}

                    <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DAE2FD4D]">
                            <History
                                size={18}
                                className="text-[#565E74]"
                            />
                        </div>

                        <div>

                            <p
                                className={`${inter.className} text-sm text-[#3D4A3D]`}
                            >
                                Last Month
                            </p>

                            <h4
                                className={`${geist.className} text-base font-normal text-[#161D16]`}
                            >
                                ₹22,100
                            </h4>

                        </div>

                    </div>

                    {/* Divider */}

                    <div className="border-t border-[#bccbb99c]" />

                    {/* Last Withdrawal */}

                    <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E2EBDE]">
                            <Landmark
                                size={18}
                                className="text-[#3D4A3D]"
                            />
                        </div>

                        <div>

                            <p
                                className={`${inter.className} text-sm text-[#3D4A3D]`}
                            >
                                Last Withdrawal
                            </p>

                            <h4
                                className={`${inter.className} text-base font-semibold text-[#161D16]`}
                            >
                                ₹12,000
                            </h4>

                            <p
                                className={`${inter.className} mt-1 text-[11px] text-[#3D4A3D]`}
                            >
                                Oct 23, 2024 • Bank Transfer
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Payout Methods */}

            <section className="w-1/2 lg:w-full rounded-2xl border border-[#BCCBB933] bg-white p-6 shadow-sm shadow-[#0000000D]">

                <div className="mb-5 flex items-center justify-between">

                    <h3
                        className={`${geist.className} text-xs uppercase tracking-wide font-semibold text-[#3D4A3D]`}
                    >
                        Payout Methods
                    </h3>

                    <button
                        className={`${inter.className} text-xs font-semibold text-[#006E2F] hover:underline`}
                    >
                        Edit
                    </button>

                </div>

                {/* Primary */}

                <div className="rounded-xl border border-[#BCCBB933] bg-[#EDF6EA] p-4">

                    <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                            <Landmark
                                size={18}
                                className="text-[#027A48]"
                            />
                        </div>

                        <div>

                            <h4
                                className={`${inter.className} font-semibold text-sm text-[#161D16]`}
                            >
                                HDFC Bank
                            </h4>

                            <p
                                className={`${inter.className} font-semibold text-sm text-[#161D16]`}
                            >
                                **** 4291
                            </p>

                            <p
                                className={`${inter.className} mt-1 text-[11px] font-semibold text-[#006E2F]`}
                            >
                                Primary Payout
                            </p>

                        </div>

                    </div>

                </div>

                {/* Add Method */}

                <button
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#BCCBB980] bg-[#F3FCEF] py-4 transition hover:bg-[#ECFDF3]"
                >

                    <Plus
                        size={18}
                        className="text-[#3D4A3D]"
                    />

                    <span
                        className={`${inter.className} text-sm font-medium text-[#3D4A3D]`}
                    >
                        Add New Method
                    </span>

                </button>

            </section>

        </div>
    );
}