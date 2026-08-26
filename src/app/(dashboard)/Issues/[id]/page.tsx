"use client";

import Button from "@/components/Button/Button";
import Dropdown from "@/components/ui/base/Dropdown";
import IssueDetails from "@/components/ui/Issues/IssueDetails";
import IssuseBanner from "@/components/ui/Issues/IssuseBanner";
import UserInfo from "@/components/ui/Issues/UserInfo";
import ViewImg from "@/components/ui/Issues/ViewImg";

import { geist } from "@/lib/fonts";
import { Option } from "@/types/types";

import {
    Download,
    MoveLeft,
} from "lucide-react";

import Link from "next/link";
import React, {
    useEffect,
    useState,
} from "react";

import { useParams } from "next/navigation";

import {
    getIssueById,
    updateIssueStatus,
    Issue,
    IssueStatus,
} from "@/services/issue";

import {
    getProjectById,
    Project,
} from "@/services/project";

import {
    getUserProfile,
} from "@/services/user";

import { UserProfile } from "@/types/types";


// =====================================
// STATUS OPTIONS
// =====================================

const OPTION: Option[] = [
    {
        label: "New",
        value: "new",
    },
    {
        label: "In Progress",
        value: "in_progress",
    },
    {
        label: "Resolved",
        value: "resolved",
    },
    {
        label: "Closed",
        value: "closed",
    },
];


