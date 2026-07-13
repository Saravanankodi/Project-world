"use client";

import { Wallet } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface WithdrawBalanceCardProps {
    balance: number;
}

export default function WithdrawBalanceCard({
    balance,
}: WithdrawBalanceCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-[#EEF2EE] px-6 py-5">

                <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFDF3]">

                        <Wallet
                            size={24}
                            className="text-[#027A48]"
                        />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                        >
                            Available Balance
                        </h2>

                        <p
                            className={`${inter.className} mt-1 text-sm text-[#667085]`}
                        >
                            Ready to withdraw
                        </p>

                    </div>

                </div>

            </div>

            {/* Amount */}

            <div className="px-6 py-8">

                <h1
                    className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                >
                    ₹{balance.toLocaleString()}
                </h1>

                <div className="mt-5 rounded-xl border border-[#D8E3D3] bg-[#F8FAF8] p-4">

                    <p
                        className={`${inter.className} text-sm leading-6 text-[#3D4A3D]`}
                    >
                        • Available for immediate withdrawal
                    </p>

                    <p
                        className={`${inter.className} mt-2 text-sm leading-6 text-[#3D4A3D]`}
                    >
                        • No processing fee for withdrawals above ₹500
                    </p>

                    <p
                        className={`${inter.className} mt-2 text-sm leading-6 text-[#3D4A3D]`}
                    >
                        • Funds typically arrive within 1–3 business days
                    </p>

                </div>

            </div>

        </div>
    );
}