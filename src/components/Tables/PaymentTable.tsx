"use client";

import { MoreHorizontal, MoreVertical } from "lucide-react";
import { geist, inter } from "@/lib/fonts";
import Pagination from "@/components/Tables/Pagination";
import { Payment } from "@/types/types";


interface PaymentTableProps {
    payments: Payment[];
    page: number;
    totalPages: number;
    totalItems: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function PaymentTable({
    payments,
    page,
    totalPages,
    totalItems,
    rowsPerPage,
    onPageChange,
}: PaymentTableProps) {
  
    return (
        <>
            {/* Mobile */}

            {/* <div className="space-y-4 md:hidden">
                {payments.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border border-[#BCCBB9] bg-white p-5 shadow-sm shadow-[#0000000D]"
                    >
                        <div className="flex items-start justify-between">

                            <div>

                                <h3
                                    className={`${geist.className} text-base font-semibold text-[#161D16]`}
                                >
                                    {item.project}
                                </h3>

                                <p
                                    className={`${inter.className} mt-1 text-sm text-[#667085]`}
                                >
                                    {item.category}
                                </p>

                            </div>

                            <button>
                                <MoreVertical size={20} />
                            </button>

                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">

                            <div>
                                <p className="text-xs uppercase text-[#667085]">
                                    Amount
                                </p>

                                <h4 className="mt-1 font-semibold text-[#006E2F]">
                                    {item.amount}
                                </h4>
                            </div>

                            <div>
                                <p className="text-xs uppercase text-[#667085]">
                                    Date
                                </p>

                                <h4 className="mt-1 font-medium">
                                    {item.date}
                                </h4>
                            </div>

                            <div>
                                <p className="text-xs uppercase text-[#667085]">
                                    Method
                                </p>

                                <span
                                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold `}
                                >
                                    {item.method}
                                </span>
                            </div>

                            <div>
                                <p className="text-xs uppercase text-[#667085]">
                                    Status
                                </p>

                                <span
                                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold`}
                                >
                                    {item.status}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}
            </div> */}

            {/* Desktop */}

            <div className=" overflow-auto rounded-2xl sm:rounded-3xl border border-[#BCCBB9]  md:block">

                {/* Header */}

                <div className="grid grid-cols-[1fr_3fr_1fr] sm:grid-cols-[1.2fr_2.4fr_1fr_1fr_1fr_80px] border-b border-[#D8E3D3] bg-[#6D7B6C] sm:bg-[#EDF6EA] sm:px-8 py-5 px-4 ">

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-white sm:text-[#3D4A3D]`}>
                        Date
                    </h3>

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-white sm:text-[#3D4A3D]`}>
                        Project
                    </h3>

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-white sm:text-[#3D4A3D]`}>
                        Amount
                    </h3>

                    <h3 className={`${geist.className} hidden sm:block text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Method
                    </h3>

                    <h3 className={`${geist.className}  hidden sm:block text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Status
                    </h3>

                    <h3 className={`${geist.className} hidden sm:block text-right text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Actions
                    </h3>

                </div>

                {/* Rows */}

                {payments.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-[1fr_3fr_1fr] sm:grid-cols-[1.2fr_2.4fr_1fr_1fr_1fr_80px] items-center border-b border-[#E5E7EB] sm:px-8 sm:py-5 px-4 py-2 transition hover:bg-[#FAFAFA]"
                    >
                        <div>
                            <p className={`${inter.className} text-[10px] sm:text-sm text-[#161D16] font-medium`}>
                                {item.date}
                            </p>
                        </div>

                        <div>

                            <h3
                                className={`${geist.className} text-sm font-semibold text-[#161D16] line-clamp-1`}
                            >
                                {item.project}
                            </h3>

                            <p
                                className={`${inter.className} mt-1 text-[10px] sm:text-sm font-medium text-[#3D4A3D] line-clamp-1`}
                            >
                                {item.category}
                            </p>

                        </div>

                        <div>
                            <h3
                                className={`${geist.className} text-sm font-bold text-[#161D16]`}
                            >
                                {item.amount}
                            </h3>
                        </div>

                        <div className="hidden sm:block ">

                            <span
                                className={`${geist.className} uppercase rounded-full px-3 py-1 text-[10px] font-medium  bg-[#E8F0E4]`}
                            >
                                {item.method}
                            </span>

                        </div>

                        <div className="hidden sm:block ">

                            <span
                                className={`${geist.className} rounded-full px-3 py-1 text-[10px] uppercase  font-semibold text-[#005321] bg-[#4AE17633]`}
                            >
                                {item.status}
                            </span>

                        </div>

                        <div className="sm:flex justify-end hidden ">

                            <button className="rounded-lg p-2 transition hover:bg-[#F3F4F6]">
                                <MoreVertical size={20} />
                            </button>

                        </div>
                    </div>
                ))}

                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    rowsPerPage={rowsPerPage}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    );
}