"use client";
import Projectcard from "@/components/Cards/Projectcard";
import { inter } from "@/lib/fonts"
import { getProjects, Project } from "@/services/project";
import { getUsers } from "@/services/user";
import { useEffect, useState } from "react";
const ExplorePage = () => {

   const [projects, setProjects] = useState<any[]>([]);

useEffect(() => {
  async function loadData() {
    const projectData = await getProjects();
    const userData = await getUsers();

    // Create lookup map
    const userMap = new Map(
      userData.map((user) => [user.id, user])
    );

    const projectsWithUsers = projectData.map((project) => ({
      ...project,
      owner: userMap.get(project.ownerId),
    }));

    setProjects(projectsWithUsers);
  }

  loadData();
}, []);
   const cards = projects.map((project) => ({
  id: project.id,
  image:
        project.technicalDetails.resources.screenshots?.[0] ||
        "/img/Image.png",
  category: project.projectInformation.domain,
  title: project.projectInformation.title,
  description: project.projectInformation.description,
  rating: 0,
  author: project.owner?.name ?? "Unknown",
  authorAvatar: project.owner?.profileImg ?? "/Topbar/ProfileImage.jpg",
  price: project.priceDetails.basePrice,
  bookmarked: false,
}));

    return (
        <div className="px-4 py-5">
            <div className=" flex flex-col gap-2 md:gap-0 md:flex-row md:items-end md:justify-between mb-5 ">
                <div>
                    <div className={`${inter.className} mb-2 text-3xl lg:text-[32px] font-semibold text-[#006E2F]`}>Explore Projects</div>
                    <div className={`${inter.className} text-sm xl:text-base font-normal text-[#565E74]`}>Discover verified projects created by students and professionals.</div>
                </div>
                <p className={`${inter.className} text-sm font-normal text-[#3D4A3D]`}>Showing {projects.length} projects</p>
            </div>
            <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                <div className="flex gap-3 md:gap-x-3 md:gap-y-6 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card) => (
                            <div
                             key={card.id}
                             className="w-60 shrink-0 md:w-auto">
                                <Projectcard {...card} />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExplorePage