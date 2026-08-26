"use client";

import Button from "@/components/Button/Button";
import Issusescard from "@/components/Cards/Issusescard";
import { Done, List, New, Ongoing } from "@/components/icons/Issuse";
import IssuseBanner from "@/components/ui/Issues/IssuseBanner";

import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { auth } from "@/lib/firebase";
import { getUserIssues, Issue } from "@/services/issue";
import { onAuthStateChanged } from "firebase/auth";

const IssuesPage = () => {

    const [issues, setIssues] = useState<Issue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            async (user) => {

                if (!user) {
                    setIssues([]);
                    setLoading(false);
                    return;
                }

                try {

                    setLoading(true);

                    const data = await getUserIssues(user.uid);

                    setIssues(data);

                } catch (error) {

                    console.error(
                        "Failed to fetch issues:",
                        error
                    );

                } finally {

                    setLoading(false);

                }
            }
        );

        return () => unsubscribe();

    }, []);


    // =========================
    // ISSUE COUNTS
    // =========================

    const totalIssues = issues.length;

    const newIssues = issues.filter(
        (issue) => issue.status === "new"
    ).length;

    const ongoingIssues = issues.filter(
        (issue) => issue.status === "in_progress"
    ).length;

    const resolvedIssues = issues.filter(
        (issue) =>
            issue.status === "resolved" ||
            issue.status === "closed"
    ).length;


    return (
        <>
            <section className="w-full h-auto p-6">

                <header className="w-full h-auto flex flex-col sm:flex-row items-start gap-2 justify-between p-3">

                    <aside className="w-fit">

                        <h2 className="text-[32px] text-[#006E2F] font-semibold">
                            My Issues
                        </h2>

                        <p className="text-base text-[#3D4A3D]">
                            Track all your reported issues and their current status.
                        </p>

                    </aside>


                    <Link href="/Issues/new-issuse">

                        <Button
                            className="bg-[#22C55E] flex rounded-lg text-[#004B1E] font-bold"
                            leftIcon={
                                <Plus className="w-5 h-5" />
                            }
                        >
                            Create new Issues
                        </Button>

                    </Link>

                </header>


                <aside className="w-full my-2 grid grid-cols-2 gap-3 md:grid-cols-4">

                    <Issusescard
                        title="Total Issues"
                        value={loading ? "..." : String(totalIssues)}
                        icon={<List />}
                        variant="default"
                    />

                    <Issusescard
                        title="New Issues"
                        value={loading ? "..." : String(newIssues)}
                        icon={<New />}
                        variant="default"
                    />

                    <Issusescard
                        title="Ongoing Issues"
                        value={loading ? "..." : String(ongoingIssues)}
                        icon={<Ongoing />}
                        variant="default"
                    />

                    <Issusescard
                        title="Resolved Issues"
                        value={loading ? "..." : String(resolvedIssues)}
                        icon={<Done />}
                        variant="default"
                    />

                </aside>


                <main className="w-full">

                    <aside className="w-full">

                    </aside>

                    {issues.map((issue) => (
                        <IssuseBanner
                            key={issue.id}
                            issue={issue}
                        />
                    ))}

                </main>

            </section>
        </>
    );
};

export default IssuesPage;