const IssuesInfoPage = () => {

    const params = useParams();

    const issueId = params.id as string;


    // =====================================
    // STATE
    // =====================================

    const [issue, setIssue] =
        useState<Issue | null>(null);

    const [project, setProject] =
        useState<Project | null>(null);

    const [user, setUser] =
        useState<UserProfile | null>(null);

    const [option, setOption] =
        useState<IssueStatus>("new");

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [error, setError] =
        useState<string | null>(null);


    // =====================================
    // FETCH ISSUE
    // =====================================

    useEffect(() => {

        if (!issueId) return;

        const fetchIssue = async () => {

            try {

                setLoading(true);
                setError(null);

                // Get issue
                const issueData =
                    await getIssueById(issueId);

                if (!issueData) {

                    setError(
                        "Issue not found."
                    );

                    return;
                }

                setIssue(issueData);

                // Set current status
                setOption(
                    issueData.status
                );


                // =================================
                // GET PROJECT
                // =================================

                if (issueData.projectId) {

                    const projectData =
                        await getProjectById(
                            issueData.projectId
                        );

                    setProject(projectData);
                }


                // =================================
                // GET BUYER
                // =================================

                if (issueData.userId) {

                    const userData =
                        await getUserProfile(
                            issueData.userId
                        );

                    setUser(userData);
                }

            } catch (err) {

                console.error(
                    "Error fetching issue:",
                    err
                );

                setError(
                    "Failed to load issue."
                );

            } finally {

                setLoading(false);
            }
        };


        fetchIssue();

    }, [issueId]);


    // =====================================
    // SAVE STATUS
    // =====================================

    const handleSaveStatus = async () => {

        if (!issue?.id) return;

        try {

            setSaving(true);

            await updateIssueStatus(
                issue.id,
                option
            );

            // Update local state
            setIssue((previous) => {

                if (!previous) {
                    return previous;
                }

                return {
                    ...previous,
                    status: option,
                };
            });

        } catch (err) {

            console.error(
                "Error updating issue status:",
                err
            );

            setError(
                "Failed to update issue status."
            );

        } finally {

            setSaving(false);
        }
    };


    // =====================================
    // LOADING
    // =====================================

    if (loading) {

        return (
            <div className="flex min-h-100 items-center justify-center">

                <p className="text-sm text-[#3D4A3D]">
                    Loading issue...
                </p>

            </div>
        );
    }


    // =====================================
    // ERROR
    // =====================================

    if (error || !issue) {

        return (
            <div className="flex min-h-100 items-center justify-center">

                <div className="text-center">

                    <p className="text-sm text-red-600">
                        {error || "Issue not found."}
                    </p>

                    <Link
                        href="/Issues"
                        className="mt-4 inline-block text-sm text-[#006E2F]"
                    >
                        Back to Issues
                    </Link>

                </div>

            </div>
        );
    }


    return (
        <>
            <section className="w-full h-auto p-6 space-y-4">

                <header className="w-full h-auto flex flex-col sm:flex-row sm:items-center justify-between p-3">

                    <aside className="w-fit">

                        <h2 className="text-[32px] text-[#006E2F] font-semibold">
                            Issue Details
                        </h2>

                        <p className="text-base text-[#3D4A3D]">
                            Review and manage user support requests.
                        </p>

                    </aside>


                    <Link
                        href="/Issues"
                        className="flex text-base text-[#006E2F] gap-2"
                    >
                        <MoveLeft />

                        Back to Issues
                    </Link>

                </header>


                {/* =========================
                    ISSUE BANNER
                ========================= */}

                <aside className="w-full">

                    <IssuseBanner
                        issue={issue}
                    />

                </aside>


                <main className="w-full h-full flex sm:flex-row flex-col gap-4">

                    <aside className="flex-1 h-full flex flex-col gap-4">


                        {/* =========================
                            USER
                        ========================= */}

                        <UserInfo
                            user={user}
                        />


                        {/* =========================
                            ISSUE DETAILS
                        ========================= */}

                        <IssueDetails
                            projectName={
                                issue.projectName
                            }

                            paymentAmount={
                                project?.priceDetails?.basePrice ??
                                0
                            }

                            technicalSummary={
                                issue.subject
                            }

                            description={
                                issue.description
                            }
                        />


                        <div className="w-full hidden sm:block">

                            <Button
                                rightIcon={
                                    <Download size={16} />
                                }
                                className={`${geist.className} w-full inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] text-black px-4 py-2 text-sm font-semibold bg-[#565E7480] transition hover:bg-[#F3F4F6]`}
                            >
                                DOWNLOAD CHATS
                            </Button>

                        </div>

                    </aside>


                    {/* =========================
                        RIGHT SIDE
                    ========================= */}

                    <aside className="w-full sm:w-5/12 flex flex-col gap-3">

                        <ViewImg />

                        <ViewImg />


                        <div className="w-full bg-white rounded-xl border border-[#BCCBB94D] shadow-lg p-6">

                            <div className="">

                                <h2 className="text-2xl text-[#161D16] font-semibold">
                                    Management
                                </h2>

                            </div>


                            {/* STATUS */}

                            <Dropdown
                                name="Status"
                                option={OPTION}
                                value={option}
                                onChange={(value) =>
                                    setOption(
                                        value as IssueStatus
                                    )
                                }
                            />


                            <aside className="flex items-center justify-center gap-3 mt-2">

                                <Button
                                    onClick={
                                        handleSaveStatus
                                    }
                                    disabled={saving}
                                    className="text-xs py-2 sm:text-sm bg-[#565E74] w-full text-white"
                                >
                                    {saving
                                        ? "SAVING..."
                                        : "SAVE STATUS"}
                                </Button>


                                <Button
                                    className="text-xs py-2 sm:text-sm bg-[#006E2F] w-full text-white"
                                >
                                    MESSAGE USER
                                </Button>

                            </aside>

                        </div>

                    </aside>

                </main>


                <div className="w-full sm:hidden">

                    <Button
                        rightIcon={
                            <Download size={16} />
                        }
                        className={`${geist.className} w-full inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] text-black px-4 py-2 text-sm font-semibold bg-[#565E7480] transition hover:bg-[#F3F4F6]`}
                    >
                        DOWNLOAD CHATS
                    </Button>

                </div>

            </section>
        </>
    );
};

export default IssuesInfoPage;