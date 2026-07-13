"use client";

import {
    BadgeCheck,
    BookOpen,
    CheckCircle2,
    Download,
    ExternalLink,
    FolderCode,
    PlayCircle,
    Rocket,
} from "lucide-react";

import Button from "@/components/Button/Button";
import PurchasedProjectCard from "@/components/ui/projects/PurchasedProjectCard";

import { geist, inter } from "@/lib/fonts";

const assets = [
    {
        icon: FolderCode,
        title: "Source Code",
        description:
            "Download latest project repository in .ZIP format",
        action: "Download ZIP",
        color: "text-[#027A48]",
        actionIcon: Download,
    },
    {
        icon: BookOpen,
        title: "Documentation",
        description:
            "Setup guides and implementation details",
        action: "View PDF",
        color: "text-[#344054]",
        actionIcon: ExternalLink,
    },
    {
        icon: PlayCircle,
        title: "Walkthrough",
        description:
            "15-minute guided video tutorial",
        action: "Watch Video",
        color: "text-[#B42318]",
        actionIcon: ExternalLink,
    },
    {
        icon: Rocket,
        title: "Live Demo",
        description:
            "Access the hosted production environment",
        action: "Visit Site",
        color: "text-[#027A48]",
        actionIcon: ExternalLink,
    },
];
const UnlockHeader = () => (
    <header className="flex flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#DDF5E5]">

            <CheckCircle2
                size={48}
                className="text-[#027A48]"
            />

        </div>

        <h1
            className={`${geist.className} mt-6 text-3xl font-bold text-[#161D16] lg:text-5xl`}
        >
            Project Unlocked Successfully!
        </h1>

        <p
            className={`${inter.className} mt-4 max-w-2xl text-[#667085]`}
        >
            Payment confirmed. You now have full lifetime access to all
            associated project resources and future updates.
        </p>

    </header>
);
const AssetCard = ({
    icon: Icon,
    title,
    description,
    action,
    color,
    actionIcon: ActionIcon,
}: any) => (
    <div className="rounded-2xl border border-[#E4ECE3] bg-white p-6 shadow-sm transition hover:shadow-md">

        <div className="flex gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFDF3]">

                <Icon
                    className="text-[#027A48]"
                    size={22}
                />

            </div>

            <div className="flex-1">

                <h3
                    className={`${geist.className} font-semibold text-[#161D16]`}
                >
                    {title}
                </h3>

                <p
                    className={`${inter.className} mt-1 text-sm text-[#667085]`}
                >
                    {description}
                </p>

                <button
                    className={`mt-5 flex items-center gap-2 text-sm font-semibold ${color}`}
                >
                    {action}

                    <ActionIcon size={15} />
                </button>

            </div>

        </div>

    </div>
);
const TransactionCard = () => (
    <div className="rounded-2xl bg-[#F5FAF3] p-6">

        <div className="space-y-5">

            <div className="flex justify-between">

                <span className="text-[#667085]">
                    Transaction ID
                </span>

                <span className="font-medium">
                    #PV-8829-X01
                </span>

            </div>

            <div className="flex justify-between">

                <span className="text-[#667085]">
                    Method
                </span>

                <span className="font-medium">
                    UPI / Card
                </span>

            </div>

            <div className="flex justify-between items-center">

                <span className="text-[#667085]">
                    Status
                </span>

                <span className="flex items-center gap-1 rounded-full bg-[#ECFDF3] px-3 py-1 text-xs font-semibold text-[#027A48]">

                    <BadgeCheck size={14} />

                    VERIFIED

                </span>

            </div>

        </div>

    </div>
);
const ActionButtons = () => (
    <div className="flex flex-col gap-4 sm:flex-row">

        <Button className="bg-[#22C55E] px-10 py-3 font-bold text-[#004B1E]">

            Go to My Projects

        </Button>

        <Button className="border border-[#D8E3D3] bg-white px-10 py-3 text-[#161D16]">

            Browse More

        </Button>

    </div>
);

export default function ProjectUnlockedPage() {
return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 lg:px-8">

        {/* Success Header */}

        <UnlockHeader />

        {/* Main Content */}

        <section className="grid gap-8 lg:grid-cols-[340px_1fr]">

            {/* Left */}

            <div className="space-y-6">

                <PurchasedProjectCard
                    image="/preview/preview-2.jpg"
                    title="Smart Grid Monitor"
                    author="Alex Chen"
                    date="Oct 24, 2024"
                    price="$259.00"
                />

                <TransactionCard />

            </div>

            {/* Right */}

            <div className="space-y-8">

                {/* Heading */}

                <div>

                    <h2
                        className={`${geist.className} text-2xl font-semibold text-[#161D16]`}
                    >
                        Digital Assets Unlocked
                    </h2>

                    <p
                        className={`${inter.className} mt-2 text-[#667085]`}
                    >
                        Everything included in your purchase is now
                        available for immediate access.
                    </p>

                </div>

                {/* Asset Cards */}

                <div className="grid gap-5 md:grid-cols-2">

                    {assets.map((asset) => (

                        <AssetCard
                            key={asset.title}
                            {...asset}
                        />

                    ))}

                </div>

                {/* Buttons */}

                <ActionButtons />

            </div>

        </section>

    </div>
);
}