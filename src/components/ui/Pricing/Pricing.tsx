"use client";
import { useState } from "react";
import { geist, inter } from "@/lib/fonts";
import { Eye, Lock } from "lucide-react";
import UploadHeader from "../Upload_Project/UploadHeader";
import FinalSubmissionCard from "./FinalSubmissionCard";
import {useRouter} from "next/navigation"

interface PricingProps {
    onBack: () => void;
    onSaveDraft?: () => void;
    onSubmit: () => void;
}


export default function Pricing({
    onBack,
    onSaveDraft,
    onSubmit,
}: PricingProps) {

    const [pricingType, setPricingType] = useState<"free" | "paid">("paid");
    const [discountEnabled, setDiscountEnabled] = useState(true);
    const [discount, setDiscount] = useState(20);
    const [chatEnabled, setChatEnabled] = useState(true);
    const router = useRouter();

    return (
        <section className="mt-8 ">

            {/* Header */}
            <UploadHeader
                title="Pricing & Mentor Settings"
                description="Help buyers understand the technology, requirements, and implementation of yourproject."
            />

            {/* Main Layout */}
            <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">

                {/* LEFT SIDE */}
                <div className="space-y-6">

                    {/* Project Pricing */}
                    <div className="rounded-2xl border border-[#E4E7EC] p-6">

                        <h3
                            className={`${geist.className} text-base sm:text-2xl font-semibold text-[#161D16]`}
                        >
                            Project Pricing
                        </h3>
                        <div className="mt-6 grid grid-cols-2 gap-5">

                            {/* Free */}
                            <label
                                onClick={() => setPricingType("free")}
                                className={`cursor-pointer rounded-xl sm:rounded-2xl border p-2 sm:p-6 transition
        ${pricingType === "free"
                                        ? "border-[#006E2F] border-2 bg-[#EDF6EA]"
                                        : "border-[#BCCBB9]"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="pricing"
                                    checked={pricingType === "free"}
                                    onChange={() => setPricingType("free")}
                                    className="hidden"
                                />

                                <div className="flex items-start gap-4">

                                    <div
                                        className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border
                ${pricingType === "free"
                                                ? "border-[#006E2F]"
                                                : "border-[#98A2B3]"
                                            }`}
                                    >
                                        {pricingType === "free" && (
                                            <div className="h-2.5 w-2.5 rounded-full bg-[#006E2F]" />
                                        )}
                                    </div>

                                    <div>
                                        <h4 className={`${geist.className} text-xs sm:text-base font-bold`}>
                                            Free
                                        </h4>

                                        <p className={`${inter.className} mt-1 text-[10px] sm:text-base text-[#3D4A3D]`}>
                                            Open source
                                        </p>
                                    </div>

                                </div>

                            </label>

                            {/* Paid */}
                            <label
                                onClick={() => setPricingType("paid")}
                                className={`cursor-pointer rounded-xl sm:rounded-2xl border p-2 sm:p-6 transition
        ${pricingType === "paid"
                                        ? "border-[#006E2F] border-2 bg-[#EDF6EA]"
                                        : "border-[#BCCBB9]"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="pricing"
                                    checked={pricingType === "paid"}
                                    onChange={() => setPricingType("paid")}
                                    className="hidden"
                                />

                                <div className="flex items-start gap-4">

                                    <div
                                        className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border
                ${pricingType === "paid"
                                                ? "border-[#006E2F]"
                                                : "border-[#98A2B3]"
                                            }`}
                                    >
                                        {pricingType === "paid" && (
                                            <div className="h-2.5 w-2.5 rounded-full bg-[#006E2F]" />
                                        )}
                                    </div>

                                    <div>
                                        <h4 className={`${geist.className} text-xs sm:text-base font-bold`}>
                                            Paid
                                        </h4>

                                        <p className={`${inter.className} mt-1 text-[10px] sm:text-base text-[#3D4A3D]`}>
                                            Commercial
                                        </p>
                                    </div>

                                </div>

                            </label>

                        </div>

                        {/* Bottom */}
                        <div className="mt-6 grid sm:grid-cols-[1fr_1.3fr] gap-6">

                            {/* Price */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Base Price (INR)
                                </label>

                                <div className="flex h-14 items-center rounded-xl bg-[#F6FAF4] px-4">

                                    <span className={`${geist.className} mr-3 text-sm sm:text-lg font-semibold`}>
                                        ₹
                                    </span>

                                    <input
                                        type="number"
                                        defaultValue={4999}
                                        className="w-full bg-transparent outline-none text-base"
                                    />

                                </div>

                            </div>

                            {/* Discount */}

                            <div className="flex items-center justify-between rounded-2xl bg-[#F6FAF4] px-5 py-4">

                                <div className="flex items-center gap-3">
                                    {/* Your SVG */}
                                    <span className={`${geist.className} text-sm sm:text-base font-bold`}>
                                        Launch Discount
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">


                                    <div className="relative">

                                        <input
                                            type="number"
                                            min={0}
                                            max={100}
                                            value={discount}
                                            onChange={(e) => setDiscount(Number(e.target.value))}
                                            className=" sm:h-9 sm:w-16 h-7 w-13 rounded-lg border border-[#D0D5DD]
                                             focus:border-[#22C55E] pr-5 text-center text-xs sm:text-sm font-semibold text-[#16A34A  
                                             [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
                                              [&::-webkit-outer-spin-button]:appearance-none "
                                        />

                                        <span className="pointer-events-none absolute right-2 top-1/2
                                         -translate-y-1/2 text-xs sm:text-sm font-semibold text-[#16A34A]">
                                            %
                                        </span>

                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setDiscountEnabled((prev) => !prev)}
                                        className={`relative sm:h-7 sm:w-12 h-5 w-10 rounded-full transition-colors
                                             duration-300 ${discountEnabled ? "bg-[#22C55E]" : "bg-[#D0D5DD]"
                                            }`}
                                    >
                                        <div
                                            className={`absolute top-1 sm:h-5 sm:w-5 h-3 w-3 rounded-full bg-white shadow 
                                                transition-transform duration-300 ${discountEnabled ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Preview Settings */}
                    <div className="rounded-2xl border border-[#E4E7EC] p-6">

                        {/* Limited Preview */}
                        <div className="rounded-xl bg-[#F6FAF4] px-5 py-4">

                            <h4 className={`${inter.className} text-sm font-semibold text-[#161D16]`}>
                                Limited Preview
                            </h4>

                            <p className={`${inter.className} mt-1 text-sm text-[#3D4A3D]`}>
                                Images, Video, Description
                            </p>

                        </div>

                        {/* Enable Chat */}
                        <div className="mt-5 flex items-center justify-between rounded-xl bg-[#F6FAF4] px-5 py-4">

                            <div>

                                <h4 className={`${inter.className} text-sm font-semibold text-[#161D16]`}>
                                    Enable Chat
                                </h4>
                            </div>

                            {/* Toggle */}
                            <button
                                type="button"
                                onClick={() => setChatEnabled((prev) => !prev)}
                                className={`relative sm:h-7 sm:w-12 h-5 w-10 rounded-full transition-colors 
                                    duration-300 ${chatEnabled ? "bg-[#22C55E]" : "bg-[#D0D5DD]"
                                    }`}
                            >
                                <div
                                    className={`absolute top-1 sm:h-5 sm:w-5 h-3 w-3 rounded-full
                                         bg-white shadow transition-transform duration-300
                                          ${chatEnabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                />
                            </button>


                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    {/* Access & Interaction */}
                    <div className="rounded-2xl border border-[#E4E7EC] p-6">

                        <h3
                            className={`${geist.className} text-base sm:text-xl font-semibold text-[#3D4A3D]`}
                        >
                            Access & Interaction
                        </h3>

                        {/* Access Cards */}
                        <div className="mt-6 space-y-4">

                            {/* Limited Preview */}
                            <div className="rounded-xl border border-[#D8E3D3] bg-[#F6FAF4] p-4">

                                <div className="flex items-start gap-3">

                                    <div className="mt-1 rounded-full bg-[#E8F5E9] p-2">
                                        <Eye
                                            size={18}
                                            className="text-[#039855]"
                                        />
                                    </div>

                                    <div>

                                        <h4 className={`${inter.className} font-semibold text-xs sm:text-sm text-[#161D16]`}>
                                            Limited Preview
                                        </h4>

                                        <p className={`${inter.className} mt-1 text-xs sm:text-sm text-[#3D4A3D]`}>
                                            Images, Video, Description
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Full Access */}
                            <div className="rounded-xl border border-[#D8E3D3] bg-[#F6FAF4] p-4">

                                <div className="flex items-start gap-3">

                                    <div className="mt-1 rounded-full bg-[#E8F5E9] p-2">
                                        <Lock
                                            size={18}
                                            className="text-[#039855]"
                                        />
                                    </div>

                                    <div>

                                        <h4 className={`${inter.className} font-semibold text-xs sm:text-sm text-[#161D16]`}>
                                            Full Access
                                        </h4>

                                        <p className={`${inter.className} mt-1 text-xs sm:text-sm text-[#3D4A3D]`}>
                                            Source Code, Docs, Setup Guide
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Divider */}
                        <div className="my-6 border-t border-[#EAECF0]" />

                        {/* Options */}
                        <div className="space-y-4">

                            <label className="flex items-center gap-3 cursor-pointer">

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-5 sm:w-5 w-4 rounded border-gray-300 accent-[#16A34A]"
                                />

                                <span className={`${inter.className} text-xs sm:text-sm font-medium text-[#344054]`}>
                                    Enable project ratings
                                </span>

                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-5 sm:w-5 w-4 rounded border-gray-300 accent-[#16A34A]"
                                />

                                <span className={`${inter.className} text-xs sm:text-sm font-medium text-[#344054]`}>
                                    Accept public feedback
                                </span>

                            </label>

                        </div>

                    </div>
                    {/* Final Submission */}
                    <FinalSubmissionCard
                        onSubmit={() =>
                            router.push(
                                "/My_Projects/Upload_Projects/UploadProject_Analytics"
                            )
                        }
                        onSaveDraft={onSaveDraft}
                        onBack={onBack}
                    />

                </div>

            </div>

        </section>
    );
}