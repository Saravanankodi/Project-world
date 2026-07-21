"use client";

import { geist, inter } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    ArrowRight,
    Sparkles,
    Send,
} from "lucide-react";

const contactCards = [
    {
        icon: <Mail className="h-7 w-7 text-[#027A48]" />,
        title: "Email Support",
        description: "support@projectverse.com",
    },
    {
        icon: <Phone className="h-7 w-7 text-[#175CD3]" />,
        title: "Phone",
        description: "+91 98765 43210",
    },
    {
        icon: <MapPin className="h-7 w-7 text-[#B54708]" />,
        title: "Office",
        description: "Chennai, Tamil Nadu, India",
    },
    {
        icon: <MessageCircle className="h-7 w-7 text-[#6938EF]" />,
        title: "Live Chat",
        description: "Available Monday - Friday",
    },
];

export default function ContactPage() {
    return (
        <main className="mx-auto  space-y-12 p-4 ">

            {/* ================= HERO ================= */}

            <section className="overflow-hidden rounded-3xl border border-[#D8E3D3] bg-linear-to-br from-[#F4FBF5] via-white to-[#F9FFF9]">

                <div className="grid xl:gap-12 p-4 sm:p-6 md:grid-cols-2 ">

                    <div className="flex flex-col justify-center">

                        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#ECFDF3] px-4 py-2">

                            <Sparkles className="h-4 w-4 text-[#027A48]" />

                            <span
                                className={`${inter.className} text-sm font-semibold text-[#027A48]`}
                            >
                                Contact ProjectVerse
                            </span>

                        </div>

                        <h1
                            className={`${geist.className} text-4xl font-bold leading-tight text-[#161D16]  xl:text-5xl`}
                        >
                            Let's Build Something
                            <span className="text-[#027A48]">
                                {" "}Together
                            </span>
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            Whether you're looking for technical support,
                            partnership opportunities, creator onboarding,
                            or general assistance, our team is ready
                            to help you every step of the way.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button className="rounded-xl bg-[#027A48] px-7 text-white">
                                Contact Support
                            </Button>

                            <Button
                                className="rounded-xl border border-[#D8E3D3] bg-white px-7 text-[#344054]"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Help Center
                            </Button>

                        </div>

                    </div>

                    <div className="md:flex items-center justify-center hidden">

                        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#ECFDF3]">

                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <MessageCircle className="h-28 w-28 text-[#027A48]" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= CONTACT CARDS ================= */}

            <section>

                <div className="mb-8">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Get in Touch
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Reach out through your preferred communication channel.
                    </p>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {contactCards.map((card) => (

                        <div
                            key={card.title}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                        >

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                                {card.icon}

                            </div>

                            <h3
                                className={`${geist.className} text-xl font-semibold text-[#161D16]`}
                            >
                                {card.title}
                            </h3>

                            <p
                                className={`${inter.className} mt-3 leading-7 text-[#667085]`}
                            >
                                {card.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* ================= CONTACT FORM ================= */}

            <section className="grid gap-8 lg:grid-cols-3">

                {/* FORM */}

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8 lg:col-span-2">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Send us a Message
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Fill out the form below and we'll respond as soon as possible.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">

                        <div>

                            <label className="mb-2 block text-sm font-medium text-[#344054]">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-4 outline-none focus:border-[#027A48]"
                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-medium text-[#344054]">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="john@email.com"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-4 outline-none focus:border-[#027A48]"
                            />

                        </div>

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm font-medium text-[#344054]">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="How can we help?"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-4 outline-none focus:border-[#027A48]"
                            />

                        </div>

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm font-medium text-[#344054]">
                                Message
                            </label>

                            <textarea
                                rows={7}
                                placeholder="Write your message..."
                                className="w-full rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] p-4 outline-none focus:border-[#027A48]"
                            />

                        </div>

                    </div>

                    <Button
                        className="mt-8 rounded-xl bg-[#027A48] px-8 text-white"
                        leftIcon={<Send size={18} />}
                    >
                        Send Message
                    </Button>

                </div>

                {/* COMPANY INFO */}

                <aside className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <h2
                        className={`${geist.className} text-2xl font-bold text-[#161D16]`}
                    >
                        ProjectVerse
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        Empowering creators, developers,
                        researchers and students through a
                        modern marketplace for academic
                        and software innovation.
                    </p>

                    <div className="my-8 h-px bg-[#E5E7EB]" />

                    <div className="space-y-6">

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Support Email
                            </p>

                            <p className="mt-1 text-[#667085]">
                                support@projectverse.com
                            </p>

                        </div>

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Business Email
                            </p>

                            <p className="mt-1 text-[#667085]">
                                business@projectverse.com
                            </p>

                        </div>

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Office
                            </p>

                            <p className="mt-1 text-[#667085]">
                                Chennai,
                                Tamil Nadu,
                                India
                            </p>

                        </div>

                    </div>

                </aside>

            </section>

            {/* ================= BUSINESS HOURS ================= */}

            <section className="grid gap-8 lg:grid-cols-2">

                {/* Business Hours */}

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Business Hours
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Our support team is available during the following
                        business hours.
                    </p>

                    <div className="mt-8 divide-y divide-[#E5E7EB]">

                        {[
                            ["Monday", "09:00 AM - 06:00 PM"],
                            ["Tuesday", "09:00 AM - 06:00 PM"],
                            ["Wednesday", "09:00 AM - 06:00 PM"],
                            ["Thursday", "09:00 AM - 06:00 PM"],
                            ["Friday", "09:00 AM - 06:00 PM"],
                            ["Saturday", "Closed"],
                            ["Sunday", "Closed"],
                        ].map(([day, time]) => (

                            <div
                                key={day}
                                className="flex items-center justify-between py-4"
                            >

                                <span className="font-medium text-[#161D16]">
                                    {day}
                                </span>

                                <span
                                    className={`${inter.className} text-[#667085]`}
                                >
                                    {time}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

                {/* FAQ Preview */}

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Frequently Asked Questions
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Here are the questions we receive most often.
                    </p>

                    <div className="mt-8 space-y-4">

                        {[
                            "How long does support usually take?",
                            "Can I request a refund?",
                            "How do I become a verified creator?",
                            "How can I report a project?",
                        ].map((item) => (

                            <div
                                key={item}
                                className="rounded-xl border border-[#E5E7EB] bg-[#FAFFFA] p-5 transition hover:border-[#027A48]"
                            >

                                <h3
                                    className={`${geist.className} text-lg font-semibold text-[#161D16]`}
                                >
                                    {item}
                                </h3>

                                <p
                                    className={`${inter.className} mt-2 text-sm leading-7 text-[#667085]`}
                                >
                                    Visit our Help Center or contact our
                                    support team for detailed assistance.
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="overflow-hidden rounded-3xl bg-linear-to-r from-[#027A48] to-[#039855] p-10 lg:p-14">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-white lg:text-5xl`}
                    >
                        Need Immediate Assistance?
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100`}
                    >
                        Our dedicated support team is committed to helping
                        creators, students, and organizations get the most out
                        of ProjectVerse. We're only one message away.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                            Browse Help Center
                        </Button>

                        <Button
                            className="rounded-xl border border-white bg-transparent px-8 text-white"
                            rightIcon={<ArrowRight size={18} />}
                        >
                            Explore Projects
                        </Button>

                    </div>

                </div>

            </section>

        </main>
    );
}