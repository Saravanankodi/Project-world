"use client";

import { Check } from "lucide-react";

interface StepperProps {
    currentStep: number;
}

const steps = [
    "Basic Information",
    "Technical Details",
    "Pricing & Settings",
];

export default function Stepper({ currentStep }: StepperProps) {
    return (
        <div className="w-full mb-8">
            <div className="relative flex justify-between">

                {/* Progress Line */}
                <div className="absolute left-0 top-5 h-0.5 w-full bg-[#D8EAD8]" />

                {/* Active Progress */}
                <div
                    className="absolute left-0 top-5 h-0.5 bg-[#22C55E] transition-all duration-300"
                    style={{
                        width: 
                            currentStep === 1
                                ? "0%"
                                : currentStep === 2
                                    ? "50%"
                                    : "100%",
                    }}
                />

                {steps.map((step, index) => {
                    const stepNumber = index + 1;

                    const completed = stepNumber < currentStep;
                    const active = stepNumber === currentStep;

                    return (
                        <div
                            key={step}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div
                                className={`
                  flex h-10 w-10 items-center justify-center rounded-full border-2
                  transition-all duration-300

                  ${completed
                                        ? "bg-[#22C55E] border-[#22C55E] text-white"
                                        : active
                                            ? "bg-white border-[#22C55E] text-[#22C55E]"
                                            : "bg-white border-[#D1D5DB] text-[#6B7280]"
                                    }
                `}
                            >
                                {completed ? (
                                    <Check size={18} strokeWidth={3} />
                                ) : (
                                    <span className="text-sm font-semibold">
                                        {stepNumber}
                                    </span>
                                )}
                            </div>

                            <span
                                className={`
                  mt-3 text-xs sm:text-sm font-medium text-center

                  ${active || completed
                                        ? "text-[#006E2F]"
                                        : "text-[#6B7280]"
                                    }
                `}
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}