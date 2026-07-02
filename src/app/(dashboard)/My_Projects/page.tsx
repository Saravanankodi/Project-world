"use client";
import Button from "@/components/Button/Button";
import StatsCard from "@/components/Cards/StatsCard";
import ProjectTable from "@/components/Tables/ProjectTable";
import { geist, inter } from "@/lib/fonts";
import { Project } from "@/types/types"
import { useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import ProjectBanner from "@/components/Cards/ProjectBanner";


const projects: Project[] = [
    {
        id: 1,
        image: "/Velo.png",
        title: "Velo Finance CRM",
        website: "velofinance.io",
        technologies: ["React", "Tailwind CSS"],
        uploadDate: "Oct 12, 2023",
        status: "marketplace",
        metrics: {
            sales: 412,
            revenue: "$4.2k",
        },
    },
    {
        id: 2,
        image: "/Velo.png",
        title: "Portfolio Builder",
        website: "portfolio.io",
        technologies: ["Next.js", "Prisma"],
        uploadDate: "Nov 03, 2023",
        status: "review",
        metrics: {
            views: "1.2k",
            likes: 88,
        },
    },
    {
        id: 3,
        image: "/Velo.png",
        title: "AI Resume Builder",
        website: "resume.ai",
        technologies: ["React", "OpenAI"],
        uploadDate: "Jan 15, 2024",
        status: "draft",
        metrics: {
            progress: 65,
        },
    },
    {
        id: 4,
        image: "/Velo.png",
        title: "Velo Finance CRM",
        website: "velofinance.io",
        technologies: ["React", "Tailwind CSS"],
        uploadDate: "Oct 12, 2023",
        status: "marketplace",
        metrics: {
            sales: 412,
            revenue: "$4.2k",
        },
    },
    {
        id: 5,
        image: "/Velo.png",
        title: "Portfolio Builder",
        website: "portfolio.io",
        technologies: ["Next.js", "Prisma"],
        uploadDate: "Nov 03, 2023",
        status: "review",
        metrics: {
            views: "1.2k",
            likes: 88,
        },
    },
    {
        id: 6,
        image: "/Velo.png",
        title: "AI Resume Builder",
        website: "resume.ai",
        technologies: ["React", "OpenAI"],
        uploadDate: "Jan 15, 2024",
        status: "draft",
        metrics: {
            progress: 65,
        },
    },
    {
        id: 7,
        image: "/Velo.png",
        title: "Velo Finance CRM",
        website: "velofinance.io",
        technologies: ["React", "Tailwind CSS"],
        uploadDate: "Oct 12, 2023",
        status: "marketplace",
        metrics: {
            sales: 412,
            revenue: "$4.2k",
        },
    },
    {
        id: 8,
        image: "/Velo.png",
        title: "Portfolio Builder",
        website: "portfolio.io",
        technologies: ["Next.js", "Prisma"],
        uploadDate: "Nov 03, 2023",
        status: "review",
        metrics: {
            views: "1.2k",
            likes: 88,
        },
    },
    {
        id: 9,
        image: "/Velo.png",
        title: "AI Resume Builder",
        website: "resume.ai",
        technologies: ["React", "OpenAI"],
        uploadDate: "Jan 15, 2024",
        status: "draft",
        metrics: {
            progress: 65,
        },
    },
];


const My_ProjectsPage = () => {
    const rowsPerPage = 3;

    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(projects.length / rowsPerPage);

    const currentProjects = projects.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );
const router = useRouter();

    return (
        <div className="space-y-8">

            <div className="mb-2">
                <div className={`${geist.className} mb-1 text-3xl lg:text-[32px] font-bold text-[#006E2F]`}>My Projects</div>
                <div className="md:flex items-center justify-between mb-2">
                    <div className={`${inter.className} mb-2 text-sm xl:text-base font-normal text-[#3D4A3D]`}>Manage, update, and track your uploaded projects.</div>
                    <div><Button
                    onClick={() => router.push("/My_Projects/Upload_Projects")}
                        leftIcon={<Plus />}
                        className={`md:px-6 md:py-3 px-3 py-2  bg-[#22C55E] text-sm text-[#004B1E] font-bold ${geist.className} `}
                    >
                        Upload New Project
                    </Button></div>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    title="Total Revenue"
                    value="$12,480.00"
                    badge="+12%"
                    valueColor="text-[#006E2F] "
                />

                <StatsCard
                    title="Active Projects"
                    value="24"
                />

                <StatsCard
                    title="Total Likes"
                    value="1,842"
                />

                <StatsCard
                    title="Marketplace Rank"
                    value="#14"
                    valueColor="text-[#9E4036]"
                />
            </div>
            
            <div className="">
                <ProjectTable
                    projects={currentProjects}
                    page={page}
                    totalPages={totalPages}
                    totalItems={projects.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={setPage}
                />
            </div>

            <div>
                <ProjectBanner/>
            </div>
           
        </div>
    )
}

export default My_ProjectsPage

