"use client";

import { Dispatch, SetStateAction } from "react";
import {
    Wallet,
    Circle,
    Landmark,
    CheckCircle2,
} from "lucide-react";

import { geist, inter } from "@/lib/fonts";

interface WithdrawLeftPanelProps {
    availableBalance: number;

    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;

    method: "UPI" | "BANK";
    setMethod: Dispatch<SetStateAction<"UPI" | "BANK">>;

    upiId: string;
    setUpiId: Dispatch<SetStateAction<string>>;

    bankName: string;
    setBankName: Dispatch<SetStateAction<string>>;

    accountNumber: string;
    setAccountNumber: Dispatch<SetStateAction<string>>;
}

export default function WithdrawLeftPanel({
    availableBalance,

    amount,
    setAmount,

    method,
    setMethod,

    upiId,
    setUpiId,

    bankName,
    setBankName,

    accountNumber,
    setAccountNumber,
}: WithdrawLeftPanelProps) {
    const percentages = [25, 50, 75, 100];

    return (
        <div className="space-y-6">

            {/* Available Balance */}

            <section className="rounded-2xl border border-[#D8E3D3] bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <p
                            className={`${geist.className} text-xs uppercase tracking-wide text-[#3D4A3D]`}
                        >
                            Available Balance
                        </p>

                        <h2
                            className={`${geist.className} mt-2 text-5xl font-bold text-[#006E2F]`}
                        >
                            ₹{availableBalance.toLocaleString()}
                        </h2>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFDF3]">

                        <Wallet
                            size={28}
                            className="text-[#027A48]"
                        />

                    </div>

                </div>

                <div className="my-5 border-t border-[#BCCBB94D]" />

                <p
                    className={`${inter.className} text-sm text-normal text-[#3D4A3D]`}
                >
                    You can withdraw any amount up to your available balance.
                </p>

            </section>

            {/* Withdrawal Amount */}

            <section className="rounded-2xl border border-[#BCCBB91A] bg-white p-6 shadow-sm shadow-[#0F172A0D]">

                <h3
                    className={`${geist.className} text-sm font-semibold text-[#161D16]`}
                >
                    Withdrawal Amount
                </h3>

                <div className="mt-5 rounded-xl border border-[#BCCBB9] bg-[#EDF6EA] p-5">

                    <div className="flex items-center gap-3">

                        <span
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            ₹
                        </span>

                        <input
                            type="number"
                            min={0}
                            max={availableBalance}
                            value={amount}
                            onChange={(e) =>
                                setAmount(
                                    Math.min(
                                        Number(e.target.value),
                                        availableBalance
                                    )
                                )
                            }
                            className={`${geist.className} w-full bg-transparent text-4xl font-bold text-[#161D16] outline-none`}
                        />

                    </div>

                </div>

                <div className="w-full mt-5 flex gap-3">

                    {percentages.map((item) => (

                        <button
                            key={item}
                            onClick={() =>
                                setAmount(
                                    Math.round(
                                        availableBalance *
                                        (item / 100)
                                    )
                                )
                            }
                            className={`${inter.className} w-full rounded-lg  bg-[#E2EBDE] py-2 text-[#161D16] text-sm font-medium hover:border-[#22C55E] hover:bg-[#22c55ee2]`}
                        >
                            {item}%
                        </button>

                    ))}

                </div>

            </section>

            {/* Withdrawal Method */}

            <section className="rounded-2xl border border-[#D8E3D3] bg-white p-6 shadow-sm">

                <h3
                    className={`${geist.className} text-2xl font-normal text-[#161D16]`}
                >
                    Withdrawal Method
                </h3>

                <div className="mt-5 space-y-4">

                    {/* UPI */}

                    <div
                        onClick={() => setMethod("UPI")}
                        className={`cursor-pointer rounded-xl border p-5 transition ${method === "UPI"
                            ? "border-[#22C55E] bg-[#006E2F0D]"
                            : "border-[#D8E3D3]"
                            }`}
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex gap-3">

                                {method === "UPI" ? (
                                    <CheckCircle2
                                        className="mt-0.5 text-[#22C55E]"
                                        size={18}
                                    />
                                ) : (
                                    <Circle
                                        className="mt-0.5 text-[#98A2B3]"
                                        size={18}
                                    />
                                )}

                                <div>

                                    <h4
                                        className={`${geist.className} font-normal text-[#161D16] text-sm `}
                                    >
                                        UPI Transfer
                                    </h4>

                                    <p
                                        className={`${inter.className} mt-1 text-sm font-normal text-[#3D4A3D]`}
                                    >
                                        Instant transfer using your UPI ID.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {method === "UPI" && (

                            <div className="mt-5 flex items-center justify-between w-full rounded-lg border border-[#BCCBB9] px-4 py-3 outline-none focus:border-[#22C55E] bg-[#FFFFFF]">

                                <input
                                    value={upiId}
                                    onChange={(e) =>
                                        setUpiId(e.target.value)
                                    }
                                    placeholder="example@upi"
                                    className={`${inter.className}  text-base text-[#6B7280]`}
                                />

                                <p
                                    className={`${inter.className} mt-2 text-xs text-[#027A48]`}
                                >
                                    VERIFIED
                                </p>

                            </div>

                        )}

                    </div>

                    {/* Bank */}

                    <div
                        onClick={() => setMethod("BANK")}
                        className={`cursor-pointer rounded-xl border p-5 transition ${method === "BANK"
                            ? "border-[#22C55E] bg-[#006E2F0D]"
                            : "border-[#D8E3D3]"
                            }`}
                    >

                        <div className="flex gap-3">

                            {method === "BANK" ? (
                                <CheckCircle2
                                    className="mt-0.5 text-[#22C55E]"
                                    size={18}
                                />
                            ) : (
                                <Circle
                                    className="mt-0.5 text-[#98A2B3]"
                                    size={18}
                                />
                            )}

                            <div className="flex-1">

                                <div className="flex items-center justify-between">

                                    <h4
                                        className={`${geist.className} font-normal text-sm text-[#161D16]`}
                                    >
                                        Direct Bank Transfer
                                    </h4>

                                    <Landmark
                                        size={18}
                                        className="text-[#3D4A3D]"
                                    />

                                </div>

                                <p
                                    className={`${inter.className} mt-1 text-sm text-[#3D4A3D]`}
                                >
                                    Transfer directly to your bank account.
                                </p>

                                {method === "BANK" && (

                                    <div className="mt-4 space-y-3">

                                        <input
                                            placeholder="Bank Name"
                                            value={bankName}
                                            onChange={(e) =>
                                                setBankName(
                                                    e.target.value
                                                )
                                            }
                                            className={`${inter.className}  text-base text-[#6B7280] w-full rounded-lg border border-[#D8E3D3] px-4 py-3 outline-none focus:border-[#22C55E]`}

                                        />

                                        <input
                                            placeholder="Account Number"
                                            value={accountNumber}
                                            onChange={(e) =>
                                                setAccountNumber(
                                                    e.target.value
                                                )
                                            }
                                            
                                            className={`${inter.className}  text-base text-[#6B7280] w-full rounded-lg border border-[#D8E3D3] px-4 py-3 outline-none focus:border-[#22C55E]`}
                                        />

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}