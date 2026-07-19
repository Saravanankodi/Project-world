"use client";

import { geist, inter } from "@/lib/fonts";
import {
    Sparkles,
    Globe2,
    ShieldCheck,
    GraduationCap,
    BookOpen,
    Users,
    Rocket,
    BadgeCheck,
    Lightbulb,
    HeartHandshake,
    ArrowRight,
} from "lucide-react";
import Button from "@/components/Button/Button";

const features = [
    {
        icon: <GraduationCap className="h-7 w-7 text-[#027A48]" />,
        title: "Academic Excellence",
        description:
            "Access carefully curated engineering, software, AI, IoT, and research projects built with real-world implementation standards.",
    },
    {
        icon: <ShieldCheck className="h-7 w-7 text-[#175CD3]" />,
        title: "Verified Projects",
        description:
            "Every project is reviewed to ensure quality, originality, proper documentation, and a secure purchasing experience.",
    },
    {
        icon: <BookOpen className="h-7 w-7 text-[#B54708]" />,
        title: "Complete Resources",
        description:
            "Receive source code, reports, setup guides, documentation, presentations, and implementation support in one package.",
    },
    {
        icon: <Users className="h-7 w-7 text-[#6938EF]" />,
        title: "Creator Marketplace",
        description:
            "Students, developers, and researchers can publish projects, build their reputation, and generate income from their work.",
    },
    {
        icon: <Rocket className="h-7 w-7 text-[#DC6803]" />,
        title: "Future Ready",
        description:
            "Explore innovative technologies including AI, Machine Learning, IoT, Blockchain, Cloud Computing, and Robotics.",
    },
    {
        icon: <BadgeCheck className="h-7 w-7 text-[#027A48]" />,
        title: "Trusted Platform",
        description:
            "Transparent pricing, verified creators, secure downloads, and a seamless digital purchasing experience.",
    },
];

const values = [
    {
        icon: <Lightbulb className="h-7 w-7 text-[#027A48]" />,
        title: "Innovation",
        description:
            "We encourage practical problem-solving through technology and creativity.",
    },
    {
        icon: <ShieldCheck className="h-7 w-7 text-[#175CD3]" />,
        title: "Quality",
        description:
            "Every project is designed to meet professional academic and industry standards.",
    },
    {
        icon: <HeartHandshake className="h-7 w-7 text-[#B54708]" />,
        title: "Community",
        description:
            "Connecting creators and learners to grow together through collaboration.",
    },
];

const stats = [
    {
        value: "500+",
        title: "Verified Projects",
    },
    {
        value: "10K+",
        title: "Students",
    },
    {
        value: "250+",
        title: "Creators",
    },
    {
        value: "98%",
        title: "Customer Satisfaction",
    },
];

