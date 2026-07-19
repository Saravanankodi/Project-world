"use client";

import {
    BadgeCheck,
    BookOpen,
    CheckCircle2,
    CreditCard,
    Download,
    ExternalLink,
    FolderCode,
    PlayCircle,
    PlaySquare,
    Rocket,
} from "lucide-react";

import Button from "@/components/Button/Button";
import PurchasedProjectCard from "@/components/ui/projects/PurchasedProjectCard";

import { geist, inter, libertinus } from "@/lib/fonts";

const assets = [
    {
        icon: FolderCode,
        title: "Source Code",
        description: "Download latest project repository in .ZIP format",
        action: "Download ZIP",
        actionIcon: Download,
        color: "text-[#027A48]",
        iconColor: "text-[#006E2F]",
        iconBg: "bg-[#006E2F1A]",
    },
    {
        icon: BookOpen,
        title: "Documentation",
        description: "Setup guides and implementation details",
        action: "View PDF",
        actionIcon: ExternalLink,
        color: "text-[#344054]",
        iconColor: "text-[#565E74]",
        iconBg: "bg-[#DAE2FD4D]",
    },
    {
        icon: PlayCircle,
        title: "Walkthrough",
        description: "15-minute guided video tutorial",
        action: "Watch Video",
        actionIcon: PlaySquare,
        color: "text-[#B42318]",
        iconColor: "text-[#9E4036]",
        iconBg: "bg-[#FF8B7C33]",
    },
    {
        icon: Rocket,
        title: "Live Demo",
        description: "Access the hosted production environment",
        action: "Visit Site",
        actionIcon: ExternalLink,
        color: "text-[#027A48]",
        iconColor: "text-[#006E2F]",
        iconBg: "bg-[#006E2F1A]",
    },
];
const UnlockHeader = () => (
    <header className="flex flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#006e2f33]">

            <CheckCircle2
                size={48}
                className="h-12 w-12 fill-[#006E2F] text-[#006E2F] stroke-[#c4e7d3]"
            />

        </div>

        <h1
            className={`${geist.className} mt-6 text-3xl font-bold text-[#161D16] lg:text-[40px]`}
        >
            Project Unlocked Successfully!
        </h1>

        <p
            className={`${inter.className} mt-4 max-w-2xl text-sm text-[#565E74]`}
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
    iconColor,
    iconBg,
}: any) => (
    <div className="rounded-2xl border border-[#BCCBB94D] bg-white p-2 sm:p-6 shadow-sm transition hover:shadow-md shadow-[#0000000D]">

        <div className="flex sm:gap-4 gap-1">

            <div className={`flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-xl  ${iconBg}`}>

                <Icon
                    className={iconColor}
                    size={20}
                />

            </div>

            <div className="flex-1">

                <h3
                    className={`${inter.className} font-semibold text-[#161D16] text-xs sm:text-sm`}
                >
                    {title}
                </h3>

                <p
                    className={`${inter.className} mt-1 text-[10px] sm:text-xs text-[#565E74]`}
                >
                    {description}
                </p>

                <button
                    className={` ${inter.className} mt-1 sm:mt-5 flex items-center gap-2 text-[10px] sm:text-sm font-semibold ${color}`}
                >
                    {action}

                    <ActionIcon size={15} />
                </button>

            </div>

        </div>

    </div>
);
const TransactionCard = () => (
    <div className="rounded-2xl border border-[#EDF6EA] bg-[#BCCBB933] p-6">

        <div className="space-y-5">

            <div className="flex justify-between">

                <span className={`${inter.className}  text-xs font-medium text-[#565E74]`}>
                    Transaction ID
                </span>

                <span className={`font-medium text-[#161D16] text-xs ${libertinus.className}`}>
                    #PV-8829-X01
                </span>

            </div>

            <div className="flex justify-between">

                <span className={`${inter.className}  text-xs font-medium text-[#565E74]`}>
                    Method
                </span>

                <span className={`flex items-center gap-1  font-medium text-[#161D16] text-xs ${inter.className}`}>
                    <CreditCard size={14} stroke="#000000" />
                    UPI / Card
                </span>

            </div>

            <div className="flex justify-between items-center">

                <span className={`${inter.className}  text-xs font-medium text-[#565E74]`}>
                    Status
                </span>

                <span className="flex items-center gap-1 rounded-full bg-[#006E2F1A] px-3 py-1 text-xs font-semibold text-[#006E2F] border border-[#006E2F33]">

                    <BadgeCheck size={14} />

                    VERIFIED

                </span>

            </div>

        </div>

    </div>
);
const ActionButtons = () => (
    <div className="flex flex-col gap-4 sm:flex-row">

        <Button className={`${geist.className} bg-[#22C55E] px-10 py-3 font-bold text-[#004B1E] shadow-lg shadow-[#22C55E4D] text-sm`}>

            Go to My Projects

        </Button>

        <Button className={`${geist.className} border border-[#BCCBB980] bg-white px-10 py-3 text-[#161D16] text-sm`}>

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
                        userimage="/Topbar/profileImage.jpg"
                        title="Smart Grid Monitor"
                        author="Alex Chen"
                        date="Oct 24, 2024"
                        price="$259.00"
                    />

                    <TransactionCard />

                </div>

                {/* Right */}

                <div className="space-y-8 flex items-start justify-between flex-col">

                    {/* Heading */}

                    <div>

                        <h2
                            className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                        >
                            Digital Assets Unlocked
                        </h2>



                        {/* Asset Cards */}

                        <div className="grid  gap-1 sm:gap-5 grid-cols-2">

                            {assets.map((asset) => (

                                <AssetCard
                                    key={asset.title}
                                    {...asset}
                                />

                            ))}

                        </div>
                    </div>

                    {/* Buttons */}

                    <ActionButtons />

                </div>

            </section>

        </div>
    );
}