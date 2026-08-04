

"use client";

import { inter } from "@/lib/fonts";
import { ProjectStatus } from "@/services/project";

interface StatusBadgeProps {
    status: ProjectStatus;
}


const statusStyles = {
    published: {
        text: "In Marketplace",
        className:
            "bg-[#22C55E33] text-[#004B1E] border border-[#22C55E4D]",
    },

    review: {
        text: "Waiting Approval",
        className:
            "bg-[#DAE2FD] text-[#5C647A] border border-[#D9D6FE]",
    },

    draft: {
        text: "Complete Details",
        className:
            "bg-[#F2F4F7] text-[#475467] border border-[#D0D5DD]",
    },
};

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    const current = statusStyles[status];

    return (
        <span
            className={`${inter.className} inline-flex items-center rounded-full px-3 py-1 md:text-[10px] xl:text-xs font-semibold ${current.className}`}
        >
            {current.text}
        </span>
    );
}