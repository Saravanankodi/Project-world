"use client";

import Link from "next/link";
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
    Clock,
    FileText,
    CreditCard,
    RefreshCcw,
} from "lucide-react";

const contactCards = [
    {
        icon: <Mail className="h-7 w-7 text-[#027A48]" />,
        title: "Email Support",
        description: "support@projectverse.com",
        href: "mailto:support@projectverse.com",
    },
    {
        icon: <Phone className="h-7 w-7 text-[#175CD3]" />,
        title: "Phone",
        description: "+91 98765 43210",
        href: "tel:+919876543210",
    },
    {
        icon: <MapPin className="h-7 w-7 text-[#B54708]" />,
        title: "Business Location",
        description: "Chennai, Tamil Nadu, India",
        href: "#business-address",
    },
    {
        icon: <Clock className="h-7 w-7 text-[#6938EF]" />,
        title: "Support Hours",
        description: "Monday - Friday, 09:00 AM - 06:00 PM",
        href: "#business-hours",
    },
];

const businessHours = [
    ["Monday", "09:00 AM - 06:00 PM"],
    ["Tuesday", "09:00 AM - 06:00 PM"],
    ["Wednesday", "09:00 AM - 06:00 PM"],
    ["Thursday", "09:00 AM - 06:00 PM"],
    ["Friday", "09:00 AM - 06:00 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
];

export default function ContactPage() {
    return (
        <main className="mx-auto space-y-12 p-4">

            {/* ================= HERO ================= */}

            <section className="overflow-hidden rounded-3xl border border-[#D8E3D3] bg-gradient-to-br from-[#F4FBF5] via-white to-[#F9FFF9]">

                <div className="grid p-4 sm:p-6 md:grid-cols-2 xl:gap-12">

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
                            className={`${geist.className} text-4xl font-bold leading-tight text-[#161D16] xl:text-5xl`}
                        >
                            We&apos;re Here to
                            <span className="text-[#027A48]">
                                {" "}Help You
                            </span>
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            Have a question about your account, order, payment,
                            refund, project or any of our services? Contact the
                            ProjectVerse support team and we&apos;ll be happy to assist you.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a href="mailto:support@projectverse.com">
                                <Button className="rounded-xl bg-[#027A48] px-7 text-white">
                                    Contact Support
                                </Button>
                            </a>

                            <Link href="#contact-information">
                                <Button
                                    className="rounded-xl border border-[#D8E3D3] bg-white px-7 text-[#344054]"
                                    rightIcon={<ArrowRight size={18} />}
                                >
                                    Contact Information
                                </Button>
                            </Link>

                        </div>

                    </div>

                    <div className="hidden items-center justify-center md:flex">

                        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#ECFDF3]">

                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <MessageCircle className="h-28 w-28 text-[#027A48]" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BUSINESS CONTACT INFORMATION ================= */}

            <section id="contact-information">

                <div className="mb-8">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Contact Information
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        You can contact ProjectVerse through any of the
                        following channels.
                    </p>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {contactCards.map((card) => (

                        <a
                            key={card.title}
                            href={card.href}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-7 transition hover:-translate-y-1 hover:border-[#027A48] hover:shadow-lg"
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

                        </a>

                    ))}

                </div>

            </section>


            {/* ================= BUSINESS DETAILS ================= */}

            <section
                id="business-address"
                className="grid gap-8 lg:grid-cols-2"
            >

                {/* COMPANY INFORMATION */}

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                    <div className="flex items-start gap-5">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                            <FileText className="h-8 w-8 text-[#027A48]" />

                        </div>

                        <div>

                            <h2
                                className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                            >
                                ProjectVerse
                            </h2>

                            <p
                                className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                            >
                                ProjectVerse provides a digital marketplace and
                                online platform for creators, developers,
                                researchers and students.
                            </p>

                        </div>

                    </div>

                    <div className="my-8 h-px bg-[#E5E7EB]" />

                    <div className="space-y-6">

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Business Name
                            </p>

                            <p className="mt-1 text-[#667085]">
                                ProjectVerse
                            </p>

                        </div>

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Support Email
                            </p>

                            <a
                                href="mailto:support@projectverse.com"
                                className="mt-1 block text-[#027A48] hover:underline"
                            >
                                support@projectverse.com
                            </a>

                        </div>

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Business Email
                            </p>

                            <a
                                href="mailto:business@projectverse.com"
                                className="mt-1 block text-[#027A48] hover:underline"
                            >
                                business@projectverse.com
                            </a>

                        </div>

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Phone
                            </p>

                            <a
                                href="tel:+919876543210"
                                className="mt-1 block text-[#027A48] hover:underline"
                            >
                                +91 98765 43210
                            </a>

                        </div>

                        <div>

                            <p className="text-sm font-semibold text-[#161D16]">
                                Business Location
                            </p>

                            <p className="mt-1 text-[#667085]">
                                Chennai,
                                <br />
                                Tamil Nadu,
                                <br />
                                India
                            </p>

                        </div>

                    </div>

                </div>


                {/* CUSTOMER SUPPORT */}

                <div className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">

                        <MessageCircle className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <h2
                        className={`${geist.className} mt-6 text-3xl font-bold text-[#161D16]`}
                    >
                        Customer Support
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        Our support team can assist you with questions related
                        to accounts, purchases, payments, order status,
                        cancellations, refunds and other ProjectVerse services.
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-center gap-3 rounded-2xl bg-white p-4">

                            <Mail className="text-[#027A48]" />

                            <div>
                                <p className="text-sm font-semibold text-[#161D16]">
                                    Email Support
                                </p>

                                <a
                                    href="mailto:support@projectverse.com"
                                    className="text-[#027A48] hover:underline"
                                >
                                    support@projectverse.com
                                </a>
                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-white p-4">

                            <Phone className="text-[#175CD3]" />

                            <div>
                                <p className="text-sm font-semibold text-[#161D16]">
                                    Phone Support
                                </p>

                                <a
                                    href="tel:+919876543210"
                                    className="text-[#175CD3] hover:underline"
                                >
                                    +91 98765 43210
                                </a>
                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-white p-4">

                            <Clock className="text-[#B54708]" />

                            <div>
                                <p className="text-sm font-semibold text-[#161D16]">
                                    Support Hours
                                </p>

                                <p className="text-[#667085]">
                                    Monday - Friday
                                </p>

                                <p className="text-sm text-[#667085]">
                                    09:00 AM - 06:00 PM
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT FORM ================= */}

            <section className="grid gap-8 lg:grid-cols-3">

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8 lg:col-span-2">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Send Us a Message
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        For account, order, payment or support questions,
                        send us a message using the form below.
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
                                placeholder="Payment, order, refund or general question"
                                className="h-12 w-full rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-4 outline-none focus:border-[#027A48]"
                            />

                        </div>

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm font-medium text-[#344054]">
                                Message
                            </label>

                            <textarea
                                rows={7}
                                placeholder="Tell us how we can help..."
                                className="w-full rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] p-4 outline-none focus:border-[#027A48]"
                            />

                        </div>

                    </div>

                    <a href="mailto:support@projectverse.com">

                        <Button
                            className="mt-8 rounded-xl bg-[#027A48] px-8 text-white"
                            leftIcon={<Send size={18} />}
                        >
                            Send Message
                        </Button>

                    </a>

                </div>


                {/* SUPPORT SUMMARY */}

                <aside className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <h2
                        className={`${geist.className} text-2xl font-bold text-[#161D16]`}
                    >
                        How We Can Help
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        Contact our team for assistance with any of the
                        following:
                    </p>

                    <div className="mt-8 space-y-4">

                        {[
                            "Account and login support",
                            "Orders and purchases",
                            "Payment-related questions",
                            "Cancellation requests",
                            "Refund requests",
                            "Technical support",
                            "General enquiries",
                        ].map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >

                                <div className="h-2 w-2 rounded-full bg-[#027A48]" />

                                <span
                                    className={`${inter.className} text-[#344054]`}
                                >
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </aside>

            </section>


            {/* ================= BUSINESS HOURS ================= */}

            <section
                id="business-hours"
                className="grid gap-8 lg:grid-cols-2"
            >

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                            <Clock className="h-7 w-7 text-[#027A48]" />

                        </div>

                        <div>

                            <h2
                                className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                            >
                                Business Hours
                            </h2>

                            <p
                                className={`${inter.className} mt-1 text-[#667085]`}
                            >
                                Customer support availability
                            </p>

                        </div>

                    </div>

                    <div className="mt-8 divide-y divide-[#E5E7EB]">

                        {businessHours.map(([day, time]) => (

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


                {/* PAYMENT / REFUND SUPPORT */}

                <div className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Payments & Refunds
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        If you have a question about a payment, transaction,
                        cancellation or refund, please contact our support
                        team using the details provided above.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                        <Link
                            href="/cancellation-and-refund"
                            className="flex items-center gap-3 rounded-2xl bg-white p-5 transition hover:shadow-md"
                        >

                            <RefreshCcw className="text-[#027A48]" />

                            <div>

                                <p className="font-semibold text-[#161D16]">
                                    Refund Policy
                                </p>

                                <p className="mt-1 text-sm text-[#667085]">
                                    View cancellation & refund rules
                                </p>

                            </div>

                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="flex items-center gap-3 rounded-2xl bg-white p-5 transition hover:shadow-md"
                        >

                            <CreditCard className="text-[#175CD3]" />

                            <div>

                                <p className="font-semibold text-[#161D16]">
                                    Terms & Conditions
                                </p>

                                <p className="mt-1 text-sm text-[#667085]">
                                    View purchase terms
                                </p>

                            </div>

                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= POLICY LINKS ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="text-center">

                    <h2
                        className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                    >
                        Important Information
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-3 max-w-2xl text-[#667085]`}
                    >
                        Please review our policies for information about
                        purchases, payments, shipping, privacy, cancellations
                        and refunds.
                    </p>

                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <Link
                        href="/privacy"
                        className="rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-5 py-3 font-medium text-[#027A48] transition hover:border-[#027A48]"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        href="/terms-and-conditions"
                        className="rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-5 py-3 font-medium text-[#027A48] transition hover:border-[#027A48]"
                    >
                        Terms & Conditions
                    </Link>

                    <Link
                        href="/shipping-policy"
                        className="rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-5 py-3 font-medium text-[#027A48] transition hover:border-[#027A48]"
                    >
                        Shipping Policy
                    </Link>

                    <Link
                        href="/cancellation-and-refund"
                        className="rounded-xl border border-[#D8E3D3] bg-[#FAFFFA] px-5 py-3 font-medium text-[#027A48] transition hover:border-[#027A48]"
                    >
                        Cancellation & Refunds
                    </Link>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#027A48] to-[#039855] p-10 lg:p-14">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-white lg:text-5xl`}
                    >
                        Have a Question?
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100`}
                    >
                        Our support team is ready to help with your account,
                        orders, payments, refunds and other ProjectVerse
                        enquiries.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <a href="mailto:support@projectverse.com">

                            <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                                Email Support
                            </Button>

                        </a>

                        <a href="tel:+919876543210">

                            <Button
                                className="rounded-xl border border-white bg-transparent px-8 text-white"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Call Us
                            </Button>

                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}
