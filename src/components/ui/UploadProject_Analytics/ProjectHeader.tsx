"use client";

import Image from "next/image";
import { Edit, GraduationCap, ExternalLink } from "lucide-react";
import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

interface ProjectHeaderProps {
    title: string;
    domain: string;
    status: "PUBLISHED" | "DRAFT";
    image: string;
    tags: string[];
    onEdit?: () => void;
    onMentorship?: () => void;
    onView?: () => void;
}

export default function ProjectHeader({
    title,
    domain,
    status,
    image,
    tags,
    onEdit,
    onMentorship,
    onView,
}: ProjectHeaderProps) {
    return (
        <div className="rounded-2xl sm:border sm:border-[#E2E8E0] bg-white  md:p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between bg-[#F3FCEF] sm:bg-white">

                {/* Left */}
                <div className="flex gap-2 sm:gap-4 rounded-2xl border border-[#E2E8E0] p-2 sm:border-none bg-white">

                    {/* Thumbnail */}
                    <div className="relative h-18 w-28 sm:h-24 sm:w-32 overflow-hidden rounded-lg border border-[#E5E7EB] shrink-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-between">

                        <div className="flex flex-wrap items-center gap-1 sm:gap-3">

                            <h2
                                className={`${geist.className} text-sm sm:text-base font-medium text-[#161D16]`}
                            >
                                {title}
                            </h2>

                            <span className={`${inter.className} rounded-full bg-[#E8F5E9] px-2 sm:px-3 py-1 text-[10px] sm:text-base font-medium text-[#006E2F]`}>
                                {status}
                            </span>

                        </div>

                        <p
                            className={`${inter.className}  text-xs sm:text-base text-[#667085] font-medium`}
                        >
                            Domain: {domain}
                        </p>

                        {/* Tags */}
                        <div className=" flex flex-wrap gap-2">

                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`${inter.className} rounded-md font-medium border border-[#D8E3D8] bg-[#F8FAF8] px-3 py-1 text-[10px] sm:text-xs text-[#3D4A3D]`}
                                >
                                    {tag}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Actions */}
                <div className=" flex items-center justify-evenly  flex-row-[1fr_2fr_1fr] gap-1 sm:gap-3 sm:bg-white">

                    <button
                        onClick={onEdit}
                        // leftIcon={<Edit size={16} />}
                        className={`${inter.className} bg-[#006E2F] text-white hover:bg-[#005424] text-[11px] sm:text-base flex items-center justify-center gap-1 p-2 rounded-lg  font-medium`}
                    >
                        <Edit size={16} />Edit Project
                    </button>

                    <button
                        onClick={onMentorship}
                        // leftIcon={<GraduationCap size={16} />}
                        className={`${inter.className} bg-[#565E74] text-white hover:bg-[#556070] text-[11px] sm:text-base flex items-center justify-center gap-1 p-2 rounded-lg  font-medium`}
                    >
                        <GraduationCap size={16} />Manage Mentorship
                    </button>

                    <button
                        onClick={onView}
                        // leftIcon={<ExternalLink size={16} />}
                        className={`${inter.className} border border-[#D0D5DD] bg-white text-[#161D16] hover:bg-[#F9FAFB]  text-[11px]  sm:text-base flex items-center justify-center gap-1 p-2 rounded-lg font-medium`}
                    >
                        <ExternalLink size={16} />View Page
                    </button>

                </div>

            </div>
        </div>
    );
}