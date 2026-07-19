"use client";

import { MoreVertical } from "lucide-react";
import { geist, inter, libertinus } from "@/lib/fonts";
import Pagination from "@/components/Tables/Pagination";

export interface PaymentHistory {
    id: string;
    date: string;
    project: string;
    amount: number;
    status: "Completed" | "Processing" | "Failed";
}

interface PaymentHistoryTableProps {
    data: PaymentHistory[];
    page: number;
    totalPages: number;
    totalItems: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function PaymentHistoryTable({
    data,
    page,
    totalPages,
    totalItems,
    rowsPerPage,
    onPageChange,
}: PaymentHistoryTableProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

            <div className="overflow-x-auto">

                <table className="w-full ">

                    <thead>

                        <tr className="border-b border-[#D8E3D3] bg-[#F5FAF3]">

                            <th className="hidden sm:block px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">
                                <span className={`${inter.className} text-xs uppercase text-[#3D4A3D] text-semibold`}>
                                    Transaction ID
                                </span>
                            </th>

                            <th className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">
                                <span className={`${inter.className} text-xs uppercase text-[#3D4A3D] text-semibold`}>
                                    Date
                                </span>
                            </th>

                            <th className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">
                                <span className={`${inter.className} text-xs uppercase text-[#3D4A3D] text-semibold`}>
                                    Project Name
                                </span>
                            </th>

                            <th className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">
                                <span className={`${inter.className} text-xs uppercase text-[#3D4A3D] text-semibold`}>
                                    Amount
                                </span>
                            </th>

                            <th className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">
                                <span className={`${inter.className} text-xs uppercase text-[#3D4A3D] text-semibold`}>
                                    Status
                                </span>
                            </th>

                            {/* <th className="px-6 py-5 text-center">
                                <span className={`${inter.className} text-xs uppercase text-[#3D4A3D] text-semibold`}>
                                    Actions
                                </span>
                            </th> */}

                        </tr>

                    </thead>

                    <tbody>

                        {data.map((item) => (

                            <tr
                                key={item.id}
                                className="border-b border-[#EEF2EE] hover:bg-[#FAFCFA]"
                            >

                                <td className="hidden sm:block px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">

                                    <span className={`${libertinus.className} text-sm font-normal text-[#3D4A3D]`}>
                                        #{item.id}
                                    </span>

                                </td>

                                <td className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">

                                    <span className={`${inter.className} whitespace-pre-line font-normal text-sm text-[#161D16]`}>
                                        {item.date}
                                    </span>

                                </td>

                                <td className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">

                                    <h4 className={`${inter.className} font-medium text-sm text-[#161D16]`}>
                                        {item.project}
                                    </h4>

                                </td>

                                <td className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">

                                    <span
                                        className={`${inter.className} text-sm font-semibold ${item.amount >= 10000
                                            ? "text-[#BA1A1A]"
                                            : "text-[#161D16]"
                                            }`}
                                    >
                                        ₹{item.amount.toLocaleString()}
                                    </span>

                                </td>

                                <td className="px-2 py-3 md:px-2 md:py-3  lg:px-2 lg:py-3 xl:px-6 xl:py-5 text-left">

                                    <div className="flex items-center gap-2">

                                        <span
                                            className={`h-2 w-2 rounded-full ${item.status === "Completed"
                                                ? "bg-[#006E2F]"
                                                : item.status === "Processing"
                                                    ? "bg-[#667085]"
                                                    : "bg-[#DC2626]"
                                                }`}
                                        />

                                        <span
                                            className={`${inter.className} font-medium text-sm ${item.status === "Completed"
                                                ? "text-[#006E2F]"
                                                : item.status === "Processing"
                                                    ? "text-[#344054]"
                                                    : "text-[#DC2626]"
                                                }`}
                                        >
                                            {item.status}
                                        </span>

                                    </div>

                                </td>

                                {/* <td className="xl:px-6 xl:py-6 text-center">

                                    <button className="rounded-lg p-2 hover:bg-[#F5FAF3]">

                                        <MoreVertical
                                            size={18}
                                            className="text-[#344054]"
                                        />

                                    </button>

                                </td> */}

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                totalItems={totalItems}
                rowsPerPage={rowsPerPage}
                onPageChange={onPageChange}
            />

        </div>
    );
}