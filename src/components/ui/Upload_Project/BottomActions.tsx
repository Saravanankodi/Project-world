"use client";

import { Info, ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

interface BottomActionsProps {
    onBack?: () => void;
    onContinue: () => void;
    onSaveDraft?: () => void;
}

export default function BottomActions({
    onBack,
    onContinue,
    onSaveDraft,
}: BottomActionsProps) {
    return (
        <div className=" flex flex-col gap-6">
            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                {/* Left */}
                {onBack && (
                    <Button
                        onClick={onBack}
                        leftIcon={<ArrowLeft size={18} />}
                        className="h-12 border border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50"
                    >
                        Back
                    </Button>
                )}

                {/* Right */}
                <div className="flex gap-3 sm:flex-row">

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

        </div>
    );
}