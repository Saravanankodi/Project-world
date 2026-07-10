"use client";
import Button from "@/components/Button/Button";
import StatsCard from "@/components/Cards/StatsCard";
import ProjectTable from "@/components/Tables/ProjectTable";
import { geist, inter } from "@/lib/fonts";
import { Project } from "@/types/types"
import { useState } from "react";
import { Plus,Star } from "lucide-react";
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
    {
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
        <div className="space-y-8 px-8 py-5">

            <div className="mb-2">
                <div className={`${geist.className} mb-1 text-2xl lg:text-[32px] font-bold text-[#006E2F]`}>My Projects</div>
                <div className="md:flex items-center justify-between mb-2">
                    <div className={`${inter.className} mb-2 text-sm xl:text-base font-normal text-[#3D4A3D]`}>Manage, update, and track your uploaded projects.</div>
                    <div><Button
                    onClick={() => router.push("/My_Projects/Upload_Projects")}
                        leftIcon={<Plus className="h-5 w-5" />}
                        className={`md:px-6 md:py-3 px-3 py-2  bg-[#22C55E] text-xs sm:text-sm text-[#004B1E] font-bold ${geist.className} my-4`}
                    >
                        Upload New Project
                    </Button></div>
                </div>
            </div>


             <div className="grid gap-5 grid-cols-2 xl:grid-cols-4">
            
                      <StatsCard
                        title="Total Revenue"
                       className="border-[#E5E7EB] bg-white" value="$12,480.00"
                        badge="+28%"
                      />
            
                      <StatsCard
                        title="Active Projects"
                       className="border-[#E5E7EB] bg-white" value="24"
                      />
            
                      <StatsCard
                        title="Total Likes"
                       className="border-[#E5E7EB] bg-white" value="1,842"
                      />
            
                      <StatsCard
                        title="Marketplace Rank"
                       className="border-[#E5E7EB] bg-white" value="#14"
                        valueColor="text-[#D92D20]"
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

