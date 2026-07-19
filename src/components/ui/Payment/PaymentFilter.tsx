"use client";

import Search from "@/components/Navbar/Search";
import { geist } from "@/lib/fonts";
import { Filter } from "lucide-react";
import Dropdown from "../base/Dropdown";

interface PaymentFilterProps {
    day: string;
    month: string;
    year: string;
    status: string;

    onDayChange: (value: string) => void;
    onMonthChange: (value: string) => void;
    onYearChange: (value: string) => void;
    onStatusChange: (value: string) => void;

    onFilterClick?: () => void;
}

export default function PaymentFilter({
    day,
    month,
    year,
    status,
    onDayChange,
    onMonthChange,
    onYearChange,
    onStatusChange,
    onFilterClick,
}: PaymentFilterProps) {
    return (
        <div className="rounded-2xl bg-[#EDF6EA] p-2.5 sm:py-5">

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

                {/* Search */}

                <div className="flex-1 hidden sm:block">
                    <Search className="bg-white border border-[#BCCBB9] text-[#6B7280]"/>
                </div>

                {/* Filters */}

                <div className="flex flex-wrap items-center gap-2">

                    {/* Day */}

                    {/* <select
                        value={day}
                        onChange={(e) => onDayChange(e.target.value)}
                        className={` ${geist.className} h-10 w-[95px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm text-[#161D16] outline-none`}                    >
                        <option>Day</option>
                        <option>Today</option>
                        <option>Yesterday</option>
                    </select>

                    {/* Month *

                    <select
                        value={month}
                        onChange={(e) => onMonthChange(e.target.value)}
                        className={` ${geist.className} h-10 w-[95px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm text-[#161D16] outline-none`}                    >
                        <option>October</option>
                        <option>September</option>
                        <option>August</option>
                        <option>July</option>
                    </select>

                    {/* Year *

                    <select
                        value={year}
                        onChange={(e) => onYearChange(e.target.value)}
                        className={` ${geist.className} h-10 w-[80px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm text-[#161D16] outline-none`}                    >
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select> */}

                    {/* Status */}

                    <select
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                        className={` ${geist.className}   h-8 sm:h-10 w-30 rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm text-[#161D16] outline-none`}
                    >
                        <option>Status: All</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Failed</option>
                    </select>

                    {/* Filter Button */}

                    <button
                        onClick={onFilterClick}
                        className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] bg-[#E8F2E4] transition hover:bg-[#DDEBD8]"
                    >
                        <Filter size={18} className="text-[#3D4A3D]" />
                    </button>

                </div>

            </div>

        </div>
    );
}