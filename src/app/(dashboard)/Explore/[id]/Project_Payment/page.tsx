"use client";

import { useState } from "react";

import {
    Building2,
    CreditCard,
    Landmark,
    Lock,
} from "lucide-react";

import Button from "@/components/Button/Button";
import Input from "@/components/ui/Upload_Project/FormInput";
import Dropdown from "@/components/ui/base/Dropdown";

import PurchaseSummaryCard from "@/components/ui/projects/PurchaseSummaryCard";
import PaymentDetails from "@/components/ui/projects/PaymentDetails";

import { geist, inter } from "@/lib/fonts";

type PaymentMethod = "card" | "upi" | "bank";

export default function ProjectPaymentPage() {

    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod>("card");

    const projectPrice = 249;
    const discount = 0;
    const finalAmount = projectPrice - discount;
    const paymentTabs = [
        {
            id: "card",
            label: "Card Payment",
            icon: CreditCard,
        },
        {
            id: "upi",
            label: "UPI",
            icon: Building2,
        },
        {
            id: "bank",
            label: "Net Banking",
            icon: Landmark,
        },
    ];
    const [bank, setBank] = useState("");
    const bankOptions = [
        { label: "State Bank of India", value: "sbi" },
        { label: "HDFC Bank", value: "hdfc" },
        { label: "ICICI Bank", value: "icici" },
        { label: "Axis Bank", value: "axis" },
    ];
    const [upiApp, setUpiApp] = useState("");
    const upiOptions = [
        { label: "Google Pay", value: "gpay" },
        { label: "PhonePe", value: "phonepe" },
        { label: "Paytm", value: "paytm" },
        { label: "BHIM", value: "bhim" },
    ];
    const OrderSummary = () => (

        <div className="rounded-2xl bg-[#F5FAF3] p-6">

            <h3
                className={`${geist.className} mb-6 font-semibold`}
            >
                ORDER SUMMARY
            </h3>

            <div className="space-y-4">

                <div className="flex justify-between">

                    <span className="text-[#667085]">
                        Project Price
                    </span>

                    <span>
                        ${projectPrice.toFixed(2)}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-[#667085]">
                        Discount
                    </span>

                    <span className="text-[#027A48]">
                        -${discount.toFixed(2)}
                    </span>

                </div>

                <div className="border-t pt-4 flex justify-between">

                    <span
                        className={`${geist.className} text-lg font-bold`}
                    >
                        Final Amount
                    </span>

                    <span
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        ${finalAmount.toFixed(2)}
                    </span>

                </div>

            </div>

        </div>

    );

    const PayButton = () => (

        <div className="space-y-4">

            <Button
                className="w-full bg-[#22C55E] py-4 text-lg font-bold text-[#004B1E]"
            >

                Pay & Unlock Project

                <Lock className="ml-2 h-5 w-5" />

            </Button>

            <p
                className={`${inter.className} flex items-center justify-center gap-2 text-sm text-[#667085]`}
            >

                <Lock
                    className="h-4 w-4 text-[#027A48]"
                />

                SSL Secure Transaction

            </p>

        </div>

    );

    const CardPaymentForm = () => (
        <div className="space-y-5">

            <Input
                label="Card Number"
                placeholder="XXXX XXXX XXXX XXXX"
            />

            <div className="grid grid-cols-2 gap-4">

                <Input
                    label="Expiry Date"
                    placeholder="MM / YY"
                />

                <Input
                    label="CVV"
                    placeholder="•••"
                    type="password"
                />

            </div>

        </div>
    );

    const UpiPaymentForm = () => (
        <div className="space-y-5">

            <Input
                label="UPI ID"
                placeholder="example@upi"
            />

            <div className="grid grid-cols-2 gap-4">

                <Dropdown
                    name="Select UPI App"
                    option={upiOptions}
                    value={upiApp}
                    onChange={setUpiApp}
                />

                <Input
                    label="Verify UPI ID"
                    placeholder="Verified"
                    readOnly
                />

            </div>

        </div>
    );

    const NetBankingForm = () => (
        <div className="space-y-5">

            <Dropdown
                name="Choose your Bank"
                option={bankOptions}
                value={bank}
                onChange={setBank}
            />

            <div className="grid grid-cols-2 gap-4">

                <Input
                    label="User ID"
                    placeholder="Enter User ID"
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="********"
                />

            </div>

        </div>
    );

    const renderPaymentForm = () => {
        switch (paymentMethod) {
            case "upi":
                return <UpiPaymentForm />;

            case "bank":
                return <NetBankingForm />;

            default:
                return <CardPaymentForm />;
        }
    };

    return (
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-6 lg:px-8">

            {/* Header */}

            <div>

                <h1
                    className={`${geist.className} text-3xl font-bold text-[#006E2F] lg:text-[40px]`}
                >
                    Secure Checkout
                </h1>

                <p
                    className={`${inter.className} mt-2 text-[#667085]`}
                >
                    Complete your purchase to unlock full access to this premium project.
                </p>

            </div>

            {/* Layout */}

            <div className="grid gap-8 xl:grid-cols-[360px_1fr]">

                {/* Left */}

                <div className="space-y-6">

                    <PurchaseSummaryCard
                        image="/Projects/project-1.jpg"
                        title="Eco Smart Bridge Infrastructure"
                        category="Civil Engineering"
                        rating={4.9}
                        reviews={124}
                        creator="Alex Rivera"
                        creatorRole="Top Rated Creator"
                        projectPrice={249}
                        platformFee={10}
                    />

                    <PaymentDetails />

                </div>

                {/* Right */}

                <div className="rounded-2xl border border-[#D8E3D3] bg-white p-6 shadow-sm">

                    <h2
                        className={`${geist.className} text-2xl font-semibold text-[#161D16]`}
                    >
                        Payment Details
                    </h2>

                    <p
                        className={`${inter.className} mt-2 text-[#667085]`}
                    >
                        Choose your preferred payment method.
                    </p>

                    {/* Tabs */}

                    <div className="mt-8 grid grid-cols-3 gap-3">

                        {paymentTabs.map((tab) => {

                            const Icon = tab.icon;

                            const active =
                                paymentMethod === tab.id;

                            return (

                                <button
                                    key={tab.id}
                                    onClick={() =>
                                        setPaymentMethod(
                                            tab.id as PaymentMethod
                                        )
                                    }
                                    className={`
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    py-4
                                    transition

                                    ${active
                                            ? "border-[#22C55E] bg-[#ECFDF3]"
                                            : "border-[#D8E3D3] hover:border-[#22C55E]"
                                        }
                                `}
                                >

                                    <Icon
                                        size={22}
                                        className={
                                            active
                                                ? "text-[#027A48]"
                                                : "text-[#667085]"
                                        }
                                    />

                                    <span
                                        className={`${inter.className} mt-2 text-sm font-medium`}
                                    >
                                        {tab.label}
                                    </span>

                                </button>

                            );

                        })}

                    </div>

                    {/* Dynamic Form */}

                    <div className="mt-8">

                        {renderPaymentForm()}

                    </div>

                    {/* Summary */}

                    <div className="mt-8">

                        <OrderSummary />

                    </div>

                    {/* Button */}

                    <div className="mt-8">

                        <PayButton />

                    </div>

                </div>

            </div>

        </div>
    );
}