export default function AboutPage() {
    return (
        <main className="mx-auto w-full max-w-7xl space-y-12 p-4 ">

            {/* HERO */}

            <section className="overflow-hidden rounded-3xl border border-[#D8E3D3] bg-linear-to-br from-[#F4FBF5] via-white to-[#F8FCF8]">

                <div className="grid xl:gap-10 p-4 md:grid-cols-2 lg:p-6">

                    <div className="flex flex-col justify-center">

                        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#ECFDF3] px-4 py-2">

                            <Sparkles className="h-4 w-4 text-[#027A48]" />

                            <span
                                className={`${inter.className} text-sm font-semibold text-[#027A48]`}
                            >
                                About ProjectVerse
                            </span>

                        </div>

                        <h1
                            className={`${geist.className} text-2xl font-bold leading-tight text-[#161D16] sm:text-3xl lg:text-4xl`}
                        >
                            Building the Future of Academic &
                            <span className="text-[#027A48]">
                                {" "}Software Innovation
                            </span>
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            ProjectVerse is a premium marketplace where students,
                            developers, educators, and innovators publish,
                            discover, and monetize high-quality engineering,
                            software, AI, and research projects through one secure
                            ecosystem.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button className="rounded-xl bg-[#027A48] px-7 text-white">
                                Explore Projects
                            </Button>

                            <Button
                                className="rounded-xl border border-[#D8E3D3] bg-white px-7 text-[#344054]"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Become Creator
                            </Button>

                        </div>

                    </div>

                    <div className="md:flex items-center justify-center hidden ">

                        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#ECFDF3]">

                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <Globe2 className="h-28 w-28 text-[#027A48]" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* WHO WE ARE */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 lg:p-10">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Who We Are
                </h2>

                <p
                    className={`${inter.className} mt-6 text-lg leading-9 text-[#667085]`}
                >
                    ProjectVerse was founded with a simple vision: every great
                    project deserves recognition beyond a classroom or local
                    storage. We provide a professional platform where technical
                    knowledge is preserved, shared, and transformed into valuable
                    learning experiences.

                    <br />
                    <br />

                    By connecting creators with learners, we create an ecosystem
                    where innovation is rewarded, practical knowledge becomes
                    accessible, and students gain the confidence to build
                    industry-ready solutions.
                </p>

            </section>

            {/* FEATURES */}

            <section>

                <div className="mb-10 text-center">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Why Choose ProjectVerse?
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-4 max-w-3xl text-lg text-[#667085]`}
                    >
                        Everything you need to publish, discover, purchase,
                        and learn from professional academic and software
                        projects.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="rounded-2xl border border-[#E4ECE3] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                                {feature.icon}

                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {feature.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-4 leading-7 text-[#667085]`}
                            >
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* VALUES */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F7FBF7] p-8 lg:p-10">

                <h2
                    className={`${geist.className} text-center text-4xl font-bold text-[#161D16]`}
                >
                    Our Core Values
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3">

                    {values.map((value) => (

                        <div
                            key={value.title}
                            className="rounded-2xl bg-white p-7 text-center shadow-sm"
                        >

                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4FBF5]">

                                {value.icon}

                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {value.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-4 leading-7 text-[#667085]`}
                            >
                                {value.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* STATS */}

            <section className="grid grid-cols-2 gap-5 lg:grid-cols-4">

                {stats.map((item) => (

                    <div
                        key={item.title}
                        className="rounded-2xl border border-[#D8E3D3] bg-white p-8 text-center shadow-sm"
                    >

                        <h2
                            className={`${geist.className} text-4xl font-bold text-[#027A48]`}
                        >
                            {item.value}
                        </h2>

                        <p
                            className={`${inter.className} mt-3 text-[#667085]`}
                        >
                            {item.title}
                        </p>

                    </div>

                ))}

            </section>

            {/* VISION */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-10">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Looking Ahead
                </h2>

                <p
                    className={`${inter.className} mt-6 text-lg leading-9 text-[#667085]`}
                >
                    We envision ProjectVerse becoming the world's most trusted
                    marketplace for engineering, software, and academic
                    innovation.

                    <br />
                    <br />

                    Our mission extends beyond project sharing—we aim to empower
                    creators to build sustainable digital businesses while helping
                    learners develop practical, industry-ready skills through
                    real-world projects and collaborative knowledge sharing.
                </p>

            </section>

            {/* CTA */}

            <section className="rounded-3xl bg-[#027A48] p-10 text-center">

                <h2
                    className={`${geist.className} text-4xl font-bold text-white`}
                >
                    Ready to Build Something Bigger?
                </h2>

                <p
                    className={`${inter.className} mx-auto mt-5 max-w-3xl text-lg leading-8 text-green-100`}
                >
                    Join thousands of creators and learners who are transforming
                    innovative ideas into impactful solutions through
                    ProjectVerse.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                        Browse Projects
                    </Button>

                    <Button className="rounded-xl border border-white bg-transparent px-8 text-white">
                        Become a Creator
                    </Button>

                </div>

            </section>

        </main>
    );
}