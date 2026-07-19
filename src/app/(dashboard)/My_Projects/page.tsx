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

