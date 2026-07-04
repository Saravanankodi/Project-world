"use client";

import { geist, inter } from "@/lib/fonts";
import { Eye, Lock, CheckSquare } from "lucide-react";
import {
    Rocket,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";
import BottomActions from "./BottomActions";
import Button from "@/components/Button/Button";

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
    return (
        <section className="mt-8 rounded-3xl border border-[#E4E7EC] bg-white p-8">

            {/* Header */}
            <div className="mb-8">
                <h2
                    className={`${geist.className} text-[30px] font-semibold text-[#067647]`}
                >
                    Pricing & Mentor Settings
                </h2>

                <p
                    className={`${inter.className} mt-2 text-[16px] text-[#667085]`}
                >
                    Configure pricing, buyer access, and submit your project for
                    marketplace review.
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">

                {/* LEFT SIDE */}
                <div className="space-y-6">

                    {/* Project Pricing */}
                    <div className="rounded-2xl border border-[#E4E7EC] p-6">

                        <h3
                            className={`${geist.className} text-xl font-semibold text-[#101828]`}
                        >
                            Project Pricing
                        </h3>

                        <div className="mt-6 grid grid-cols-2 gap-5">

                            {/* Free */}
                            <button
                                type="button"
                                className="rounded-2xl border border-[#D0D5DD] p-6 text-left transition hover:border-[#039855]"
                            >
                                <div className="flex items-start gap-4">

                                    <div className="mt-1 h-5 w-5 rounded-full border-2 border-[#98A2B3]" />

                                    <div>

                                        <h4 className="font-semibold text-[#101828]">
                                            Free
                                        </h4>

                                        <p className="mt-1 text-sm text-[#667085]">
                                            Open source
                                        </p>

                                    </div>

                                </div>
                            </button>

                            {/* Paid */}
                            <button
                                type="button"
                                className="rounded-2xl border-2 border-[#039855] bg-[#F6FEF9] p-6 text-left"
                            >
                                <div className="flex items-start gap-4">

                                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#039855]">

                                        <div className="h-2.5 w-2.5 rounded-full bg-white" />

                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-[#101828]">
                                            Paid
                                        </h4>

                                        <p className="mt-1 text-sm text-[#667085]">
                                            Commercial
                                        </p>

                                    </div>

                                </div>
                            </button>

                        </div>

                        {/* Bottom */}
                        <div className="mt-6 grid grid-cols-[1fr_1.3fr] gap-6">

                            {/* Price */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Base Price (INR)
                                </label>

                                <div className="flex h-14 items-center rounded-xl bg-[#F6FAF4] px-4">

                                    <span className="mr-3 text-lg font-semibold">
                                        ₹
                                    </span>

                                    <input
                                        type="number"
                                        defaultValue={4999}
                                        className="w-full bg-transparent outline-none"
                                    />

                                </div>

                            </div>

                            {/* Discount */}
                            <div className="flex items-center justify-between rounded-2xl bg-[#F6FAF4] px-5">

                                <div className="flex items-center gap-3">

                                    <svg
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-[#344054]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H3v6l9 9 9-9-9-9z"
                                        />
                                        <circle
                                            cx="7.5"
                                            cy="8.5"
                                            r="1"
                                            fill="currentColor"
                                        />
                                    </svg>

                                    <span className="font-medium">
                                        Launch Discount
                                    </span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <input
                                        defaultValue={20}
                                        className="h-10 w-14 rounded-lg border border-[#D0D5DD] text-center outline-none"
                                    />

                                    <button className="relative h-7 w-12 rounded-full bg-[#22C55E]">

                                        <div className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white" />

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Preview Settings */}
                    <div className="rounded-2xl border border-[#E4E7EC] p-6">

                        {/* Limited Preview */}
                        <div className="rounded-xl bg-[#F6FAF4] px-5 py-4">

                            <h4 className="text-sm font-semibold text-[#101828]">
                                Limited Preview
                            </h4>

                            <p className="mt-1 text-sm text-[#667085]">
                                Images, Video, Description
                            </p>

                        </div>

                        {/* Enable Chat */}
                        <div className="mt-5 flex items-center justify-between rounded-xl bg-[#F6FAF4] px-5 py-4">

                            <div>

                                <h4 className="text-sm font-semibold text-[#101828]">
                                    Enable Chat
                                </h4>

                                <p className="mt-1 text-sm text-[#667085]">
                                    Buyers can contact you before purchasing.
                                </p>

                            </div>

                            {/* Toggle */}
                            <button
                                type="button"
                                className="relative h-7 w-12 rounded-full bg-[#22C55E] transition"
                            >
                                <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white shadow" />
                            </button>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    {/* Access & Interaction */}
                    <div className="rounded-2xl border border-[#E4E7EC] p-6">

                        <h3
                            className={`${geist.className} text-xl font-semibold text-[#101828]`}
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

                                        <h4 className="font-semibold text-[#101828]">
                                            Limited Preview
                                        </h4>

                                        <p className="mt-1 text-sm text-[#667085]">
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

                                        <h4 className="font-semibold text-[#101828]">
                                            Full Access
                                        </h4>

                                        <p className="mt-1 text-sm text-[#667085]">
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
                                    className="h-5 w-5 rounded border-gray-300 accent-[#16A34A]"
                                />

                                <span className="text-sm font-medium text-[#344054]">
                                    Enable project ratings
                                </span>

                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-5 w-5 rounded border-gray-300 accent-[#16A34A]"
                                />

                                <span className="text-sm font-medium text-[#344054]">
                                    Accept public feedback
                                </span>

                            </label>

                        </div>

                    </div>
                    {/* Final Submission */}
                    <div className="overflow-hidden rounded-2xl bg-[#171C18] text-white shadow-xl">

                        {/* Header */}
                        <div className="border-b border-white/10 p-6">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#039855]">

                                    <Rocket size={24} />

                                </div>

                                <div>

                                    <h3
                                        className={`${geist.className} text-xl font-semibold`}
                                    >
                                        Ready to Launch
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-300">
                                        Final review before marketplace submission.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Timeline */}
                        <div className="space-y-5 p-6">

                            <div className="flex items-start gap-3">

                                <CheckCircle2
                                    className="mt-0.5 text-[#22C55E]"
                                    size={20}
                                />

                                <div>

                                    <p className="font-medium">
                                        Project Information
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        Completed
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <CheckCircle2
                                    className="mt-0.5 text-[#22C55E]"
                                    size={20}
                                />

                                <div>

                                    <p className="font-medium">
                                        Technical Details
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        Completed
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <div className="mt-1 h-5 w-5 rounded-full border-2 border-[#22C55E]" />

                                <div>

                                    <p className="font-medium">
                                        Pricing & Review
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        Current Step
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="border-t border-white/10 p-6">

                            {/* Submit */}
                            <Button
                                onClick={onSubmit}
                                rightIcon={<Rocket size={18} />}
                                className="h-12 w-full bg-[#22C55E] text-[#052E16] font-semibold hover:bg-[#16A34A]"
                            >
                                Submit For Review
                            </Button>

                            {/* Bottom Buttons */}
                            <div className="mt-4 grid grid-cols-2 gap-3">

                                <Button
                                    onClick={onSaveDraft}
                                    className="h-11 bg-[#2B312C] text-white hover:bg-[#3A413B]"
                                >
                                    Save Draft
                                </Button>

                                <Button
                                    onClick={onBack}
                                    leftIcon={<ArrowLeft size={16} />}
                                    className="h-11 bg-[#2B312C] text-white hover:bg-[#3A413B]"
                                >
                                    Back
                                </Button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}