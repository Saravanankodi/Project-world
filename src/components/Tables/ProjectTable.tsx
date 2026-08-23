
"use client";

import Image from "next/image";
import {
    Edit3,
    Eye,
    Trash2,
    ChartColumn,
} from "lucide-react";

import { geist, inter } from "@/lib/fonts";
import StatusBadge from "./StatusBadge";
import { ProjectTableProps } from "@/types/types";
import TableTabs from "./TableTabs";
import Pagination from "./Pagination";
import { useRouter } from "next/navigation";
import type { Project } from "@/types/project";


export default function ProjectTable({
    projects,
    page,
    totalPages,
    totalItems,
    rowsPerPage,
    onPageChange,
}: ProjectTableProps) {

    const router = useRouter();
    const renderMetrics = (project: Project) => {
        switch (project.status) {

            case "published":
            case "published":
                return (
                    <div className="flex md:flex-col xl:flex-row md:gap-4 xl:gap-12 ">
                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                SALES
                            </p>

                            <h3 className={`${inter.className} text-base font-bold text-[#161D16]`}>
                                {project.priceDetails.basePrice}
                            </h3>
                        </div>

                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                REVENUE
                            </p>

                            <h3 className={`${inter.className} text-base font-bold text-[#006E2F]`}>
                                {project.priceDetails.basePrice * 10}
                            </h3>
                        </div>
                    </div>
                );

            case "pending":
                return (
                    <div className="flex md:flex-col xl:flex-row md:gap-4 xl:gap-12 ">
                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                VIEWS
                            </p>

                             <h3 className={`${inter.className} text-base font-bold text-[#161D16]`}>
                                 
                             </h3>
                         </div>

                         <div>
                             <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                 LIKES
                             </p>

                             <h3 className={`${inter.className} text-base font-bold text-[#161D16]`}>
                                 
                             </h3>
                         </div>
                     </div>
                 );

            case "draft":
                return (
                    <div >
                        <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                            PROGRESS
                        </p>

                        <h3 className={`${inter.className} text-base font-bold  text-[#161D16]`}>
                            {project.priceDetails.discount}%
                        </h3>
                    </div>
                );
        }
    };
    const renderActions = (project: Project) => {
        if (project.status === "draft") {
            return (
                <div className="flex items-center justify-end xl:gap-3">
                    <button className="rounded-xl bg-[#E2EBDE] border border-[#BCCBB94D] px-4 py-2 md:text-[10px] xl:text-sm font-medium text-[#161D16] hover:bg-[#006E2F]">
                        Finish Draft
                    </button>

                    <button className="rounded-lg p-2 hover:bg-red-50">
                        <Trash2 className="h-5 w-5 text-[#565E74]" />
                    </button>
                </div>
            );
        }

        return (
            <div className="flex items-center justify-end xl:gap-2">
                <button className="rounded-lg p-2 hover:bg-gray-100"
                 onClick={() => router.push(`/My_Projects/Upload_Projects?id=${project.id}`)}>
                    <Edit3 className="h-5 w-5 text-[#565E74]" />
                    
                </button>

                <button 
                    className="rounded-lg p-2 hover:bg-gray-100 hidden lg:block"
                    onClick={()=>(router.push('My_Projects/Upload_Projects/UploadProject_Analytics'))}>
                    <ChartColumn className="h-5 w-5 text-[#565E74]" />
                </button>

                <button 
                    className="rounded-lg p-2 hover:bg-gray-100 hidden lg:block"
                    onClick={()=>(router.push('My_Projects/Upload_Projects/UploadProject_Analytics'))}>
                    <Eye className="h-5 w-5 text-[#565E74]" />
                </button>

                <button className="rounded-lg p-2 hover:bg-red-50">
                    <Trash2 className="h-5 w-5 text-[#565E74]" />
                </button>
            </div>
        );
    };

    return (
        <>
            {/* Mobile */}
            <div className="md:hidden flex min-h-38.25 items-center justify-center rounded-3xl border border-[#E5E7EB] bg-white p-4 shadow">
                <div className="text-center">
                    <h2
                        className={`${geist.className} text-xs font-normal text-[#3D4A3D]`}
                    >
                        Only in Desktop view 
                    </h2>

                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white">
                <div className=" hidden md:block">
                    <TableTabs
                        tabs={[
                            {
                                id: "all",
                                label: "All Projects",
                                count: 32,
                            },
                            {
                                id: "published",
                                label: "Published",
                                count: 24,
                            },
                            {
                                id: "review",
                                label: "Under Review",
                                count: 3,
                            },
                            {
                                id: "draft",
                                label: "Draft",
                                count: 5,
                            },
                        ]}
                        onChange={(tab) => console.log(tab)}
                    />
                </div >
                {/* Header */}
                <div className="grid xl:grid-cols-[3fr_1fr_1.2fr_2fr_1.5fr] lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_2fr_1fr_1fr] items-center justify-center text-center border-b border-[#BCCBB9] px-8 py-5">

                    <h3 className={`text-xs font-semibold uppercase tracking-wider  text-[#3D4A3D] ${geist.className}`}>
                        Project
                    </h3>

                    <h3 className={`text-xs font-semibold uppercase tracking-wider  text-[#3D4A3D] ${geist.className}`}>
                        Upload Date
                    </h3>

                    <h3 className={`text-xs font-semibold uppercase tracking-wider  text-[#3D4A3D] ${geist.className}`}>
                        Status
                    </h3>

                    <h3 className={`text-xs font-semibold uppercase tracking-wider  text-[#3D4A3D] ${geist.className}`}>
                        Domain
                    </h3>

                    <h3 className={`text-right text-xs font-semibold uppercase tracking-wider  text-[#3D4A3D] ${geist.className}`}>
                        Actions
                    </h3>
                </div>

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="grid xl:grid-cols-[3fr_1fr_1.2fr_2fr_1.5fr] lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_2fr_1fr_1fr] items-center justify-center text-center border-b border-[#BCCBB9] md:px-4 xl:px-8 py-2 transition hover:bg-[#FAFAFA]"
                    >
                        {/* Project */}
                        <div className="flex items-center gap-4">

                            <Image
                                src={
                                    project.technicalDetails?.resources?.screenshots?.[0] ||
                                    "/images/placeholder.png"
                                }
                                alt={project.projectInformation.title}
                                width={72}
                                height={72}
                                className="rounded-xl object-cover"
                            />

                            <div>
                                <h3
                                    className={`${inter.className} md:text-sm xl:text-base font-semibold text-[#161D16]`}
                                >
                                    {project.projectInformation?.title || "Untitled Project"}
                                </h3>

                                <p
                                    className={`${inter.className} mt-1 md:text-[10px] xl:text-xs text-[#3D4A3D]`}
                                >
                                    {project.status}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.projectInformation?.technology?.map(
                                        (tech: string) => (
                                            <span
                                                key={tech}
                                                className={`${inter.className} rounded-full bg-[#F2F4F7] px-3 py-1 xl:text-[10px] md:text-[8px] font-medium text-[#3D4A3D]`}
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Upload Date */}
                        <div>
                            <p className={` ${inter.className} md:text-sm xl:text-base font-medium text-[#161D16]`}>
                                {project.projectInformation?.domain || "-"}
                            </p>
                        </div>

                        {/* Status */}
                        <div>
                            <StatusBadge status={project.status} />
                        </div>

                        {/* Metrics */}
                        <div>
                            {project.projectInformation.domain}
                        </div>

                        {/* Actions */}
                        <div>
                            {renderActions(project)}
                        </div>

                    </div>
                ))}

                <div className=" hidden md:block">
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        totalItems={totalItems}
                        rowsPerPage={rowsPerPage}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
            

        </>
    );
}