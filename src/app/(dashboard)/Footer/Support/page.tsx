"use client";

import { geist, inter } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import {
    Search,
    Sparkles,
    LifeBuoy,
    Download,
    CreditCard,
    UserRound,
    ShieldCheck,
    Code2,
    ArrowRight,
    ChevronRight,
    FileText,
    MessageCircleMore,
    Mail,
    Server,
    CheckCircle2,
    Users,
    BookOpen,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useState } from "react";

const helpCategories = [
    {
        icon: <Download className="w-7 h-7 text-[#027A48]" />,
        title: "Downloads",
        description:
            "Project downloads, ZIP issues, missing files and version updates.",
    },
    {
        icon: <CreditCard className="w-7 h-7 text-[#175CD3]" />,
        title: "Billing",
        description:
            "Payments, invoices, refunds and purchase related questions.",
    },
    {
        icon: <UserRound className="w-7 h-7 text-[#B54708]" />,
        title: "Account",
        description:
            "Manage your profile, password, verification and security.",
    },
    {
        icon: <Code2 className="w-7 h-7 text-[#6938EF]" />,
        title: "Creators",
        description:
            "Upload projects, withdrawals, creator verification and earnings.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[#DC6803]" />,
        title: "Security",
        description:
            "Privacy, copyright protection and account security.",
    },
    {
        icon: <LifeBuoy className="w-7 h-7 text-[#027A48]" />,
        title: "Technical",
        description:
            "Installation, dependencies, setup and troubleshooting.",
    },
];

const articles = [
    {
        title: "How to download purchased projects",
        description:
            "Learn how to access your purchased files, reports and documentation.",
    },
    {
        title: "Requesting a refund",
        description:
            "Understand our refund policy and submit refund requests easily.",
    },
    {
        title: "Become a verified creator",
        description:
            "Verification increases trust and improves project visibility.",
    },
    {
        title: "Uploading your first project",
        description:
            "Step-by-step guide for publishing projects on ProjectVerse.",
    },
];

const services = [
    "Marketplace",
    "Downloads",
    "Authentication",
    "Payment Gateway",
];

const resources = [
    {
        icon: <Users className="w-7 h-7 text-[#027A48]" />,
        title: "Community",
        description:
            "Join thousands of students, creators and developers sharing ideas.",
        button: "Join Community",
    },
    {
        icon: <BookOpen className="w-7 h-7 text-[#175CD3]" />,
        title: "Documentation",
        description:
            "Complete guides, tutorials and technical documentation.",
        button: "Open Docs",
    },
];

const faqs = [
    {
        question: "How long does support usually take?",
        answer:
            "Most support requests receive a response within 24 hours. Premium creator requests are prioritized.",
    },
    {
        question: "Can I request a refund?",
        answer:
            "Yes. Refund requests are reviewed according to our refund policy and purchase eligibility.",
    },
    {
        question: "How do I become a verified creator?",
        answer:
            "Complete your creator profile and submit your verification documents from your dashboard.",
    },
    {
        question: "How can I report a project?",
        answer:
            "Every project contains a Report option where you can submit copyright or quality concerns.",
    },
];

