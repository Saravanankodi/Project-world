"use client";

import { AlertTriangle, Clock3, Shield, ShieldAlert } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

interface TransactionSummaryProps {
    balance: number;
    amount: number;
    processingFee: number;
    finalAmount: number;
    onWithdraw?: () => void;
    onCancel?: () => void;
}

export default function TransactionSummary({
    balance,
    amount,
    processingFee,
    finalAmount,
    onWithdraw,
    onCancel,
}: TransactionSummaryProps) {
    return (
        <aside className="space-y-5 ">

            {/* Summary Card */}

            <div className="rounded-2xl border border-[#D8E3D3] bg-white p-3 sm:p-5 shadow-sm">

                <h2
                    className={`${geist.className} text-2xl font-semibold text-[#161D16]`}
                >
                    Transaction Summary
                </h2>

                <div className="mt-8 space-y-6">

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-base text-[#3D4A3D] font-medium`}
                        >
                            Available Balance
                        </span>

                        <span
                            className={`${geist.className} font-semibold text-base text-[#161D16]`}
                        >
                            ₹{balance.toLocaleString()}
                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-base text-[#3D4A3D] font-medium`}
                        >
                            Withdrawal Amount
                        </span>

                        <span
                            className={`${geist.className} font-semibold text-base text-[#161D16]`}
                        >
                            ₹{amount.toLocaleString()}
                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-base text-[#3D4A3D] font-medium`}
                        >
                            Processing Fee
                        </span>

                        <span
                            className={`${geist.className} text-base font-semibold text-[#22C55E]`}
                        >
                            {processingFee === 0
                                ? "FREE"
                                : `₹${processingFee}`}
                        </span>

                    </div>

                    <div className="border-t border-[#BCCBB94D]" />

                    <div className="flex items-center justify-between">

                        <span
                            className={`${geist.className} text-sm sm:text-lg font-semibold text-[#161D16]`}
                        >
                            Final Amount to Receive
                        </span>

                        <span
                            className={`${geist.className} text-2xl sm:text-3xl font-bold text-[#027A48]`}
                        >
                            ₹{finalAmount.toLocaleString()}
                        </span>

                    </div>

                    {/* Estimated */}

                    <div className="rounded-xl bg-[#EDF6EA] p-2 sm:p-4">

                        <div className="flex items-center gap-3">

                            <Clock3
                                size={18}
                                className="text-[#BEC6E0]"
                            />

                            <div>

                                <p
                                    className={`${geist.className} text-sm font-semibold text-[#161D16]`}
                                >
                                    Estimated Time
                                </p>

                                <p
                                    className={`${inter.className} text-sm text-[#3D4A3D]`}
                                >
                                    1–3 Business Days
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Button */}

                    <Button
                        onClick={onWithdraw}
                        className={`w-full bg-[#22C55E] text-[#FFFFFF] font-bold py-3 ${geist.className}`}
                    >
                        Withdraw Earnings
                    </Button>

                    <button
                        onClick={onCancel}
                        className={`${inter.className} w-full
                         text-sm font-medium text-[#161D16] hover:text-[#027A48] transition`}
                    >
                        Cancel
                    </button>

                    <p
                        className={`${inter.className} text-center text-sm leading-6 text-[#3D4A3D]`}
                    >
                        By clicking Withdraw, you agree to our{" "}
                        <span className="font-medium underline cursor-pointer text-[#027A48]">
                            Terms of Payout
                        </span>
                        .
                    </p>

                </div>

            </div>

            {/* Security */}

            <div className="rounded-2xl border border-[#F7D4CC] bg-[#FFDAD5] sm:p-5 p-2">

                <div className="flex gap-3">
                    <div className="flex items-center justify-center w-[10%]">
                        <Shield
                            size={20}
                            className="mt-1 text-[#7F2A21]"
                        />
                    </div>
                    <div>

                        <h3
                            className={`${geist.className} text-sm font-semibold text-[#7F2A21]`}
                        >
                            Secure Transfer :  All transactions are encrypted. Please ensure your
                            payment details are correct to avoid delays.
                        </h3>


                    </div>

                </div>

            </div>

        </aside>
    );
}