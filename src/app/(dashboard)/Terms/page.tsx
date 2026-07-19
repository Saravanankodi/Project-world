"use client";

import { geist, inter } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import {
    Sparkles,
    FileText,
    Scale,
    ShieldCheck,
    Users,
    ShoppingCart,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const sections = [
    {
        icon: <Users className="w-7 h-7 text-[#027A48]" />,
        title: "User Accounts",
        description:
            "Users are responsible for maintaining the confidentiality of their account credentials and ensuring that all account information remains accurate and up to date.",
    },
    {
        icon: <ShoppingCart className="w-7 h-7 text-[#175CD3]" />,
        title: "Purchases & Payments",
        description:
            "All purchases made through ProjectVerse are securely processed. Purchased projects remain available within your account subject to our platform policies.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[#B54708]" />,
        title: "Platform Security",
        description:
            "Any attempt to exploit, disrupt, or compromise the security of ProjectVerse is strictly prohibited and may result in immediate account termination.",
    },
    {
        icon: <Scale className="w-7 h-7 text-[#6938EF]" />,
        title: "Legal Compliance",
        description:
            "All users must comply with applicable laws, copyright regulations and our community standards while using ProjectVerse.",
    },
];

const responsibilities = [
    "Provide accurate account information.",
    "Respect copyright and intellectual property.",
    "Do not redistribute purchased projects without permission.",
    "Maintain account security and confidentiality.",
];

export default function TermsPage() {
    return (
        <main className="mx-auto max-w-7xl space-y-12 px-4 py-8 lg:px-8">

            {/* HERO */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-gradient-to-br from-[#F5FAF5] to-white p-8 lg:p-14">

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    <div>

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ECFDF3] px-4 py-2">

                            <Sparkles className="h-4 w-4 text-[#027A48]" />

                            <span
                                className={`${inter.className} text-sm font-semibold text-[#027A48]`}
                            >
                                Terms & Conditions
                            </span>

                        </div>

                        <h1
                            className={`${geist.className} text-5xl font-bold leading-tight text-[#161D16]`}
                        >
                            Clear Rules.
                            <br />
                            <span className="text-[#027A48]">
                                Trusted Experience.
                            </span>
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            These Terms & Conditions govern your use of ProjectVerse.
                            By accessing our platform, purchasing projects or publishing
                            content, you agree to follow these guidelines and policies.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                                Contact Legal Team
                            </Button>

                            <Button
                                className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Learn More
                            </Button>

                        </div>

                    </div>

                    <div className="flex justify-center">

                        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#ECFDF3]">

                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <FileText className="h-28 w-28 text-[#027A48]" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* LAST UPDATED */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Terms of Service
                        </h2>

                        <p
                            className={`${inter.className} mt-3 text-[#667085]`}
                        >
                            Last Updated — July 2026
                        </p>

                    </div>

                    <div className="rounded-2xl bg-[#ECFDF3] px-6 py-4">

                        <p
                            className={`${inter.className} font-semibold text-[#027A48]`}
                        >
                            Fair, transparent and designed to protect everyone.
                        </p>

                    </div>

                </div>

            </section>

            {/* AGREEMENT */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Agreement to Our Terms
                </h2>

                <p
                    className={`${inter.className} mt-6 leading-8 text-[#667085]`}
                >
                    By creating an account, accessing ProjectVerse or purchasing
                    projects, you acknowledge that you have read, understood and
                    agreed to these Terms & Conditions. If you disagree with any
                    portion of these terms, you should discontinue using our services.
                </p>

            </section>

            {/* PLATFORM RULES */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Platform Guidelines
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Essential responsibilities for every ProjectVerse user.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {sections.map((section) => (

                        <div
                            key={section.title}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-7 shadow-sm transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                                {section.icon}

                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {section.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-4 leading-7 text-[#667085]`}
                            >
                                {section.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* USER RESPONSIBILITIES */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    User Responsibilities
                </h2>

                <p
                    className={`${inter.className} mt-3 text-[#667085]`}
                >
                    Every member of ProjectVerse is expected to follow these principles.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                    {responsibilities.map((item) => (

                        <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-white p-5"
                        >

                            <CheckCircle2 className="text-[#027A48]" />

                            <span
                                className={`${inter.className} text-[#344054]`}
                            >
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </section>
            {/* ================= CREATOR RESPONSIBILITIES ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <Users className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Creator Responsibilities
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            Creators are expected to upload original, high-quality content
                            that complies with copyright laws and community standards.
                            Projects should include accurate descriptions, proper
                            documentation and all promised resources. Uploading plagiarized,
                            illegal or misleading content may result in immediate removal and
                            permanent suspension of the creator account.
                        </p>

                    </div>

                </div>

            </section>

            {/* ================= PURCHASES ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Purchases & Refund Policy
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Our purchasing process is designed to be transparent and secure.
                    </p>

                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {[
                        {
                            title: "Secure Payments",
                            desc: "All payments are processed through trusted payment providers using industry-standard encryption.",
                        },
                        {
                            title: "Instant Access",
                            desc: "Purchased projects become available immediately within your ProjectVerse account.",
                        },
                        {
                            title: "Refund Requests",
                            desc: "Refunds are evaluated according to our refund policy and only for eligible purchases.",
                        },
                    ].map((item) => (

                        <div
                            key={item.title}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-6 shadow-sm transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <ShoppingCart className="mb-5 h-8 w-8 text-[#027A48]" />

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-4 leading-7 text-[#667085]`}
                            >
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= INTELLECTUAL PROPERTY ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Intellectual Property
                </h2>

                <p
                    className={`${inter.className} mt-6 leading-8 text-[#667085]`}
                >
                    All projects, source code, documentation, designs and digital assets
                    remain the intellectual property of their respective creators unless
                    otherwise stated. Purchasing a project grants a license for permitted
                    personal or educational use only and does not transfer ownership of
                    the underlying intellectual property.
                </p>

            </section>

            {/* ================= PROHIBITED ACTIVITIES ================= */}

            <section>

                <div className="mb-8">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Prohibited Activities
                    </h2>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    {[
                        "Redistributing purchased projects.",
                        "Uploading copyrighted or stolen content.",
                        "Attempting to hack or exploit the platform.",
                        "Sharing account credentials.",
                        "Uploading malicious software.",
                        "Providing false or misleading information.",
                    ].map((item) => (

                        <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl border border-[#D8E3D3] bg-white p-5"
                        >

                            <CheckCircle2 className="text-[#027A48]" />

                            <span
                                className={`${inter.className} text-[#344054]`}
                            >
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= LIABILITY ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Limitation of Liability
                </h2>

                <p
                    className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                >
                    ProjectVerse provides its services on an "as available" basis. While
                    we strive to maintain platform reliability and project quality, we do
                    not guarantee uninterrupted availability or suitability for every
                    purpose. Users are responsible for evaluating projects before use and
                    complying with all applicable laws and regulations.
                </p>

            </section>

            {/* ================= CONTACT ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-10 shadow-sm">

                <div className="text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ECFDF3]">

                        <Scale className="h-10 w-10 text-[#027A48]" />

                    </div>

                    <h2
                        className={`${geist.className} mt-6 text-4xl font-bold text-[#161D16]`}
                    >
                        Questions About Our Terms?
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-5 max-w-2xl leading-8 text-[#667085]`}
                    >
                        Our legal and support teams are available to clarify any questions
                        regarding these Terms & Conditions.
                    </p>

                    <div className="mt-8 space-y-2">

                        <p className="font-semibold text-[#027A48]">
                            legal@projectverse.com
                        </p>

                        <p className="text-[#667085]">
                            support@projectverse.com
                        </p>

                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                            Contact Legal Team
                        </Button>

                        <Button
                            className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                            rightIcon={<ArrowRight size={18} />}
                        >
                            Contact Support
                        </Button>

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="overflow-hidden rounded-3xl bg-linear-to-r from-[#027A48] to-[#039855] p-10 lg:p-16">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className={`${geist.className} text-5xl font-bold text-white`}
                    >
                        Building Trust Through Transparency
                    </h2>

                    <p
                        className={`${inter.className} mt-6 text-lg leading-8 text-green-100`}
                    >
                        Our Terms & Conditions are designed to create a fair, secure and
                        professional environment for creators, buyers and learners across
                        ProjectVerse.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                            Explore Projects
                        </Button>

                        <Button
                            className="rounded-xl border border-white bg-transparent px-8 text-white"
                            rightIcon={<ArrowRight size={18} />}
                        >
                            Contact Us
                        </Button>

                    </div>

                </div>

            </section>

        </main>
    );
}