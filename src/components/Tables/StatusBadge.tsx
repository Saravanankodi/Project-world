"use client";

import { inter } from "@/lib/fonts";
import type { ProjectStatus } from "@/services/project";

interface StatusBadgeProps {
    status: ProjectStatus;
}

const statusStyles: Record<
    ProjectStatus,
    { text: string; className: string }
> = {
    draft: {
        text: "Draft",
        className:
            "bg-[#F2F4F7] text-[#475467] border border-[#D0D5DD]",
    },

    pending: {
        text: "Waiting Approval",
        className:
            "bg-[#DAE2FD] text-[#5C647A] border border-[#D9D6FE]",
    },

    approved: {
        text: "Approved",
        className:
            "bg-[#22C55E33] text-[#004B1E] border border-[#22C55E4D]",
    },

    rejected: {
        text: "Rejected",
        className:
            "bg-[#FEE4E2] text-[#B42318] border border-[#FECDCA]",
    },

    published: {
        text: "Published",
        className:
            "bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]",
    },

    archived: {
        text: "Archived",
        className:
            "bg-[#F2F4F7] text-[#667085] border border-[#D0D5DD]",
    },
};

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    const current = statusStyles[status];

    // Prevent runtime crash if API/database contains
    // an unexpected status.
    if (!current) {
        return (
            <span
                className={`${inter.className} inline-flex items-center rounded-full border border-[#D0D5DD] bg-[#F2F4F7] px-3 py-1 md:text-[10px] xl:text-xs font-semibold text-[#667085]`}
            >
                {status || "Unknown"}
            </span>
        );
    }

    return (
        <span
            className={`${inter.className} inline-flex items-center rounded-full px-3 py-1 md:text-[10px] xl:text-xs font-semibold ${current.className}`}
        >
            {current.text}
        </span>
    );
}
