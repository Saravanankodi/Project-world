"use client";

import { geist } from "@/lib/fonts";
import TransactionItem from "./TransactionItem";

const transactions = [
    {
        image: "/Topbar/Profileimage.jpg",
        name: "Rahul Sharma",
        project: "AI Resume Builder",
        time: "2 mins ago",
        amount: "₹2,499",
    },
    {
        image: "/Topbar/Profileimage.jpg",
        name: "Priya Singh",
        project: "IoT Smart Home",
        time: "15 mins ago",
        amount: "₹3,999",
    },
    
];

export default function RecentTransactions() {
    return (
        <div className="rounded-2xl border border-[#E8F0E4] bg-white shadow-lg shadow-[#0F172A0D] p-6">

            <div className="mb-6 border-b border-[#E8F0E4] flex items-center justify-between">

                <h3
                    className={`${geist.className} text-lg font-bold text-[#161D16]`}
                >
                    Recent Transactions
                </h3>

                <button className={`${geist.className}  text-sm font-medium text-[#3D4A3D]`}>
                    View All
                </button>

            </div>

            <div className="space-y-4">

                {transactions.map((item) => (

                    <TransactionItem
                        key={item.name}
                        {...item}
                    />

                ))}

            </div>

        </div>
    );
}