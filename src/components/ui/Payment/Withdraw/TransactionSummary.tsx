// "use client";

// import { Clock3, Info } from "lucide-react";
// import Button from "@/components/Button/Button";
// import { geist, inter } from "@/lib/fonts";

// interface TransactionSummaryProps {
//     balance: number;
//     amount: number;
//     processingFee: number;
//     finalAmount: number;
//     onWithdraw?: () => void;
//     onCancel?: () => void;
// }

// export default function TransactionSummary({
//     balance,
//     amount,
//     processingFee,
//     finalAmount,
//     onWithdraw,
//     onCancel,
// }: TransactionSummaryProps) {
//     return (
//         <div className="sticky top-6 rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

//             {/* Header */}

//             <div className="border-b border-[#EEF2EE] px-6 py-5">

//                 <h2
//                     className={`${geist.className} text-xl font-semibold text-[#161D16]`}
//                 >
//                     Transaction Summary
//                 </h2>

//                 <p
//                     className={`${inter.className} mt-1 text-sm text-[#667085]`}
//                 >
//                     Review your withdrawal details before confirming.
//                 </p>

//             </div>

//             {/* Body */}

//             <div className="space-y-5 p-6">

//                 {/* Available */}

//                 <div className="flex items-center justify-between">

//                     <span
//                         className={`${inter.className} text-sm text-[#667085]`}
//                     >
//                         Available Balance
//                     </span>

//                     <span
//                         className={`${geist.className} font-semibold text-[#161D16]`}
//                     >
//                         ₹{balance.toLocaleString()}
//                     </span>

//                 </div>

//                 {/* Withdraw */}

//                 <div className="flex items-center justify-between">

//                     <span
//                         className={`${inter.className} text-sm text-[#667085]`}
//                     >
//                         Withdrawal Amount
//                     </span>

//                     <span
//                         className={`${geist.className} font-semibold text-[#161D16]`}
//                     >
//                         ₹{amount.toLocaleString()}
//                     </span>

//                 </div>

//                 {/* Fee */}

//                 <div className="flex items-center justify-between">

//                     <span
//                         className={`${inter.className} text-sm text-[#667085]`}
//                     >
//                         Processing Fee
//                     </span>

//                     <span
//                         className={`${geist.className} font-semibold text-[#161D16]`}
//                     >
//                         {processingFee === 0
//                             ? "FREE"
//                             : `₹${processingFee.toLocaleString()}`}
//                     </span>

//                 </div>

//                 <div className="border-t border-[#EEF2EE]" />

//                 {/* Final */}

//                 <div className="flex items-center justify-between">

//                     <span
//                         className={`${geist.className} text-lg font-semibold text-[#161D16]`}
//                     >
//                         You'll Receive
//                     </span>

//                     <span
//                         className={`${geist.className} text-2xl font-bold text-[#027A48]`}
//                     >
//                         ₹{Math.max(finalAmount, 0).toLocaleString()}
//                     </span>

//                 </div>

//                 {/* Estimated */}

//                 <div className="rounded-xl border border-[#D8E3D3] bg-[#F8FAF8] p-4">

//                     <div className="flex items-center gap-3">

//                         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECFDF3]">

//                             <Clock3
//                                 size={20}
//                                 className="text-[#027A48]"
//                             />

//                         </div>

//                         <div>

//                             <h4
//                                 className={`${geist.className} font-semibold text-[#161D16]`}
//                             >
//                                 Estimated Arrival
//                             </h4>

//                             <p
//                                 className={`${inter.className} text-sm text-[#667085]`}
//                             >
//                                 1–3 Business Days
//                             </p>

//                         </div>

//                     </div>

//                 </div>

//                 {/* Warning */}

//                 <div className="rounded-xl border border-[#F7E3A1] bg-[#FFFBEA] p-4">

//                     <div className="flex items-start gap-3">

//                         <Info
//                             size={20}
//                             className="mt-0.5 text-[#B54708]"
//                         />

//                         <p
//                             className={`${inter.className} text-sm leading-6 text-[#7A4F01]`}
//                         >
//                             Please verify your payment details carefully.
//                             Withdrawals cannot be reversed after processing.
//                         </p>

