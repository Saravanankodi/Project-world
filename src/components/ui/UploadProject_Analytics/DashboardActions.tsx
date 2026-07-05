"use client";

import {
    Edit3,
    BarChart3,
    Eye,
    Share2,
    Trash2,
} from "lucide-react";

import Button from "@/components/Button/Button";

interface DashboardActionsProps {
    onEdit?: () => void;
    onAnalytics?: () => void;
    onPreview?: () => void;
    onShare?: () => void;
    onDelete?: () => void;
}

export default function DashboardActions({
    onEdit,
    onAnalytics,
    onPreview,
    onShare,
    onDelete,
}: DashboardActionsProps) {
    return (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5">

            <h3 className="mb-5 text-lg font-semibold text-[#161D16]">
                Quick Actions
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">

                <Button
                    onClick={onEdit}
                    leftIcon={<Edit3 size={18} />}
                    className="h-12 bg-[#006E2F] text-white hover:bg-[#025C28]"
                >
                    Edit
                </Button>

                <Button
                    onClick={onAnalytics}
                    leftIcon={<BarChart3 size={18} />}
                    className="h-12 border border-[#D0D5DD] bg-white text-[#161D16]"
                >
                    Analytics
                </Button>

                <Button
                    onClick={onPreview}
                    leftIcon={<Eye size={18} />}
                    className="h-12 border border-[#D0D5DD] bg-white text-[#161D16]"
                >
                    Preview
                </Button>

                <Button
                    onClick={onShare}
                    leftIcon={<Share2 size={18} />}
                    className="h-12 border border-[#D0D5DD] bg-white text-[#161D16]"
                >
                    Share
                </Button>

                <Button
                    onClick={onDelete}
                    leftIcon={<Trash2 size={18} />}
                    className="h-12 border border-[#FECACA] bg-[#FEF2F2] text-[#DC2626] hover:bg-[#FEE2E2]"
                >
                    Delete
                </Button>

            </div>

        </div>
    );
}