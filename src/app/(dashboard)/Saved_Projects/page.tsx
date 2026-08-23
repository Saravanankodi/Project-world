"use client";
import Projectcard from "@/components/Cards/Projectcard";
import { inter, geist } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import Filter from "@/components/icons/main/Filter";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getProjects } from "@/services/project";

const Saved_ProjectsPage = () => {

    const [cards, setCards] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadSavedProjects() {
            try {
                const user = auth.currentUser;
                if (!user) {
                    setLoading(false);
                    return;
                }
                // Get user document
                const userRef = doc(
                    db,
                    "users",
                    user.uid
                );
                const userSnap = await getDoc(userRef);
                if (!userSnap.exists()) {
                    setCards([]);
                    setLoading(false);
                    return;
                }
                const savedProjects =
                    userSnap.data().savedProjects || [];
                const savedIds =
                    savedProjects.map(
                        (item: any) => item.projectId
                    );
                // Get all projects
                const projectData =
                    await getProjects();
                // Filter saved projects
                const saved =
                    projectData.filter(
                        (project: any) =>
                            savedIds.includes(project.id)
                    );

                // Format for Projectcard
                const formatted =
                    saved.map((project: any) => ({

                        id: project.id,

                        image:
                            project.technicalDetails
                            ?.resources
                            ?.screenshots?.[0] ||
                            "/img/Image.png",
                        category:
                            project.projectInformation
                            ?.domain || "Unknown",
                        title:
                            project.projectInformation
                            ?.title || "Untitled Project",
                        description:
                            project.projectInformation
                            ?.description || "",
                        rating: 0,
                        author:
                            project.owner?.name ||
                            "Unknown",
                        authorAvatar:
                            project.owner?.profileImg ||
                            "/Topbar/ProfileImage.png",
                        price:
                            project.priceDetails
                            ?.basePrice || 0,
                        bookmarked: true
                    }));
                setCards(formatted);
            } catch (error) {
                console.log(
                    "Error loading saved projects:",
                    error
                );
            } finally {
                setLoading(false);
            }
        }
        loadSavedProjects();
    }, []);

    return (
        <div className="px-4 py-5">
            <div className="mb-2">
                <div className={`${geist.className} mb-1 text-3xl lg:text-[32px] font-bold text-[#006E2F]`}>
                    Saved Projects
                </div>
                <div className="md:flex items-center justify-between mb-2">
                    <div className={`${inter.className} mb-2 text-sm xl:text-base font-normal text-[#3D4A3D]`}>
                        Your collection of projects that inspire, interest, or help your journey.
                    </div>
                    <div>
                        <Button leftIcon={<Filter />} className={`md:px-6 md:py-3 px-3 py-2 bg-[#DCE5D9] text-sm text-[#161D16] ${geist.className}`}>
                            Filter Collection
                      </Button>
                    </div>
                </div>
            </div>
            {loading ? (
                <div></div>
            ) : cards.length > 0 ? (
                <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
                    <div className="flex w-max gap-3 md:gap-6 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
                        {cards.map((card) => (
                            <div key={card.id}className="w-60 shrink-0 md:w-auto">
                                <Projectcard {...card} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center mt-30">
                    <img
                        src="/Empty/AddFile.png"
                        alt="addfiles"
                    />
                    <span className={`text-[#565E74] ${geist.className} text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium`}>
                        No Saved Projects
                    </span>

                </div>

            )}

        </div>
    );
};

export default Saved_ProjectsPage;