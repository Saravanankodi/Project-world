"use client";

import Button from "@/components/Button/Button";
import { MyPurchasesIcon, SaveProjectsIcon } from "@/components/icons/Sidebar";
import { ProjectInfoProps } from "@/types/types";
import { MessageSquareMore, Star } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const ProjectsInfo = ({
    tittle,
    categories,
    avgRatings,
    reviewCount,
    purchasesCount,
    tagList,
    price,
    discount,
}: ProjectInfoProps) => {
    const router = useRouter();
    const path = usePathname();

    return (
        <section className="w-full  rounded-2xl border border-[#E3E8E2] bg-white p-5 shadow-sm space-y-7">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex-1">

                    <h2 className="text-[28px] font-semibold leading-8 text-[#161D16]">
                        {tittle}
                    </h2>

                    <span className="mt-3 inline-flex rounded-full bg-[#EDF7EE] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#027A48]">
                        {categories}
                    </span>

                </div>

                <div className="text-right">

                    <p className="text-xl font-bold text-[#027A48]">
                        {discount}
                    </p>

                    <p className="text-sm text-[#667085] line-through">
                        {price}
                    </p>

                </div>

            </div>

            {/* Rating */}

            <div className="mt-5 flex items-center gap-4 text-sm">

                <div className=" flex items-center  gap-1">

                    <Star
                        size={16}
                        fill="#FACC15"
                        className="text-[#FACC15]"
                    />

                    <span className="font-semibold text-[#161D16]">
                        {avgRatings}
                    </span>

                    <span className="text-[#667085]">
                        ({reviewCount} reviews)
                    </span>

                </div>

                <div className="h-4 w-px bg-[#D0D5DD]" />

                <div className=" flex items-center gap-2">

                    <MyPurchasesIcon />

                    <span className="text-[#344054]">
                        {purchasesCount} purchases
                    </span>

                </div>

            </div>

            {/* Tags */}

            <div className="mt-5 flex flex-wrap gap-2">

                {tagList.map((tag, index) => (
                    <span
                        key={index}
                        className="rounded-full border border-[#E3ECE4] bg-[#F5FBF5] px-3 py-1 text-[11px] font-medium text-[#3D4A3D]"
                    >
                        {tag}
                    </span>
                ))}

            </div>

            {/* Buttons */}

            <div className="mt-8 space-y-7">

                <Button
                    className="h-12 w-full rounded-xl bg-[#22C55E] text-sm font-semibold text-white hover:bg-[#16A34A]"
                    onClick={()=>(router.push(`${path}/Project_Payment`))}
                >
                    Buy Now
                </Button>

                <div className="grid grid-cols-2 gap-3">

                    <Button
                        className="h-11 rounded-xl border border-[#22C55E] bg-white text-sm font-medium text-[#027A48]"
                        leftIcon={<SaveProjectsIcon />}
                    >
                        Save Project
                    </Button>

                    <Button
                        className="h-11 rounded-xl border border-[#D0D5DD] bg-white text-sm font-medium text-[#344054]"
                        leftIcon={<MessageSquareMore size={16} />}
                    >
                        Chat Creator
                    </Button>

                </div>

            </div>

        </section>
    );
};

export default ProjectsInfo;