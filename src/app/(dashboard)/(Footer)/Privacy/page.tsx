"use client";

import Link from "next/link";
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
    FileText,
    Eye,
} from "lucide-react";

const information = [
    {
        icon: <UserRound className="w-7 h-7 text-[#027A48]" />,
        title: "Personal Information",
        description:
            "We may collect information such as your name, email address, phone number, billing details and other information you provide when creating an account, placing an order or contacting us.",
    },
    {
        icon: <CreditCard className="w-7 h-7 text-[#175CD3]" />,
        title: "Payment & Order Information",
        description:
            "We collect order details, transaction references, payment status, invoices and purchase history needed to process orders, provide support and maintain transaction records.",
    },
    {
        icon: <Database className="w-7 h-7 text-[#B54708]" />,
        title: "Technical Information",
        description:
            "We may collect information such as your IP address, browser type, device type, operating system and website activity to maintain security and improve our website.",
    },
    {
        icon: <Cookie className="w-7 h-7 text-[#6938EF]" />,
        title: "Cookies & Usage Data",
        description:
            "We may use cookies and similar technologies to keep our website functioning, remember preferences, understand website usage and improve our services.",
    },
];

const security = [
    "HTTPS / SSL encrypted connections",
    "Secure authentication and account protection",
    "Secure payment processing through payment partners",
    "Regular monitoring of website and system security",
];

