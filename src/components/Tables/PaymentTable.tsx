"use client";

import { MoreHorizontal } from "lucide-react";
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
    const statusStyle = {
        PAID: "bg-[#ECFDF3] text-[#027A48]",
        PENDING: "bg-[#FFF7E6] text-[#B54708]",
        FAILED: "bg-[#FEF3F2] text-[#B42318]",
    };

    const methodStyle = {
        UPI: "bg-[#EEF4FF] text-[#175CD3]",
        CARD: "bg-[#F4F3FF] text-[#6938EF]",
        BANK: "bg-[#F2F4F7] text-[#344054]",
    };

    return (
        <>
            {/* Mobile */}

            <div className="space-y-4 md:hidden">
                {payments.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
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
                                <MoreHorizontal size={20} />
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
                                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${methodStyle[item.method]}`}
                                >
                                    {item.method}
                                </span>
                            </div>

                            <div>
                                <p className="text-xs uppercase text-[#667085]">
                                    Status
                                </p>

                                <span
                                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[item.status]}`}
                                >
                                    {item.status}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop */}

            <div className="hidden overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white md:block">

                {/* Header */}

                <div className="grid grid-cols-[1.2fr_2.4fr_1fr_1fr_1fr_80px] border-b border-[#D8E3D3] px-8 py-5">

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Date
                    </h3>

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Project
                    </h3>

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Amount
                    </h3>

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Method
                    </h3>

                    <h3 className={`${geist.className} text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Status
                    </h3>

                    <h3 className={`${geist.className} text-right text-xs font-semibold uppercase tracking-wider text-[#3D4A3D]`}>
                        Actions
                    </h3>

                </div>

                {/* Rows */}

                {payments.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-[1.2fr_2.4fr_1fr_1fr_1fr_80px] items-center border-b border-[#E5E7EB] px-8 py-5 transition hover:bg-[#FAFAFA]"
                    >
                        <div>
                            <p className={`${inter.className} text-sm font-medium`}>
                                {item.date}
                            </p>
                        </div>

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

                        <div>
                            <h3
                                className={`${geist.className} text-base font-bold text-[#006E2F]`}
                            >
                                {item.amount}
                            </h3>
                        </div>

                        <div>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${methodStyle[item.method]}`}
                            >
                                {item.method}
                            </span>

                        </div>

                        <div>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[item.status]}`}
                            >
                                {item.status}
                            </span>

                        </div>

                        <div className="flex justify-end">

                            <button className="rounded-lg p-2 transition hover:bg-[#F3F4F6]">
                                <MoreHorizontal size={20} />
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