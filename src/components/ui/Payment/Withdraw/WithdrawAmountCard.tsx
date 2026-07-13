"use client";

import { geist, inter } from "@/lib/fonts";

interface WithdrawAmountCardProps {
    balance: number;
    amount: number;
    setAmount: (value: number) => void;
}

export default function WithdrawAmountCard({
    balance,
    amount,
    setAmount,
}: WithdrawAmountCardProps) {
    const percentages = [25, 50, 75, 100];

    const handlePercentage = (percent: number) => {
        const value = Math.floor((balance * percent) / 100);
        setAmount(value);
    };

    return (
        <div className="rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-[#EEF2EE] px-6 py-5">

                <h2
                    className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                >
                    Withdrawal Amount
                </h2>

                <p
                    className={`${inter.className} mt-1 text-sm text-[#667085]`}
                >
                    Enter the amount you wish to withdraw.
                </p>

            </div>

            <div className="space-y-6 p-6">

                {/* Amount Input */}

                <div>

                    <label
                        className={`${inter.className} mb-2 block text-sm font-medium text-[#3D4A3D]`}
                    >
                        Amount
                    </label>

                    <div className="flex h-14 items-center rounded-xl border border-[#D8E3D3] bg-[#F8FAF8] px-4 focus-within:border-[#22C55E]">

                        <span
                            className={`${geist.className} mr-3 text-2xl font-semibold text-[#161D16]`}
                        >
                            ₹
                        </span>

                        <input
                            type="number"
                            value={amount === 0 ? "" : amount}
                            onChange={(e) =>
                                setAmount(Number(e.target.value))
                            }
                            placeholder="0.00"
                            className={`${geist.className} w-full bg-transparent text-2xl font-semibold text-[#161D16] outline-none placeholder:text-[#98A2B3]`}
                        />

                    </div>

                </div>

                {/* Quick Select */}

                <div>

                    <label
                        className={`${inter.className} mb-3 block text-sm font-medium text-[#3D4A3D]`}
                    >
                        Quick Select
                    </label>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                        {percentages.map((percent) => (
                            <button
                                key={percent}
                                onClick={() => handlePercentage(percent)}
                                className="rounded-xl border border-[#D8E3D3] bg-white py-3 text-sm font-semibold text-[#161D16] transition hover:border-[#22C55E] hover:bg-[#ECFDF3]"
                            >
                                {percent}%
                            </button>
                        ))}

                    </div>

                </div>

                {/* Helper */}

                <div className="rounded-xl bg-[#F8FAF8] p-4">

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-sm text-[#667085]`}
                        >
                            Maximum Withdrawable
                        </span>

                        <span
                            className={`${geist.className} text-base font-semibold text-[#161D16]`}
                        >
                            ₹{balance.toLocaleString()}
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}