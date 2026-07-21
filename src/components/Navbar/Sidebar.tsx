"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { inter, geist } from "@/lib/fonts";
// Import your TSX icons
import DashboardIcon from "@/components/icons/Sidebar/DashboardIcon";
import ExploreIcon from "@/components/icons/Sidebar/ExploreIcon";
import SavedProjectsIcon from "@/components/icons/Sidebar/SaveProjectsIcon";
import PurchasesIcon from "@/components/icons/Sidebar/MyPurchasesIcon";
import ProjectsIcon from "@/components/icons/Sidebar/MyProjectsIcon";
import ChatIcon from "@/components/icons/Sidebar/ChatIcon";
import AnalyticsIcon from "@/components/icons/Sidebar/AnalyticsIcon";
import ProfileIcon from "@/components/icons/Sidebar/ProfileIcon";
import SettingsIcon from "@/components/icons/Sidebar/SettingsIcon";
import { Wallet } from "lucide-react";

const menu = [
    {
        title: "MENU",
        items: [
            {
                name: "Dashboard",
                href: "/",
                icon: DashboardIcon,
            },
            {
                name: "Explore",
                href: "/Explore",
                icon: ExploreIcon,
            },
            {
                name: "Saved Projects",
                href: "/Saved_Projects",
                icon: SavedProjectsIcon,
            },
            {
                name: "My Purchases",
                href: "/My_Purchases",
                icon: PurchasesIcon,
            },
            {
                name: "My Projects",
                href: "/My_Projects",
                icon: ProjectsIcon,
            },
            {
                name: "Chat",
                href: "/Chat",
                icon: ChatIcon,
            },
            {
                name: "Issues",
                href: "/Issues",
                icon: ChatIcon,
            },
        ],
    },
    {
        title: "INSIGHTS",
        items: [
            {
                name: "Analytics",
                href: "/Analytics",
                icon: AnalyticsIcon,
            },
            {
                name: "Payment Details",
                href: "/Payment_Details",
                icon: Wallet,
            },
        ],
    },
    {
        title: "ACCOUNT",
        items: [
            {
                name: "Profile",
                href: "/Profile",
                icon: ProfileIcon,
            },
            {
                name: "Settings",
                href: "/Settings",
                icon: SettingsIcon,
            },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className=" sticky top-0 left-0 max-w-64 bg-white  shrink-0">
            <div className="h-full px-3 py-2">
                {menu.map((section) => (
                    <div key={section.title} className="mb-4">
                        <p className={`mb-3 text-xs font-semibold  text-[#565E7499] ${inter.className}`}>
                            {section.title}
                        </p>

                        <div>
                            {section.items.map((item) => {
                                const Icon = item.icon;
                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center   gap-3 rounded-xl px-3 py-2 transition-all
                                           ${active
                                            ? "bg-[#22C55E1A] text-[#006E2F]"
                                            : "text-[#565E74] hover:bg-gray-100"
                                            }`}
                                    >
                                        <Icon  width={17} height={17} />                                      
                                        <span
                                            className={`${geist.className}  text-sm  p-1 ${active ? "font-bold" : "font-medium"
                                                }`}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}