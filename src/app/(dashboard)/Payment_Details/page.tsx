// "use client";

// import { Wallet2, ReceiptText, BriefcaseBusiness, Landmark } from "lucide-react";

// import UploadHeader from "@/components/ui/Upload_Project/UploadHeader";
// import StatsCard from "@/components/Cards/StatsCard";
// import Search from "@/components/Navbar/Search";
// import Table from "@/components/Tables/ProjectTable";
// import Pagination from "@/components/Tables/Pagination";

// const transactions = [
//     {
//         date: "Oct 24, 2024",
//         project: "AI Healthcare Assistant",
//         category: "Medical Tech Solution",
//         amount: "₹2,500",
//         method: "UPI",
//         status: "PAID",
//     },
//     {
//         date: "Oct 22, 2024",
//         project: "Smart Agriculture Monitoring",
//         category: "Agritech Hardware",
//         amount: "₹1,800",
//         method: "Bank Transfer",
//         status: "PAID",
//     },
//     {
//         date: "Oct 19, 2024",
//         project: "IoT Home Automation",
//         category: "Smart Home Ecosystem",
//         amount: "₹3,000",
//         method: "UPI",
//         status: "PAID",
//     },
// ];

// export default function PaymentPage() {
//     return (
//         <section className="space-y-6">

//             {/* Header */}

//             <UploadHeader
//                 title="Payment Details"
//                 description="Track your earnings, transactions, and payment history."
//                 buttonText="Edit Payment Details"
//             />

//             {/* Stats */}

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

//                 <StatsCard
//                     title="TOTAL REVENUE"
//                     value="₹45,200"
//                     icon={<Wallet2 className="text-[#006E2F]" />}
//                     trend="+12.5%"
//                     trendUp
//                 />

//                 <StatsCard
//                     title="TOTAL TRANSACTIONS"
//                     value="142"
//                     icon={<ReceiptText className="text-[#3D4A3D]" />}
//                 />

//                 <StatsCard
//                     title="PROJECTS SOLD"
//                     value="28"
//                     icon={<BriefcaseBusiness className="text-[#3D4A3D]" />}
//                     trend="+3 This Week"
//                     trendUp
//                 />

//                 <StatsCard
//                     title="AVAILABLE BALANCE"
//                     value="₹7,300"
//                     icon={<Landmark className="text-white" />}
//                     className="bg-[#22C55E]"
//                     valueColor="text-white"
//                 />

//             </div>

//             {/* Search + Filters */}

//             <div className="rounded-2xl bg-[#F6FAF4] p-4">

//                 <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

//                     <div className="flex-1">
//                         <Search />
//                     </div>

//                     <div className="flex flex-wrap gap-3">

//                         <select className="rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm">
//                             <option>Day</option>
//                         </select>

//                         <select className="rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm">
//                             <option>October</option>
//                         </select>

//                         <select className="rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm">
//                             <option>2024</option>
//                         </select>

//                         <select className="rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm">
//                             <option>Status: All</option>
//                         </select>

//                     </div>

//                 </div>

//             </div>

//             {/* Table */}

//             <Table
//                 columns={[
//                     "DATE",
//                     "PROJECT NAME",
//                     "AMOUNT",
//                     "METHOD",
//                     "STATUS",
//                     "ACTIONS",
//                 ]}
//                 data={transactions}
//             />

//             {/* Pagination */}

//             <Pagination
//                 currentPage={1}
//                 totalPages={3}
//             />

//         </section>
//     );
// }




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

                <div className="mt-1 flex  gap-4 items-center justify-between">

                    <p
                        className={`${inter.className} text-sm xl:text-base text-[#3D4A3D]`}
                    >
                        Track your earnings, transactions, and payment history.
                    </p>

                    <Button
                        onClick={() => router.push("/Payment_Details/Withdraw")}
                        className={`bg-[#161D16] text-white px-6 py-3 text-sm font-medium ${geist.className}`}
                    >
                        Edit Payment Details
                    </Button>

                </div>
            </section>

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