//                     </div>

//                 </div>

//                 {/* Buttons */}

//                 <div className="space-y-3 pt-2">

//                     <Button
//                         onClick={onWithdraw}
//                         className={`w-full bg-[#22C55E] text-[#004B1E] font-bold ${geist.className}`}
//                     >
//                         Withdraw Earnings
//                     </Button>

//                     <Button
//                         onClick={onCancel}
//                         className={`w-full border border-[#D8E3D3] bg-white text-[#161D16] font-medium ${inter.className}`}
//                     >
//                         Cancel
//                     </Button>

//                 </div>

//             </div>

//         </div>
//     );
// }








"use client";

import { AlertTriangle, Clock3 } from "lucide-react";
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

            <div className="rounded-2xl border border-[#D8E3D3] bg-white p-5 shadow-sm">

                <h2
                    className={`${geist.className} text-2xl font-semibold text-[#161D16]`}
                >
                    Transaction Summary
                </h2>

                <div className="mt-8 space-y-6">

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-[#667085]`}
                        >
                            Available Balance
                        </span>

                        <span
                            className={`${geist.className} font-semibold text-[#161D16]`}
                        >
                            ₹{balance.toLocaleString()}
                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-[#667085]`}
                        >
                            Withdrawal Amount
                        </span>

                        <span
                            className={`${geist.className} font-semibold text-[#161D16]`}
                        >
                            ₹{amount.toLocaleString()}
                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <span
                            className={`${inter.className} text-[#667085]`}
                        >
                            Processing Fee
                        </span>

                        <span
                            className={`${geist.className} font-semibold text-[#22C55E]`}
                        >
                            {processingFee === 0
                                ? "FREE"
                                : `₹${processingFee}`}
                        </span>

                    </div>

                    <div className="border-t border-[#EEF2EE]" />

                    <div className="flex items-center justify-between">

                        <span
                            className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                        >
                            Final Amount to Receive
                        </span>

                        <span
                            className={`${geist.className} text-3xl font-bold text-[#027A48]`}
                        >
                            ₹{finalAmount.toLocaleString()}
                        </span>

                    </div>

                    {/* Estimated */}

                    <div className="rounded-xl bg-[#F5FAF3] p-4">

                        <div className="flex items-center gap-3">

                            <Clock3
                                size={18}
                                className="text-[#98A2B3]"
                            />

                            <div>

                                <p
                                    className={`${geist.className} text-sm font-semibold text-[#161D16]`}
                                >
                                    Estimated Time
                                </p>

                                <p
                                    className={`${inter.className} text-sm text-[#667085]`}
                                >
                                    1–3 Business Days
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Button */}

                    <Button
                        onClick={onWithdraw}
                        className={`w-full bg-[#22C55E] text-[#004B1E] font-bold py-3 ${geist.className}`}
                    >
                        Withdraw Earnings
                    </Button>

                    <button
                        onClick={onCancel}
                        className={`${inter.className} w-full text-sm font-medium text-[#161D16] hover:text-[#027A48] transition`}
                    >
                        Cancel
                    </button>

                    <p
                        className={`${inter.className} text-center text-xs leading-6 text-[#667085]`}
                    >
                        By clicking Withdraw, you agree to our{" "}
                        <span className="font-semibold underline cursor-pointer">
                            Terms of Payout
                        </span>
                        .
                    </p>

                </div>

            </div>

            {/* Security */}

            <div className="rounded-2xl border border-[#F7D4CC] bg-[#FFF1EF] p-5">

                <div className="flex gap-3">

                    <AlertTriangle
                        size={20}
                        className="mt-1 text-[#B42318]"
                    />

                    <div>

                        <h3
                            className={`${geist.className} text-sm font-semibold text-[#B42318]`}
                        >
                            Secure Transfer
                        </h3>

                        <p
                            className={`${inter.className} mt-2 text-sm leading-6 text-[#7A271A]`}
                        >
                            All transactions are encrypted. Please ensure your
                            payment details are correct to avoid delays.
                        </p>

                    </div>

                </div>

            </div>

        </aside>
    );
}