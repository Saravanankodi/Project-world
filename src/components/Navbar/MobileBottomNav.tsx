"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import DashboardIcon from "@/components/icons/Sidebar/DashboardIcon";
import ExploreIcon from "@/components/icons/Sidebar/ExploreIcon";
import SavedProjectsIcon from "@/components/icons/Sidebar/SaveProjectsIcon";
import ProjectsIcon from "@/components/icons/Sidebar/MyProjectsIcon";
import ProfileIcon from "@/components/icons/Sidebar/ProfileIcon";

import { geist } from "@/lib/fonts";

const navItems = [
    {
        label: "Home",
        href: "/",
        icon: DashboardIcon,
    },
    {
        label: "Explore",
        href: "/Explore",
        icon: ExploreIcon,
    },
    {
        label: "Saved",
        href: "/Saved_Projects",
        icon: SavedProjectsIcon,
    },
    {
        label: "Projects",
        href: "/My_Projects",
        icon: ProjectsIcon,
    },
    {
        label: "Profile",
        href: "/Profile",
        icon: ProfileIcon,
    },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <div className=" border-t border-[#E5E7EB] bg-white md:hidden">
            <div className="flex items-center justify-around  px-2 py-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center"
                        >
                            <div
                                className={` w-14 h-auto flex flex-col gap-1 items-center justify-center rounded-xl  transition-all px-6 py-1 ${active
                                    ? "bg-[#22C55E] text-white"
                                    : "text-[#667085]"
                                    }`}
                            >
                                <Icon viewBox="0 0 17 17" width={20} height={20} /> 
                                <span
                                    className={`${geist.className} text-xs font-medium `}
                                >
                                    {item.label}
                                </span>
                            </div>

                        </Link>
                    );
                })}
            </div>
        </div>
    );
}