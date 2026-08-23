"use client";

import { useEffect, useState } from "react";

import {
    Building2,
    CreditCard,
    Landmark,
    Lock,
    ShieldCheck,
    Unlock,
} from "lucide-react";

import Button from "@/components/Button/Button";
import Input from "@/components/ui/Upload_Project/FormInput";
import Dropdown from "@/components/ui/base/Dropdown";

import PurchaseSummaryCard from "@/components/ui/projects/PurchaseSummaryCard";
import PaymentDetails from "@/components/ui/projects/PaymentDetails";

import { geist, inter } from "@/lib/fonts";
import { useParams } from "next/navigation";
import { getProjectById, Project } from "@/services/project";
import { UserProfile } from "@/types/types";
import { getUserProfile } from "@/services/user";

type PaymentMethod = "card" | "upi" | "bank";

export default function ProjectPaymentPage() {
    const params = useParams();

    const projectId = params.id as string;

    const [project, setProject] = useState<Project | null>(null);
    const [owner, setOwner] = useState<UserProfile | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProject() {
            if (!projectId) return;

            try {
                setLoading(true);

                const projectData = await getProjectById(projectId);

                if (!projectData) {
                    setError("Project not found");
                    return;
                }

                setProject(projectData);

                // Fetch project owner
                const ownerData = await getUserProfile(projectData.ownerId);

                setOwner(ownerData);
            } catch (err) {
                console.error("Error fetching project:", err);
                setError("Failed to load project");
            } finally {
                setLoading(false);
            }
        }

        fetchProject();
    }, [projectId]);

    const projectPrice = project?.priceDetails.basePrice ?? 0;

    const discount =
        project?.priceDetails.discountEnabled
            ? project.priceDetails.discount
            : 0;

    const finalAmount = Math.max(projectPrice - discount + 10, 0);

    const OrderSummary = () => (
        <div className="rounded-2xl bg-[#EDF6EA] p-6">

            <h3
                className={`${geist.className} text-sm uppercase text-[#161D16] mb-6 font-semibold`}
            >
                ORDER SUMMARY
            </h3>

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span className={`${inter.className} text-xs text-[#3D4A3D]`}>
                        Project Price
                    </span>

                    <span className={`${inter.className} text-xs font-semibold text-[#161D16]`}>
                        ${projectPrice.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className={`${inter.className} text-xs text-[#3D4A3D]`}>
                        Platform Fee
                    </span>

                    <span className={`${inter.className} text-xs font-semibold text-[#161D16]`}>
                        $ 10
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className={`${inter.className} text-xs text-[#3D4A3D]`}>
                        Discount
                    </span>

                    <span className={`${inter.className} text-xs font-semibold text-[#006E2F]`}>
                        -${discount.toFixed(2)}
                    </span>
                </div>

                <div className="border-t pt-4 flex justify-between">

                    <span
                        className={`${inter.className} text-sm text-[#161D16] font-semibold`}
                    >
                        Final Amount
                    </span>

                    <span
                        className={`${inter.className} text-2xl font-semibold text-[#161D16]`}
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
                className="w-full  bg-[#22C55E] py-4 text-lg font-bold text-[#004B1E]"
                rightIcon={<Unlock className="ml-2 h-5 w-5" />}
            >
                <span className={` ${geist.className} text-[#004B1E] text-sm font-medium`}>
                    Pay & Unlock Project
                </span>

            </Button>

            <p
                className={`${inter.className} flex  items-center justify-center gap-2 text-xs text-[#004B1E] font-medium`}
            >
                <ShieldCheck
                    className="h-4 w-4 text-[#027A48]"
                    fill="#027A48"
                    stroke="white"
                />
                <span>SSL Secure Transaction</span>
            </p>

        </div>

    );

    // const CardPaymentForm = () => (
    //     <div className="space-y-2 sm:space-y-5 ">

    //         <Input
    //             label="Card Number"
    //             placeholder="XXXX XXXX XXXX XXXX"
    //             className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"
    //         />

    //         <div className="grid grid-cols-2 gap-4">

    //             <Input
    //                 label="Expiry Date"
    //                 placeholder="MM / YY"
    //                 className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"

    //             />

    //             <Input
    //                 label="CVV"
    //                 placeholder="•••"
    //                 type="password"
    //                 className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"

    //             />

    //         </div>

    //     </div>
    // );

    // const UpiPaymentForm = () => (
    //     <div className="space-y-2 sm:space-y-5 ">

    //         <Input
    //             label="UPI ID"
    //             placeholder="example@upi"
    //             className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"

    //         />

    //         <div className="grid grid-cols-2 gap-4">

    //             <Dropdown
    //                 name="Select UPI App"
    //                 option={upiOptions}
    //                 value={upiApp}
    //                 onChange={setUpiApp}
    //             />

    //             <Input
    //                 label="Verify UPI ID"
    //                 placeholder="Verified"
    //                 readOnly
    //                 className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"

    //             />

    //         </div>

    //     </div>
    // );

    // const NetBankingForm = () => (
    //     <div className="space-y-2 sm:space-y-5 ">

    //         <Dropdown
    //             name="Choose your Bank"
    //             option={bankOptions}
    //             value={bank}
    //             onChange={setBank}
    //         />

    //         <div className="grid grid-cols-2 gap-4">

    //             <Input
    //                 label="User ID"
    //                 placeholder="Enter User ID"
    //                 className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"

    //             />

    //             <Input
    //                 label="Password"
    //                 type="password"
    //                 placeholder="********"
    //                 className="bg-[#F3FCEF] border border-[#BCCBB9] text-sm text-[#6B7280]"

    //             />

    //         </div>

    //     </div>
    // );

    // const renderPaymentForm = () => {
    //     switch (paymentMethod) {
    //         case "upi":
    //             return <UpiPaymentForm />;

    //         case "bank":
    //             return <NetBankingForm />;

    //         default:
    //             return <CardPaymentForm />;
    //     }
    // };

    if (loading) {
        return (
            <div className="flex min-h-100 items-center justify-center">
                <p className={`${inter.className} text-sm text-[#3D4A3D]`}>
                    Loading project...
                </p>
            </div>
        );
    }
    return (
        <div className="mx-auto w-full max-w-7xl space-y-3 sm:space-y-6 px-4 py-6 lg:px-8">


            {/* Layout */}

            <div className="grid gap-3 sm:gap-8 xl:grid-cols-[1.5fr_2fr]">

                {/* Left */}

                <div className="space-y-3 sm:space-y-6">

                    <PurchaseSummaryCard
                        image={
                            project?.technicalDetails.resources.screenshots?.[0] ||
                            "/preview/preview-2.jpg"
                        }

                        userimage={
                            owner?.profileImg ||
                            "/preview/preview-2.jpg"
                        }

                        title={project?.projectInformation.title || ""}

                        category={project?.projectInformation.domain || ""}

                        rating={4.9}

                        reviews={124}

                        creator={owner?.name || "Unknown Creator"}

                        creatorRole={
                            owner?.userType === "professional"
                                ? "Professional"
                                : "Student"
                        }

                        projectPrice={projectPrice}

                        platformFee={10}
                    />

                </div>

                {/* Right */}

                <div className="rounded-2xl border border-[#D8E3D3] bg-white p-3 sm:p-6 shadow-sm">

                    <h2
                        className={`${geist.className} text-sm font-semibold text-[#161D16]`}
                    >
                        Payment Details
                    </h2>


                    {/* Tabs */}

                    {/* <div className="mt-3 sm:mt-8 grid grid-cols-3 gap-3">

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
                                    className={` flex flex-col items-center justify-center rounded-xl border py-4 transition

                                    ${active
                                            ? "border-[#22C55E] bg-[#006E2F0D]"
                                            : "border-[#BCCBB9] hover:border-[#22C55E]"
                                        }
                                `}
                                >

                                    <Icon
                                        size={22}
                                        className={
                                            active
                                                ? "text-[#006E2F]"
                                                : "text-[#3D4A3D]"
                                        }
                                    />

                                    <span
                                        className={`${inter.className} mt-1 sm:mt-2 text-xs sm:text-sm font-medium
                                         ${active
                                                ? "text-[#006E2F]"
                                                : "text-[#3D4A3D]"
                                            }
                                        `}
                                    >
                                        {tab.label}
                                    </span>

                                </button>

                            );

                        })}

                    </div> */}

                    {/* Dynamic Form */}

                    {/* <div className="mt-3 sm:mt-8">

                        {renderPaymentForm()}

                    </div> */}

                    {/* Summary */}

                    <div className="mt-3 sm:mt-8 space-y-3">

                        <OrderSummary />
                        <PaymentDetails />
                    </div>
                    {/* Button */}

                    <div className="mt-3 sm:mt-8">

                        <PayButton />

                    </div>

                </div>

            </div>

        </div>
    );
}