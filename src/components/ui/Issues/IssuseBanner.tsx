import Button from "@/components/Button/Button";
import { Issue } from "@/services/issue";
import Link from "next/link";
import React from "react";

interface IssuseBannerProps {
    issue: Issue;
}

const IssuseBanner = ({
    issue,
}: IssuseBannerProps) => {

    const getStatusStyle = () => {
        switch (issue.status) {
            case "new":
                return {
                    container: "bg-[#FEE2E2]",
                    dot: "bg-[#DC2626]",
                    text: "text-[#B91C1C]",
                };

            case "in_progress":
                return {
                    container: "bg-[#FEF3C7]",
                    dot: "bg-[#F59E0B]",
                    text: "text-[#B45309]",
                };

            case "resolved":
                return {
                    container: "bg-[#DCFCE7]",
                    dot: "bg-[#16A34A]",
                    text: "text-[#15803D]",
                };

            case "closed":
                return {
                    container: "bg-[#F3F4F6]",
                    dot: "bg-[#6B7280]",
                    text: "text-[#4B5563]",
                };

            default:
                return {
                    container: "bg-[#F3F4F6]",
                    dot: "bg-[#6B7280]",
                    text: "text-[#4B5563]",
                };
        }
    };


    const statusStyle = getStatusStyle();


    const formatDate = (date: unknown) => {

        if (!date) {
            return "-";
        }

        try {

            // Firebase Timestamp
            if (
                typeof date === "object" &&
                date !== null &&
                "toDate" in date &&
                typeof date.toDate === "function"
            ) {
                return date.toDate().toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    }
                );
            }

            // JS Date
            if (date instanceof Date) {
                return date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    }
                );
            }

            return new Date(
                date as string
            ).toLocaleDateString(
                "en-US",
                {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                }
            );

        } catch {
            return "-";
        }
    };


    return (
        <>
            <section className="w-full h-auto flex items-center justify-center gap-5 p-4 border border-[#BCCBB933] bg-white rounded-xl shadow-lg">

                <aside className="w-fit h-auto p-2">

                    <p className="text-[10px] text-[#3D4A3D] font-medium sm:hidden">
                        Issue ID
                    </p>

                    <p className="text-xs text-[#006E2F] font-semibold">
                        #{issue.id?.slice(0, 8)}
                    </p>

                    <h2 className="text-sm text-[#161D16] font-bold hidden sm:block">
                        {issue.projectName}
                    </h2>

                </aside>


                <aside className="w-fit h-auto p-2 flex-1">

                    <p className="text-[10px] text-[#3D4A3D] font-medium sm:hidden">
                        Category
                    </p>

                    <p className="text-xs text-[#3D4A3D] font-semibold">
                        {issue.category}
                    </p>

                    <h2 className="text-sm text-[#161D16] hidden sm:block">
                        {issue.subject}
                    </h2>

                </aside>


                <aside className="w-fit h-auto p-2 hidden sm:block">

                    <p className="text-xs text-[#3D4A3D] font-semibold">
                        Date
                    </p>

                    <h2 className="text-sm text-[#161D16]">
                        {formatDate(issue.createdAt)}
                    </h2>

                </aside>


                <aside className="w-fit h-auto p-2 hidden sm:block">

                    <p className="text-xs text-[#3D4A3D] font-semibold">
                        Status
                    </p>

                    <aside
                        className={`w-fit px-2 py-1 ${statusStyle.container} flex items-center justify-center gap-1 rounded-full`}
                    >

                        <div
                            className={`w-2 h-2 rounded-full ${statusStyle.dot}`}
                        />

                        <span
                            className={`text-[10px] ${statusStyle.text}`}
                        >
                            {issue.status.replace(
                                "_",
                                " "
                            )}
                        </span>

                    </aside>

                </aside>


                <Link
                    href={`/Issues/${issue.id}`}
                >
                    <Button className="bg-black text-white hidden sm:block">
                        View Details
                    </Button>
                </Link>

            </section>
        </>
    );
};

export default IssuseBanner;