export default function SupportPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    return (
        <main className="mx-auto max-w-7xl space-y-14 px-4 py-8 sm:px-6 lg:px-8">

            {/* ================= HERO ================= */}

            <section className="overflow-hidden rounded-3xl border border-[#D8E3D3] bg-linear-to-br from-[#F5FAF5] via-white to-[#FAFFFA]">

                <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-16">

                    <div>

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ECFDF3] px-4 py-2">

                            <Sparkles className="w-4 h-4 text-[#027A48]" />

                            <span
                                className={`${inter.className} text-sm font-semibold text-[#027A48]`}
                            >
                                ProjectVerse Help Center
                            </span>

                        </div>

                        <h1
                            className={`${geist.className} text-5xl font-bold leading-tight text-[#161D16]`}
                        >
                            How can we
                            <span className="text-[#027A48]">
                                {" "}help you?
                            </span>
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            Browse documentation, search support articles,
                            solve technical issues, or contact our team.
                            We're committed to making your ProjectVerse
                            experience smooth and successful.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                                Contact Support
                            </Button>

                            <Button
                                className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Documentation
                            </Button>

                        </div>

                    </div>

                    <div className="flex items-center justify-center">

                        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#ECFDF3]">

                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <LifeBuoy className="h-28 w-28 text-[#027A48]" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= SEARCH ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                <div className="mx-auto max-w-3xl">

                    <h2
                        className={`${geist.className} text-center text-3xl font-bold text-[#161D16]`}
                    >
                        Search the Help Center
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-center text-[#667085]`}
                    >
                        Find guides, tutorials and answers instantly.
                    </p>

                    <div className="relative mt-8">

                        <Search
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                            size={20}
                        />

                        <input
                            placeholder="Search articles, downloads, billing, creators..."
                            className="h-14 w-full rounded-2xl border border-[#D8E3D3] bg-[#FAFFFA] pl-14 pr-5 text-[#161D16] outline-none focus:border-[#027A48]"
                        />

                    </div>

                </div>

            </section>

            {/* ================= HELP CATEGORIES ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Browse Help Categories
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Everything you need in one place.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {helpCategories.map((item) => (

                        <div
                            key={item.title}
                            className="group cursor-pointer rounded-2xl border border-[#E4ECE3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4FBF5]">

                                {item.icon}

                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-4 leading-7 text-[#667085]`}
                            >
                                {item.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 font-medium text-[#027A48]">

                                Learn More

                                <ChevronRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />

                            </div>

                        </div>

                    ))}

                </div>

            </section>
            {/* ================= POPULAR ARTICLES ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Popular Help Articles
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Frequently viewed guides from our knowledge base.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {articles.map((article) => (

                        <div
                            key={article.title}
                            className="group rounded-2xl border border-[#D8E3D3] bg-white p-7 transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5FAF5]">

                                <FileText className="h-6 w-6 text-[#027A48]" />

                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {article.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-3 leading-7 text-[#667085]`}
                            >
                                {article.description}
                            </p>

                            <button
                                className="mt-6 flex items-center gap-2 font-medium text-[#027A48]"
                            >
                                Read Article

                                <ChevronRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />

                            </button>

                        </div>

                    ))}

                </div>

            </section>
            {/* ================= CONTACT SUPPORT ================= */}

            <section className="grid gap-8 lg:grid-cols-2">

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF3]">

                        <MessageCircleMore className="h-7 w-7 text-[#027A48]" />

                    </div>

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Need Personal Assistance?
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        Our support specialists are available to help with purchases,
                        downloads, creator verification, billing and technical issues.
                    </p>

                    <div className="mt-8 space-y-4">

                        <Button
                            className="w-full rounded-xl bg-[#027A48] text-white"
                            leftIcon={<MessageCircleMore size={18} />}
                        >
                            Start Live Chat
                        </Button>

                        <Button
                            className="w-full rounded-xl border border-[#D8E3D3] bg-white text-[#344054]"
                            leftIcon={<Mail size={18} />}
                        >
                            Email Support
                        </Button>

                    </div>

                </div>

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <LifeBuoy className="h-7 w-7 text-[#027A48]" />

                    </div>

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Submit a Support Ticket
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        Track your issue with a dedicated ticket number and receive
                        progress updates until it's resolved.
                    </p>

                    <Button
                        className="mt-8 w-full rounded-xl bg-[#161D16] text-white"
                    >
                        Create Ticket
                    </Button>

                </div>

            </section>
            {/* ================= SYSTEM STATUS ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F9FFF9] p-8">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">

                        <Server className="h-7 w-7 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            System Status
                        </h2>

                        <p
                            className={`${inter.className} mt-1 text-[#667085]`}
                        >
                            All ProjectVerse services are running normally.
                        </p>

                    </div>

                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {services.map((service) => (

                        <div
                            key={service}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-5"
                        >

                            <div className="flex items-center gap-3">

                                <CheckCircle2
                                    className="text-[#027A48]"
                                    fill="#DCFCE7"
                                />

                                <span
                                    className={`${inter.className} font-medium text-[#161D16]`}
                                >
                                    {service}
                                </span>

                            </div>

                            <p
                                className="mt-3 text-sm text-[#027A48]"
                            >
                                Operational
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= COMMUNITY ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Community & Resources
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Learn together, share knowledge and connect with other creators.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {resources.map((item) => (

                        <div
                            key={item.title}
                            className="rounded-3xl border border-[#D8E3D3] bg-white p-8 transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                                {item.icon}

                            </div>

                            <h3
                                className={`${geist.className} mt-6 text-2xl font-semibold text-[#161D16]`}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                            >
                                {item.description}
                            </p>

                            <Button
                                className="mt-8 rounded-xl bg-[#027A48] px-6 text-white"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                {item.button}
                            </Button>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= FAQ ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Frequently Asked Questions
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Quick answers to our most common questions.
                    </p>

                </div>

                <div className="space-y-4">

                    {faqs.map((faq, index) => (

                        <div
                            key={faq.question}
                            className="overflow-hidden rounded-2xl border border-[#D8E3D3] bg-white"
                        >

                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-left"
                            >

                                <span
                                    className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                                >
                                    {faq.question}
                                </span>

                                {openFaq === index ? (
                                    <ChevronUp className="text-[#027A48]" />
                                ) : (
                                    <ChevronDown className="text-[#667085]" />
                                )}

                            </button>

                            {openFaq === index && (

                                <div className="px-6 pb-6">

                                    <p
                                        className={`${inter.className} leading-8 text-[#667085]`}
                                    >
                                        {faq.answer}
                                    </p>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="overflow-hidden rounded-3xl bg-linear-to-r from-[#027A48] to-[#039855] p-10 lg:p-16">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-white lg:text-5xl`}
                    >
                        Still Need Help?
                    </h2>

                    <p
                        className={`${inter.className} mt-6 text-lg leading-8 text-green-100`}
                    >
                        Our support engineers are available to help creators, students,
                        universities and businesses succeed with ProjectVerse.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                            Contact Support
                        </Button>

                        <Button
                            className="rounded-xl border border-white bg-transparent px-8 text-white"
                            rightIcon={<ArrowRight size={18} />}
                        >
                            Browse Documentation
                        </Button>

                    </div>

                </div>

            </section>

        </main>
    );
}