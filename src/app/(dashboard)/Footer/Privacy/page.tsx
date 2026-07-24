"use client";

import { geist, inter } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import {
    ShieldCheck,
    Lock,
    Database,
    UserRound,
    CreditCard,
    Cookie,
    Server,
    Mail,
    ArrowRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

const information = [
    {
        icon: <UserRound className="w-7 h-7 text-[#027A48]" />,
        title: "Account Information",
        description:
            "Your name, email address, profile details and login credentials used to manage your ProjectVerse account securely.",
    },
    {
        icon: <CreditCard className="w-7 h-7 text-[#175CD3]" />,
        title: "Purchase Information",
        description:
            "Order history, invoices, downloads and payment confirmations required for purchases and customer support.",
    },
    {
        icon: <Database className="w-7 h-7 text-[#B54708]" />,
        title: "Technical Information",
        description:
            "Browser type, operating system, IP address and device information that help us improve platform performance.",
    },
    {
        icon: <Cookie className="w-7 h-7 text-[#6938EF]" />,
        title: "Usage Analytics",
        description:
            "Anonymous analytics including pages visited, search activity and feature usage to improve ProjectVerse.",
    },
];

const security = [
    "SSL Encrypted Connections",
    "Encrypted Password Storage",
    "Secure Payment Processing",
    "Regular Security Monitoring",
];

export default function PrivacyPage() {
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
                                Privacy & Security
                            </span>

                        </div>

                        <h1
                            className={`${geist.className} text-5xl font-bold leading-tight text-[#161D16]`}
                        >
                            Your Privacy.
                            <br />
                            <span className="text-[#027A48]">
                                Our Responsibility.
                            </span>
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            At ProjectVerse, protecting your personal information is one of
                            our highest priorities. We believe transparency builds trust,
                            which is why we clearly explain how your information is
                            collected, stored and protected.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                                Contact Privacy Team
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

                                <ShieldCheck className="h-28 w-28 text-[#027A48]" />

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
                            Privacy Policy
                        </h2>

                        <p
                            className={`${inter.className} mt-3 text-[#667085]`}
                        >
                            Last Updated — July 2026
                        </p>

                    </div>

                    <div className="rounded-2xl bg-[#ECFDF3] px-6 py-4">

                        <p
                            className={`${inter.className} text-[#027A48] font-semibold`}
                        >
                            We never sell your personal information.
                        </p>

                    </div>

                </div>

            </section>

            {/* OUR COMMITMENT */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <Lock className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Our Commitment
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            We collect only the information necessary to provide our
                            services, deliver your purchases, improve platform performance
                            and protect your account. Every decision regarding user data is
                            made with transparency, security and privacy at its core.
                        </p>

                    </div>

                </div>

            </section>

            {/* INFORMATION WE COLLECT */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Information We Collect
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        We collect information only to improve your experience on
                        ProjectVerse.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {information.map((item) => (

                        <div
                            key={item.title}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-7 shadow-sm transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

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

                        </div>

                    ))}

                </div>

            </section>

            {/* DATA SECURITY */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Keeping Your Data Safe
                </h2>

                <p
                    className={`${inter.className} mt-3 text-[#667085]`}
                >
                    Industry-standard technologies protect every ProjectVerse account.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                    {security.map((item) => (

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
            {/* ================= YOUR RIGHTS ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Your Privacy Rights
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        You stay in control of your personal information at every step.
                    </p>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        {
                            icon: <Database className="w-7 h-7 text-[#027A48]" />,
                            title: "Download Data",
                            desc: "Request a copy of your account information anytime.",
                        },
                        {
                            icon: <UserRound className="w-7 h-7 text-[#175CD3]" />,
                            title: "Update Profile",
                            desc: "Edit your profile and personal information securely.",
                        },
                        {
                            icon: <ShieldCheck className="w-7 h-7 text-[#B54708]" />,
                            title: "Manage Privacy",
                            desc: "Control your visibility and account preferences.",
                        },
                        {
                            icon: <Lock className="w-7 h-7 text-[#6938EF]" />,
                            title: "Delete Account",
                            desc: "Permanently remove your account and personal data.",
                        },
                    ].map((item) => (

                        <div
                            key={item.title}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-6 shadow-sm transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">
                                {item.icon}
                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-3 leading-7 text-[#667085]`}
                            >
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= COOKIES ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <Cookie className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Cookies & Analytics
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            ProjectVerse uses cookies to remember your preferences, keep
                            you signed in, improve website performance and better understand
                            how visitors use our platform. These insights help us create a
                            faster, safer and more personalized experience.
                        </p>

                    </div>

                </div>

            </section>

            {/* ================= THIRD PARTY ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Trusted Third-Party Services
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        We work only with trusted providers to deliver secure services.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {[
                        "Cloudinary",
                        "Stripe",
                        "Google Analytics",
                        "GitHub OAuth",
                    ].map((service) => (

                        <div
                            key={service}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-6 text-center shadow-sm transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                                <Server className="h-7 w-7 text-[#027A48]" />

                            </div>

                            <h3
                                className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                            >
                                {service}
                            </h3>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= CONTACT ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-10 shadow-sm">

                <div className="text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ECFDF3]">

                        <Mail className="h-10 w-10 text-[#027A48]" />

                    </div>

                    <h2
                        className={`${geist.className} mt-6 text-4xl font-bold text-[#161D16]`}
                    >
                        Questions About Privacy?
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-5 max-w-2xl leading-8 text-[#667085]`}
                    >
                        Our privacy specialists are available to answer any questions
                        regarding your personal information, security or data handling.
                    </p>

                    <div className="mt-8 space-y-2">

                        <p className="font-semibold text-[#027A48]">
                            privacy@projectverse.com
                        </p>

                        <p className="text-[#667085]">
                            support@projectverse.com
                        </p>

                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                            Contact Privacy Team
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
                        Privacy Built Into Every Project
                    </h2>

                    <p
                        className={`${inter.className} mt-6 text-lg leading-8 text-green-100`}
                    >
                        Trust is the foundation of ProjectVerse. Every feature we build is
                        designed with security, transparency and your privacy in mind.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                            Learn More
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