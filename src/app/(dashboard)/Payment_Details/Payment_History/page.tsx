"use client";

import { useMemo, useState } from "react";
import { Download, Wallet } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

import PaymentHistoryFilter from "@/components/ui/Payment/PaymentHistory/PaymentHistoryFilter";
import PaymentHistoryTable, {
    PaymentHistory,
} from "@/components/ui/Payment/PaymentHistory/PaymentHistoryTable";
import PaymentSidebar from "@/components/ui/Payment/PaymentHistory/PaymentSidebar";

export default function PaymentHistoryPage() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("Transaction Type");
    const [duration, setDuration] = useState("Last 30 Days");

    const [page, setPage] = useState(1);

    const rowsPerPage = 6;

    const history: PaymentHistory[] = [
        {
            id: "PV-982104",
            date: "Oct 24 2024",
            project: "Eco-Track SaaS Kit",
            amount: 2500,
            status: "Completed",
        },
        {
            id: "PV-982103",
            date: "Oct 23 2024",
            project: "Wallet Payout",
            amount: 12000,
            status: "Processing",
        },
        {
            id: "PV-982099",
            date: "Oct 21 2024",
            project: "React Dashboard Pro",
            amount: 1200,
            status: "Completed",
        },
        {
            id: "PV-982090",
            date: "Oct 21 2024",
            project: "React Dashboard Pro",
            amount: 1200,
            status: "Completed",
        },
        {
            id: "PV-982088",
            date: "Oct 18 2024",
            project: "Portfolio Template",
            amount: 850,
            status: "Processing",
        },
        {
            id: "PV-982075",
            date: "Oct 15 2024",
            project: "AI Chat UI Component",
            amount: 4999,
            status: "Completed",
        },
        {
            id: "PV-982074",
            date: "Oct 13 2024",
            project: "Landing Page UI Kit",
            amount: 1700,
            status: "Completed",
        },
    ];

    const filteredData = useMemo(() => {
        return history.filter((item) => {
            const keyword = search.toLowerCase();

            return (
                item.project.toLowerCase().includes(keyword) ||
                item.id.toLowerCase().includes(keyword)
            );
        });
    }, [search]);

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / rowsPerPage);

    const currentData = filteredData.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    return (
        <div className="space-y-6 py-4 px-5">

            {/* Header */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <div className={`${geist.className} text-2xl lg:text-[32px] font-bold text-[#006E2F]`}>
                        Payment History
                    </div>

                    <div className="mt-1 flex  gap-4 items-center justify-between">

                        <p
                            className={`${inter.className} text-sm xl:text-base text-[#3D4A3D]`}
                        >
                            View and manage all your earnings, payouts, and transaction records.
                        </p>

                    </div>
                </div>

                <div className="flex gap-3">

                    <Button
                        leftIcon={<Download size={18} />}
                        className={`${inter.className}  border border-[#BCCBB94D] bg-[#E2EBDE] text-[#161D16] text-base font font-semibold`}
                    >
                        Export Statement
                    </Button>

                    <Button
                        leftIcon={<Wallet size={18} />}
                        className={`${inter.className} bg-[#22C55E] text-[#004B1E] font-semibold text-base`}
                    >
                        Withdraw Funds
                    </Button>

                </div>

            </div>

            {/* Layout */}

            <div className="flex gap-6 flex-col-reverse lg:flex-row">

                {/* Left */}

                <div className="w-full lg:w-[70%] space-y-5">

                    <PaymentHistoryFilter
                        search={search}
                        setSearch={setSearch}
                        type={type}
                        setType={setType}
                        duration={duration}
                        setDuration={setDuration}
                    />

                    <PaymentHistoryTable
                        data={currentData}
                        page={page}
                        totalPages={totalPages}
                        totalItems={totalItems}
                        rowsPerPage={rowsPerPage}
                        onPageChange={setPage}
                    />

                </div>

                {/* Right */}
                <div className="w-full lg:w-[30%]">
                    <PaymentSidebar />
                </div>
            </div>

        </div>
    );
}