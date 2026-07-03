"use client";

import { Info, ArrowRight } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

interface BottomActionsProps {
    onContinue: () => void;
    onSaveDraft?: () => void;
}

export default function BottomActions({
    onContinue,
    onSaveDraft,
}: BottomActionsProps) {
    return (
        <div className="mt-10 flex flex-col gap-6">

            {/* Info */}
            <div className="flex items-start gap-3 rounded-2xl border border-[#DDEEDD] bg-[#F9FCF8] p-4">

                <Info
                    size={20}
                    className="mt-0.5 text-[#16A34A]"
                />

                <p
                    className={`${inter.className} text-sm leading-6 text-[#565E74]`}
                >
                    Make sure all information is accurate before continuing.
                    You can always edit your project later from your dashboard.
                </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <Button
                    onClick={onSaveDraft}
                    className="h-12 border border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50"
                >
                    Save Draft
                </Button>

                <Button
                    onClick={onContinue}
                    rightIcon={<ArrowRight size={18} />}
                    className="h-12 bg-[#16A34A] text-white hover:bg-[#15803D]"
                >
                    Continue
                </Button>

            </div>

        </div>
    );
}