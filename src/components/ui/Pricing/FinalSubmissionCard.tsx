"use client";

import { ArrowLeft, Rocket } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

            import {Check} from "lucide-react";
interface FinalSubmissionProps {
    onSubmit: () => void;
    onBack: () => void;
    onSaveDraft?: () => void;
}

const steps = [
    {
        title: "Draft Completed",
        status: "completed",
    },
    {
        title: "Review (24-48 hrs)",
        status: "current",
        number: 2,
    },
    {
        title: "Live on Market",
        status: "upcoming",
        number: 3,
    },
];

export default function FinalSubmission({
    onSubmit,
    onBack,
    onSaveDraft,
}: FinalSubmissionProps) {
    return (
        <div className="overflow-hidden rounded-3xl border border-[#e9e9e9] shadow-lg p-4">

            {/* Header */}
            <div className="sm:px-6 sm:pt-6">

                <h2
                    className={`${geist.className} text-sm sm:text-[22px] font-semibold`}
                >
                    Final Submission
                </h2>

            </div>

            {/* Timeline */}

            <div className="sm:mt-6 mt-3 space-y-3 sm:space-y-5 px-5">

                {steps.map((step, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-3"
                    >

                        {step.status === "completed" ? (

                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E]">
                                <Check
                                    size={12}
                                    strokeWidth={3}
                                    className="text-white"
                                />
                            </div>

                        ) : (

                            <div
                                className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold
                    ${step.status === "current"
                                        ? "border-[#22C55E] text-[#22C55E]"
                                        : "border-[#667085] text-[#667085]"
                                    }`}
                            >
                                {step.number}
                            </div>

                        )}

                        <span
                            className={`${inter.className} font-semibold text-xs sm:text-[15px] ${step.status === "pending"
                                    ? "text-[#667085]"
                                    : "text-[#161D16]"
                                }`}
                        >
                            {step.title}
                        </span>

                    </div>

                ))}

            </div>

            {/* Buttons */}
            <div className="sm:mt-8 p-3 sm:p-6">

                <Button
                    onClick={onSubmit}
                    className={`${inter.className} h-10 sm:h-14 w-full rounded-2xl bg-[#22C55E] text-sm sm:text-lg font-semibold text-[#004B1E] text-white hover:bg-[#4fc47a]`}
                    rightIcon={<Rocket size={18} />}
                >
                    Submit For Review
                </Button>

                <div className="mt-5 grid grid-cols-2 gap-4">

                    <Button
                        onClick={onSaveDraft}
                        className={`${inter.className} h-10 sm:h-12 rounded-xl border text-sm sm:text-lg font-medium hover:bg-[#f7fff0]`}
                    >
                        Save Draft
                    </Button>

                    <Button
                        onClick={onBack}
                        leftIcon={<ArrowLeft size={16} />}
                        className={`${inter.className} h-10 sm:h-12 rounded-xl border text-sm sm:text-lg font-medium hover:bg-[#f7fff0]`}
                    >
                        Back
                    </Button>

                </div>

            </div>

        </div>
    );
}