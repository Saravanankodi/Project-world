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
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E7EB] bg-white lg:hidden">
            <div className="flex items-center justify-around px-2 py-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center gap-1"
                        >
                            <div
                                className={`w-12 h-12 py-2 grid grid-col-5 gap-2 place-items-center rounded-xl  transition-all ${active
                                    ? "bg-[#22C55E] text-white"
                                    : "text-[#667085]"
                                    }`}
                            >
                                <Icon />
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