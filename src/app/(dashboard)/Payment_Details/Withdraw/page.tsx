"use client";

import { useMemo, useState } from "react";
import { geist, inter } from "@/lib/fonts";

import WithdrawLeftPanel from "@/components/ui/Payment/Withdraw/WithdrawLeftPanel";
import TransactionSummary from "@/components/ui/Payment/Withdraw/TransactionSummary";

export default function WithdrawPage() {
    const availableBalance = 7300;

    const [amount, setAmount] = useState(0);

    const [method, setMethod] = useState<"UPI" | "BANK">("UPI");

    const [upiId, setUpiId] = useState("example@upi");

    const [bankName, setBankName] = useState("");

    const [accountNumber, setAccountNumber] = useState("");

    const processingFee = 0;

    const finalAmount = useMemo(() => {
        return Math.max(amount - processingFee, 0);
    }, [amount]);

    return (
        <div className="space-y-6 p-4 sm:py-4 sm:px-5">

            {/* Header */}

            <div>

                <h1
                    className={`${geist.className} text-lg sm:text-3xl font-bold text-[#006E2F]`}
                >
                    Withdraw Earnings
                </h1>

                <p
                    className={`${inter.className} mt-2 text-sm sm:text-lg text-[#3D4A3D]`}
                >
                    Withdraw your available earnings securely to your preferred payment method.
                </p>

            </div>

            {/* Layout */}

            <div className="grid gap-6 sm:grid-cols-2">

                {/* Left */}

                <WithdrawLeftPanel
                    availableBalance={availableBalance}
                    amount={amount}
                    setAmount={setAmount}
                    method={method}
                    setMethod={setMethod}
                    upiId={upiId}
                    setUpiId={setUpiId}
                    bankName={bankName}
                    setBankName={setBankName}
                    accountNumber={accountNumber}
                    setAccountNumber={setAccountNumber}
                />

                {/* Right */}

                <TransactionSummary
                    balance={availableBalance}
                    amount={amount}
                    processingFee={processingFee}
                    finalAmount={finalAmount}
                    onWithdraw={() => {
                        alert("Withdraw Successful");
                    }}
                    onCancel={() => {
                        setAmount(0);
                    }}
                />

            </div>

        </div>
    );
}