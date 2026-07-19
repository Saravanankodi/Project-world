"use client";

import { useState } from "react";
import PaymentTable from "@/components/Tables/PaymentTable";
import { Payment } from "@/types/types";
import StatsCard from "@/components/Cards/StatsCard";
import {
    Wallet,
    IndianRupee,
    Clock3,
    TrendingUp,
} from "lucide-react";
import PaymentFilter from "@/components/ui/Payment/PaymentFilter";
import { geist, inter } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Search from "@/components/Navbar/Search";

export default function PaymentPage() {
    const router = useRouter();
    const [filter, setFilter] = useState("ALL");
    const [month, setMonth] = useState("All Months");

    const payments: Payment[] = [
        {
            id: 1,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 2,
            date: "Oct 22, 2024",
            project: "Smart Agriculture Monitoring",
            category: "Agritech Hardware",
            amount: "₹1,800",
            method: "BANK",
            status: "PAID",
        },
        {
            id: 3,
            date: "Oct 19, 2024",
            project: "IoT Home Automation",
            category: "Smart Home Ecosystem",
            amount: "₹3,000",
            method: "CARD",
            status: "PENDING",
        },
        {
            id: 4,
            date: "Oct 22, 2024",
            project: "Smart Agriculture Monitoring",
            category: "Agritech Hardware",
            amount: "₹1,800",
            method: "BANK",
            status: "PAID",
        },
        {
            id: 5,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 6,
            date: "Oct 19, 2024",
            project: "IoT Home Automation",
            category: "Smart Home Ecosystem",
            amount: "₹3,000",
            method: "CARD",
            status: "PENDING",
        },
        {
            id: 7,
            date: "Oct 22, 2024",
            project: "Smart Agriculture Monitoring",
            category: "Agritech Hardware",
            amount: "₹1,800",
            method: "BANK",
            status: "PAID",
        },
        {
            id: 8,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 9,
            date: "Oct 19, 2024",
            project: "IoT Home Automation",
            category: "Smart Home Ecosystem",
            amount: "₹3,000",
            method: "CARD",
            status: "PENDING",
        },
        {
            id: 10,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 11,
            date: "Oct 22, 2024",
            project: "Smart Agriculture Monitoring",
            category: "Agritech Hardware",
            amount: "₹1,800",
            method: "BANK",
            status: "PAID",
        },
        {
            id: 12,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 13,
            date: "Oct 19, 2024",
            project: "IoT Home Automation",
            category: "Smart Home Ecosystem",
            amount: "₹3,000",
            method: "CARD",
            status: "PENDING",
        },
        {
            id: 14,
            date: "Oct 22, 2024",
            project: "Smart Agriculture Monitoring",
            category: "Agritech Hardware",
            amount: "₹1,800",
            method: "BANK",
            status: "PAID",
        },
        {
            id: 15,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 16,
            date: "Oct 19, 2024",
            project: "IoT Home Automation",
            category: "Smart Home Ecosystem",
            amount: "₹3,000",
            method: "CARD",
            status: "PENDING",
        },
        {
            id: 17,
            date: "Oct 22, 2024",
            project: "Smart Agriculture Monitoring",
            category: "Agritech Hardware",
            amount: "₹1,800",
            method: "BANK",
            status: "PAID",
        },
        {
            id: 18,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
        {
            id: 19,
            date: "Oct 19, 2024",
            project: "IoT Home Automation",
            category: "Smart Home Ecosystem",
            amount: "₹3,000",
            method: "CARD",
            status: "PENDING",
        },
        {
            id: 20,
            date: "Oct 24, 2024",
            project: "AI Healthcare Assistant",
            category: "Medical Tech Solution",
            amount: "₹2,500",
            method: "UPI",
            status: "PAID",
        },
    ];

    const [page, setPage] = useState(1);

    const rowsPerPage = 5;

    const totalItems = payments.length;

    const totalPages = Math.ceil(totalItems / rowsPerPage);

    const startIndex = (page - 1) * rowsPerPage;

    const currentPayments = payments.slice(
        startIndex,
        startIndex + rowsPerPage
    );
    

    return (
        <div className="w-full space-y-6 p-5">

            {/* Header */}
            <section>
                <div className={`${geist.className} text-2xl lg:text-[32px] font-bold text-[#006E2F]`}>
                    Payment Details
                </div>

                <div className="mt-1 flex  flex-col sm:flex-row gap-4 items-center justify-between">

                    <p
                        className={`${inter.className} text-sm xl:text-base text-[#3D4A3D]`}
                    >
                        Track your earnings, transactions, and payment history.
                    </p>

                    <Button
                        onClick={() => router.push("/Payment_Details/Withdraw")}
                        className={`bg-[#161D16] text-white px-6 py-3 text-sm font-medium hidden sm:block ${geist.className}`}
                    >
                        Edit Payment Details
                    </Button>

                </div>
            </section>

            <div className="sm:hidden bg-[#EDF6EA] border rounded-2xl border-[#BCCBB9] text-[#6B7280]">
                <Search/>
            </div>

            {/* Stats Cards */}
            <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">

                <StatsCard
                    title="TOTAL REVENUE"
                    value="₹45,200"
                    icon={<Wallet className="h-5 w-5 text-[#027A48]" />}
                    iconBg="bg-[#ECFDF3]"
                    trend="+12.5%"
                    trendUp
                    onClick={() => router.push("/Payment_Details/Withdraw")}
                />

                <StatsCard
                    title="TOTAL TRANSACTIONS"
                    value="142"
                    icon={<IndianRupee className="h-5 w-5 text-[#667085]" />}
                    iconBg="bg-[#F8FAF8]"
                    onClick={() => router.push("/Payment_Details/Payment_History")}
                />

                <StatsCard
                    title="PROJECTS SOLD"
                    value="28"
                    icon={<Clock3 className="h-5 w-5 text-[#667085]" />}
                    iconBg="bg-[#F8FAF8]"
                    trend="+3 This Week"
                    trendUp
                    onClick={() => router.push("/Payment_Details")}
                />

                <StatsCard
                    title="AVAILABLE BALANCE"
                    value="₹7,300"
                    icon={<Wallet className="h-5 w-5 text-white" />}
                    iconBg="bg-[#006E2F]"
                    className="bg-[#22C55E] border-[#22C55E]"
                    valueColor="text-[#161D16]"
                    badge="Settles in 2d"
                    badgeColor="bg-transparent text-[#004B1E]"
                    onClick={() => router.push("/Payment_Details/Withdraw")}
                />

            </section>

            <div className="sm:hidden w-full flex item-center justify-center">
                <Button
                    onClick={() => router.push("/Payment_Details/Withdraw")}
                    className={`bg-[#161D16] text-white px-6 py-3 text-sm font-medium ${geist.className}`}
                >
                    Edit Payment Details
                </Button>
            </div>

            {/* Filter */}
            <section>
                <PaymentFilter
                    filter={filter}
                    setFilter={setFilter}
                    month={month}
                    setMonth={setMonth}
                />
            </section>

            {/* Table */}
            <section>
                <PaymentTable
                    payments={currentPayments}
                    page={page}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    rowsPerPage={rowsPerPage}
                    onPageChange={setPage}
                />
            </section>

        </div>
    );
}