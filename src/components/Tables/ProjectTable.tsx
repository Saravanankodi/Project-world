
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
import { ProjectTableProps, Project } from "@/types/types";
import TableTabs from "./TableTabs";
import Pagination from "./Pagination";


export default function ProjectTable({
    projects,
    page,
    totalPages,
    totalItems,
    rowsPerPage,
    onPageChange,
}: ProjectTableProps) {

    const renderMetrics = (project: Project) => {
        switch (project.status) {

            case "marketplace":
                return (
                    <div className="flex gap-12">
                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                SALES
                            </p>

                            <h3 className={`${inter.className} text-base font-bold text-[#161D16]`}>
                                {project.metrics.sales}
                            </h3>
                        </div>

                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                REVENUE
                            </p>

                            <h3 className={`${inter.className} text-base font-bold text-[#006E2F]`}>
                                {project.metrics.revenue}
                            </h3>
                        </div>
                    </div>
                );

            case "review":
                return (
                    <div className="flex gap-12">
                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                VIEWS
                            </p>

                            <h3 className={`${inter.className} text-base font-bold text-[#161D16]`}>
                                {project.metrics.views}
                            </h3>
                        </div>

                        <div>
                            <p className={`${inter.className} text-[10px] uppercase tracking-wider text-[#3D4A3D]`}>
                                LIKES
                            </p>

                            <h3 className={`${inter.className} text-base font-bold text-[#161D16]`}>
                                {project.metrics.likes}
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
                            {project.metrics.progress}%
                        </h3>
                    </div>
                );
        }
    };
    const renderActions = (project: Project) => {
        if (project.status === "draft") {
            return (
                <div className="flex items-center justify-end gap-3">
                    <button className="rounded-xl bg-[#E2EBDE] border border-[#BCCBB94D] px-4 py-2 text-sm font-medium text-[#161D16] hover:bg-[#006E2F]">
                        Finish Draft
                    </button>

                    <button className="rounded-lg p-2 hover:bg-red-50">
                        <Trash2 className="h-5 w-5 text-red-500" />
                    </button>
                </div>
            );
        }

        return (
            <div className="flex items-center justify-end gap-2">
                <button className="rounded-lg p-2 hover:bg-gray-100">
                    <Edit3 className="h-5 w-5 text-[#565E74]" />
                </button>

                <button className="rounded-lg p-2 hover:bg-gray-100">
                    <ChartColumn className="h-5 w-5 text-[#565E74]" />
                </button>

                <button className="rounded-lg p-2 hover:bg-gray-100">
                    <Eye className="h-5 w-5 text-[#565E74]" />
                </button>

                <button className="rounded-lg p-2 hover:bg-red-50">
                    <Trash2 className="h-5 w-5 text-red-500" />
                </button>
            </div>
        );
    };

    return (
        <>
            {/* Mobile */}
            <div className="md:hidden flex min-h-[420px] items-center justify-center rounded-3xl border border-[#E5E7EB] bg-white">
                <div className="text-center">
                    <h2
                        className={`${geist.className} text-2xl font-bold text-[#161D16]`}
                    >
                        Desktop View Required
                    </h2>

                    <p
                        className={`${inter.className} mt-3 max-w-sm text-[#565E74]`}
                    >
                        Project management is available only on larger screens.
                    </p>
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
                <div className="grid grid-cols-[3fr_1fr_1.2fr_2fr_1.5fr]  border-b border-[#BCCBB9] px-8 py-5">

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
                        Metrics
                    </h3>

                    <h3 className={`text-right text-xs font-semibold uppercase tracking-wider  text-[#3D4A3D] ${geist.className}`}>
                        Actions
                    </h3>
                </div>

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="grid grid-cols-[3fr_1fr_1.2fr_2fr_1.5fr] items-center border-b px-8 py-2 transition hover:bg-[#FAFAFA]"
                    >
                        {/* Project */}
                        <div className="flex items-center gap-4">

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={72}
                                height={72}
                                className="rounded-xl object-cover"
                            />

                            <div>
                                <h3
                                    className={`${inter.className} text-base font-semibold text-[#161D16]`}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className={`${inter.className} mt-1 text-xs text-[#3D4A3D]`}
                                >
                                    {project.website}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={` ${inter.className} rounded-full bg-[#F2F4F7] px-3 py-1 text-[10px] font-medium text-[#3D4A3D]`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Upload Date */}
                        <div>
                            <p className={` ${inter.className} text-base font-medium text-[#161D16]`}>
                                {project.uploadDate}
                            </p>
                        </div>

                        {/* Status */}
                        <div>
                            <StatusBadge status={project.status} />
                        </div>

                        {/* Metrics */}
                        <div>
                            {renderMetrics(project)}
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