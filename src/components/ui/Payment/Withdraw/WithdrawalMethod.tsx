"use client";

import { useState } from "react";
import { Landmark, Smartphone, CheckCircle2 } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface WithdrawalMethodProps {
    method: "UPI" | "BANK";
    setMethod: (method: "UPI" | "BANK") => void;
}

export default function WithdrawalMethod({
    method,
    setMethod,
}: WithdrawalMethodProps) {
    const [upiId, setUpiId] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifsc, setIfsc] = useState("");

    return (
        <div className="rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-[#EEF2EE] px-6 py-5">

                <h2
                    className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                >
                    Withdrawal Method
                </h2>

                <p
                    className={`${inter.className} mt-1 text-sm text-[#667085]`}
                >
                    Choose where you'd like to receive your earnings.
                </p>

            </div>

            <div className="space-y-6 p-6">

                {/* Options */}

                <div className="grid gap-4 md:grid-cols-2">

                    {/* UPI */}

                    <button
                        type="button"
                        onClick={() => setMethod("UPI")}
                        className={`rounded-2xl border p-5 text-left transition
                        ${method === "UPI"
                                ? "border-[#22C55E] bg-[#F0FDF4]"
                                : "border-[#D8E3D3] hover:border-[#22C55E]"
                            }`}
                    >
                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-3">

                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl
                                    ${method === "UPI"
                                            ? "bg-[#22C55E] text-white"
                                            : "bg-[#ECFDF3] text-[#22C55E]"
                                        }`}
                                >
                                    <Smartphone size={22} />
                                </div>

                                <div>

                                    <h3
                                        className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                                    >
                                        UPI Transfer
                                    </h3>

                                    <p
                                        className={`${inter.className} mt-1 text-sm text-[#667085]`}
                                    >
                                        Instant & secure transfer
                                    </p>

                                </div>

                            </div>

                            {method === "UPI" && (
                                <CheckCircle2
                                    size={22}
                                    className="text-[#22C55E]"
                                />
                            )}

                        </div>

                    </button>

                    {/* Bank */}

                    <button
                        type="button"
                        onClick={() => setMethod("BANK")}
                        className={`rounded-2xl border p-5 text-left transition
                        ${method === "BANK"
                                ? "border-[#22C55E] bg-[#F0FDF4]"
                                : "border-[#D8E3D3] hover:border-[#22C55E]"
                            }`}
                    >
                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-3">

                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl
                                    ${method === "BANK"
                                            ? "bg-[#22C55E] text-white"
                                            : "bg-[#ECFDF3] text-[#22C55E]"
                                        }`}
                                >
                                    <Landmark size={22} />
                                </div>

                                <div>

                                    <h3
                                        className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                                    >
                                        Bank Transfer
                                    </h3>

                                    <p
                                        className={`${inter.className} mt-1 text-sm text-[#667085]`}
                                    >
                                        Direct bank deposit
                                    </p>

                                </div>

                            </div>

                            {method === "BANK" && (
                                <CheckCircle2
                                    size={22}
                                    className="text-[#22C55E]"
                                />
                            )}

                        </div>

                    </button>

                </div>

                {/* UPI Form */}

                {method === "UPI" && (
                    <div className="space-y-2">

                        <label
                            className={`${inter.className} text-sm font-medium text-[#3D4A3D]`}
                        >
                            UPI ID
                        </label>

                        <input
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="example@upi"
                            className="h-12 w-full rounded-xl border border-[#D8E3D3] px-4 outline-none focus:border-[#22C55E]"
                        />

                    </div>
                )}

                {/* Bank Form */}

                {method === "BANK" && (
                    <div className="grid gap-5">

                        <div>

                            <label
                                className={`${inter.className} mb-2 block text-sm font-medium text-[#3D4A3D]`}
                            >
                                Account Holder Name
                            </label>

                            <input
                                value={accountName}
                                onChange={(e) =>
                                    setAccountName(e.target.value)
                                }
                                placeholder="John Doe"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] px-4 outline-none focus:border-[#22C55E]"
                            />

                        </div>

                        <div>

                            <label
                                className={`${inter.className} mb-2 block text-sm font-medium text-[#3D4A3D]`}
                            >
                                Account Number
                            </label>

                            <input
                                value={accountNumber}
                                onChange={(e) =>
                                    setAccountNumber(e.target.value)
                                }
                                placeholder="1234567890"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] px-4 outline-none focus:border-[#22C55E]"
                            />

                        </div>

                        <div>

                            <label
                                className={`${inter.className} mb-2 block text-sm font-medium text-[#3D4A3D]`}
                            >
                                IFSC Code
                            </label>

                            <input
                                value={ifsc}
                                onChange={(e) => setIfsc(e.target.value)}
                                placeholder="SBIN0001234"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] px-4 outline-none focus:border-[#22C55E]"
                            />

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}