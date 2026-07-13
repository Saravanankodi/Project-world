"use client";

import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { inter } from "@/lib/fonts";

interface PaymentHistoryFilterProps {
    search: string;
    setSearch: (value: string) => void;

    type: string;
    setType: (value: string) => void;

    duration: string;
    setDuration: (value: string) => void;
}

export default function PaymentHistoryFilter({
    search,
    setSearch,
    type,
    setType,
    duration,
    setDuration,
}: PaymentHistoryFilterProps) {
    return (
        <div className="rounded-2xl border border-[#BCCBB933] bg-white p-2 sm:p-4 shadow-sm shadow-[#0000000D]">

            <div className="flex flex-col gap-3 sm:flex-row">

                {/* Search */}

                <div className="relative flex-1">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#6B7280] bg-[#EDF6EA]"
                    />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Project, ID, Buyer..."
                        className={`${inter.className}  h-11  w-full  rounded-xl  border  border-[#D8E3D3]  bg-[#F5FAF3]  pl-11  pr-4  text-sm  outline-none  focus:border-[#22C55E]  text-[#6B7280]  font-normal 
                        `}
                    />

                </div>

                {/* Transaction Type */}
                <div className="w-full flex gap-2">
                    <div className="w-full h-11  rounded-xl  border  border-[#D8E3D3]  bg-[#F5FAF3]  px-4   text-sm  outline-none  focus:border-[#22C55E] flex items-center justify-between ">

                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className={`${inter.className}  appearance-none  text-[#161D16] font-medium
                        `}
                        >
                            <option>Transaction Type</option>
                            <option>Completed</option>
                            <option>Processing</option>
                            <option>Failed</option>
                        </select>

                        <ChevronDown
                            size={16}
                            className="pointer-events-none  text-[#667085]"
                        />

                    </div>

                    {/* Duration */}

                    <div className="w-full h-11 rounded-xl border border-[#BCCBB966] bg-[#F3FCEF] px-4  text-sm outline-none focus:border-[#22C55E] flex items-center justify-between">

                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className={`${inter.className}
                            appearance-none  text-[#161D16] font-medium
                        `}
                        >
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>

                        <ChevronDown
                            size={16}
                            className="pointer-events-none text-[#667085]"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}