const rights = [
    {
        icon: <Eye className="w-7 h-7 text-[#027A48]" />,
        title: "Access Your Information",
        desc: "You may request information about the personal data we hold about you.",
    },
    {
        icon: <Database className="w-7 h-7 text-[#175CD3]" />,
        title: "Update Information",
        desc: "You may request correction or updating of inaccurate personal information.",
    },
    {
        icon: <Lock className="w-7 h-7 text-[#B54708]" />,
        title: "Request Deletion",
        desc: "Where applicable, you may request deletion of your personal information.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[#6938EF]" />,
        title: "Raise a Concern",
        desc: "You can contact us if you have questions or concerns about your personal data.",
    },
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
                            At ProjectVerse, we respect your privacy and are committed
                            to protecting the personal information you provide to us.
                            This Privacy Policy explains what information we collect,
                            how we use it and how we protect it when you use our
                            website, products and services.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link href="/contact">
                                <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                                    Contact Privacy Team
                                </Button>
                            </Link>

                            <Link href="#information-we-collect">
                                <Button
                                    className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                                    rightIcon={<ArrowRight size={18} />}
                                >
                                    Learn More
                                </Button>
                            </Link>

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


            {/* POLICY HEADER */}

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
                            Last Updated — August 2026
                        </p>

                    </div>

                    <div className="rounded-2xl bg-[#ECFDF3] px-6 py-4">

                        <p
                            className={`${inter.className} font-semibold text-[#027A48]`}
                        >
                            We respect and protect your personal information.
                        </p>

                    </div>

                </div>

            </section>


            {/* BUSINESS INFORMATION */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white">

                        <FileText className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            About This Policy
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            This Privacy Policy applies to ProjectVerse and its
                            website, products and services. By using our website or
                            purchasing our products or services, you acknowledge that
                            you have read and understood this Privacy Policy.
                        </p>

                        <div className="mt-5 space-y-2 text-[#344054]">

                            <p>
                                <strong>Business Name:</strong> TODO - Your Legal Business Name
                            </p>

                            <p>
                                <strong>Website:</strong> TODO - Your Website URL
                            </p>

                            <p>
                                <strong>Email:</strong> TODO - Your Support Email
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* OUR COMMITMENT */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F5FAF5]">

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
                            We collect and use personal information only for legitimate
                            business purposes such as creating and managing accounts,
                            processing purchases, providing customer support, improving
                            our website and services, preventing fraud and maintaining
                            website security.
                        </p>

                    </div>

                </div>

            </section>


            {/* INFORMATION WE COLLECT */}

            <section id="information-we-collect">

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Information We Collect
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        The information we collect depends on how you interact
                        with ProjectVerse.
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


            {/* HOW WE USE INFORMATION */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    How We Use Your Information
                </h2>

                <p
                    className={`${inter.className} mt-3 text-[#667085]`}
                >
                    We use the information we collect for purposes including:
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                    {[
                        "Create and manage your account",
                        "Process orders and payments",
                        "Provide products and services",
                        "Send order and transaction updates",
                        "Respond to customer support requests",
                        "Improve our website and services",
                        "Maintain website security",
                        "Prevent fraud, misuse and unauthorized activity",
                    ].map((item) => (

                        <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-[#F5FAF5] p-5"
                        >

                            <CheckCircle2 className="shrink-0 text-[#027A48]" />

                            <span
                                className={`${inter.className} text-[#344054]`}
                            >
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </section>


            {/* PAYMENT INFORMATION */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white">

                        <CreditCard className="h-8 w-8 text-[#175CD3]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Payments & Payment Information
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            Payments made through our website may be processed using
                            Razorpay or another payment service provider made available
                            by ProjectVerse.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            Payment service providers may collect and process payment
                            information required to complete a transaction. We do not
                            intentionally store complete card numbers, CVV numbers,
                            UPI PINs or other sensitive payment credentials on our
                            own servers.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            Payment transactions are subject to the applicable terms
                            and privacy policies of the payment service provider.
                        </p>

                    </div>

                </div>

            </section>


            {/* DATA SHARING */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Sharing of Information
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        We do not sell or rent your personal information.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {[
                        {
                            title: "Payment Providers",
                            description:
                                "Payment information may be shared with payment processors such as Razorpay when required to process your transaction.",
                        },
                        {
                            title: "Service Providers",
                            description:
                                "We may use trusted technology, hosting, analytics, email and other service providers necessary to operate our website.",
                        },
                        {
                            title: "Legal Requirements",
                            description:
                                "We may disclose information where required by applicable law, regulation, legal process or a lawful government request.",
                        },
                        {
                            title: "Security & Fraud Prevention",
                            description:
                                "Information may be processed when necessary to detect, investigate or prevent fraud, abuse or security incidents.",
                        },
                    ].map((item) => (

                        <div
                            key={item.title}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-7 shadow-sm"
                        >

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
                    We use reasonable technical and organisational measures to
                    protect personal information from unauthorized access,
                    alteration, disclosure or destruction.
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

                <p
                    className={`${inter.className} mt-6 text-sm leading-7 text-[#667085]`}
                >
                    No method of transmission or electronic storage is completely
                    secure. While we take reasonable steps to protect your
                    information, we cannot guarantee absolute security.
                </p>

            </section>


            {/* DATA RETENTION */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <Database className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Data Retention
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            We retain personal information for as long as reasonably
                            necessary to provide our services, maintain transaction
                            records, comply with applicable legal and accounting
                            requirements, resolve disputes and enforce our agreements.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            When information is no longer required, we may delete,
                            anonymize or securely dispose of it in accordance with
                            applicable requirements.
                        </p>

                    </div>

                </div>

            </section>


            {/* COOKIES */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F5FAF5]">

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
                            We may use cookies and similar technologies to keep
                            the website functioning, remember preferences, improve
                            performance and understand how visitors use our website.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            You may be able to control cookies through your browser
                            settings. Disabling certain cookies may affect some
                            website functionality.
                        </p>

                    </div>

                </div>

            </section>


            {/* YOUR RIGHTS */}

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
                        Depending on applicable law, you may have rights relating
                        to your personal information.
                    </p>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {rights.map((item) => (

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


            {/* THIRD PARTY SERVICES */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Third-Party Services
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        We may rely on third-party providers to help operate
                        ProjectVerse.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {[
                        {
                            name: "Razorpay",
                            description:
                                "Payment processing and transaction services.",
                        },
                        {
                            name: "Hosting Provider",
                            description:
                                "Website hosting, infrastructure and technical operations.",
                        },
                        {
                            name: "Analytics Services",
                            description:
                                "Website performance and usage analytics where enabled.",
                        },
                    ].map((service) => (

                        <div
                            key={service.name}
                            className="rounded-2xl border border-[#D8E3D3] bg-white p-6 shadow-sm transition hover:border-[#027A48] hover:shadow-lg"
                        >

                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                                <Server className="h-7 w-7 text-[#027A48]" />

                            </div>

                            <h3
                                className={`${geist.className} text-center text-lg font-semibold text-[#161D16]`}
                            >
                                {service.name}
                            </h3>

                            <p
                                className={`${inter.className} mt-3 text-center leading-7 text-[#667085]`}
                            >
                                {service.description}
                            </p>

                        </div>

                    ))}

                </div>

                <p
                    className={`${inter.className} mt-5 text-sm leading-7 text-[#667085]`}
                >
                    We only enable third-party services that are necessary for
                    operating and improving our website and services. The actual
                    providers used by ProjectVerse may change over time.
                </p>

            </section>


            {/* CHILDREN */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Children's Privacy
                </h2>

                <p
                    className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                >
                    Our services are not intended to knowingly collect personal
                    information from children where prohibited by applicable law.
                    If you believe that a child has provided personal information
                    to us improperly, please contact us so that we can review and
                    take appropriate action.
                </p>

            </section>


            {/* POLICY CHANGES */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Changes to This Privacy Policy
                </h2>

                <p
                    className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                >
                    We may update this Privacy Policy from time to time to reflect
                    changes to our services, technology, legal requirements or
                    business practices. Any updated version will be published on
                    this page with a revised "Last Updated" date.
                </p>

            </section>


            {/* CONTACT */}

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
                        If you have questions about this Privacy Policy or how
                        we handle personal information, please contact us.
                    </p>

                    <div className="mt-8 space-y-2">

                        <p className="font-semibold text-[#027A48]">
                            TODO - your privacy/support email
                        </p>

                        <p className="text-[#667085]">
                            TODO - your phone number
                        </p>

                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Link href="/contact">
                            <Button className="rounded-xl bg-[#027A48] px-8 text-white">
                                Contact Us
                            </Button>
                        </Link>

                        <Link href="/terms-and-conditions">
                            <Button
                                className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Terms & Conditions
                            </Button>
                        </Link>

                    </div>

                </div>

            </section>


            {/* RELATED POLICIES */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Related Policies
                </h2>

                <div className="mt-6 flex flex-wrap gap-4">

                    <Link
                        href="/terms-and-conditions"
                        className="rounded-xl bg-white px-5 py-3 font-medium text-[#027A48] transition hover:bg-[#ECFDF3]"
                    >
                        Terms & Conditions
                    </Link>

                    <Link
                        href="/shipping-policy"
                        className="rounded-xl bg-white px-5 py-3 font-medium text-[#027A48] transition hover:bg-[#ECFDF3]"
                    >
                        Shipping Policy
                    </Link>

                    <Link
                        href="/cancellation-and-refund"
                        className="rounded-xl bg-white px-5 py-3 font-medium text-[#027A48] transition hover:bg-[#ECFDF3]"
                    >
                        Cancellation & Refunds
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-5 py-3 font-medium text-[#027A48] transition hover:bg-[#ECFDF3]"
                    >
                        Contact Us
                    </Link>

                </div>

            </section>


            {/* CTA */}

            <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#027A48] to-[#039855] p-10 lg:p-16">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className={`${geist.className} text-5xl font-bold text-white`}
                    >
                        Your Privacy Matters
                    </h2>

                    <p
                        className={`${inter.className} mt-6 text-lg leading-8 text-green-100`}
                    >
                        We are committed to handling your personal information
                        responsibly and transparently.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Link href="/contact">
                            <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                                Contact Us
                            </Button>
                        </Link>

                        <Link href="/terms-and-conditions">
                            <Button
                                className="rounded-xl border border-white bg-transparent px-8 text-white"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                View Terms
                            </Button>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}
