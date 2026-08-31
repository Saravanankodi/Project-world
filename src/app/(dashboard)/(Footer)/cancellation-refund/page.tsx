"use client";

import { geist, inter } from "@/lib/fonts";
import Button from "@/components/Button/Button";
import {
    Sparkles,
    RefreshCcw,
    CreditCard,
    Download,
    AlertCircle,
    ShieldCheck,
    Mail,
    ArrowRight,
    CheckCircle2,
    Clock,
    FileText,
} from "lucide-react";

const refundCases = [
    {
        icon: <Download className="h-7 w-7 text-[#027A48]" />,
        title: "Access or Download Issues",
        description:
            "If you have completed a purchase but cannot access or download the purchased digital project, please contact our support team so we can investigate and resolve the issue.",
    },
    {
        icon: <AlertCircle className="h-7 w-7 text-[#B54708]" />,
        title: "Project Not as Described",
        description:
            "If a purchased project is materially different from the description or resources presented at the time of purchase, you may contact us with the relevant purchase details for review.",
    },
    {
        icon: <CreditCard className="h-7 w-7 text-[#175CD3]" />,
        title: "Duplicate Payment",
        description:
            "If you were charged more than once for the same purchase due to a duplicate transaction, contact us with your transaction details so we can verify the payment.",
    },
    {
        icon: <ShieldCheck className="h-7 w-7 text-[#6938EF]" />,
        title: "Technical Problems",
        description:
            "If a technical issue prevents you from reasonably accessing a purchased project and the issue cannot be resolved by our support team, the purchase may be considered for a refund.",
    },
];

const requestSteps = [
    "Contact our support team using your registered email address.",
    "Provide your order or transaction ID and the email used for the purchase.",
    "Explain the reason for your cancellation or refund request.",
    "Provide any relevant screenshots or supporting information when necessary.",
];

export default function CancellationRefundPage() {
    return (
        <main className="mx-auto max-w-7xl space-y-12 px-4 py-8 lg:px-8">

            {/* ================= HERO ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-gradient-to-br from-[#F5FAF5] to-white p-8 lg:p-14">

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    <div>

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ECFDF3] px-4 py-2">

                            <Sparkles className="h-4 w-4 text-[#027A48]" />

                            <span
                                className={`${inter.className} text-sm font-semibold text-[#027A48]`}
                            >
                                Cancellation & Refunds
                            </span>

                        </div>

                        <h1
                            className={`${geist.className} text-5xl font-bold leading-tight text-[#161D16]`}
                        >
                            Simple.
                            <br />
                            <span className="text-[#027A48]">
                                Transparent.
                            </span>{" "}
                            Fair.
                        </h1>

                        <p
                            className={`${inter.className} mt-8 max-w-xl text-lg leading-8 text-[#667085]`}
                        >
                            We want every ProjectVerse purchase to be a positive
                            experience. If you experience an issue with a purchase,
                            payment or digital project, our support team is available
                            to review your request and help find an appropriate solution.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <a href="mailto:support@projectverse.com">

                                <Button
                                    className="rounded-xl bg-[#027A48] px-8 text-white"
                                    leftIcon={<Mail size={18} />}
                                >
                                    Request Support
                                </Button>

                            </a>

                            <a href="#refund-process">

                                <Button
                                    className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                                    rightIcon={<ArrowRight size={18} />}
                                >
                                    Refund Process
                                </Button>

                            </a>

                        </div>

                    </div>

                    <div className="flex justify-center">

                        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#ECFDF3]">

                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#DCFCE7]">

                                <RefreshCcw className="h-28 w-28 text-[#027A48]" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= LAST UPDATED ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Cancellation & Refund Policy
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
                            Every request is reviewed fairly.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= OVERVIEW ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <FileText className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Our Refund Approach
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            ProjectVerse provides digital projects and related
                            online services. Because digital purchases may provide
                            access to downloadable or online content, cancellation
                            and refund requests are reviewed based on the nature
                            of the purchase, the circumstances of the request and
                            the applicable terms presented at the time of purchase.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            We encourage customers to contact our support team as
                            soon as they experience a problem with a purchase.
                            Our goal is to resolve legitimate issues as quickly
                            and fairly as possible.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= ELIGIBLE CASES ================= */}

            <section>

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        When You Can Request a Refund
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        The following situations may be considered when reviewing
                        a cancellation or refund request.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {refundCases.map((item) => (

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


            {/* ================= CANCELLATION ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white">

                        <RefreshCcw className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Cancellation Requests
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            If you wish to cancel a purchase, please contact
                            ProjectVerse support as soon as possible with your
                            order or transaction information.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            For digital products, cancellation may depend on
                            whether the purchased content has already been
                            accessed, downloaded or otherwise delivered to your
                            account. Each request will be reviewed according to
                            the circumstances of the purchase.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= NON REFUNDABLE ================= */}

            <section>

                <div className="mb-8">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        Situations That May Not Qualify
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Some circumstances may not qualify for a refund.
                    </p>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    {[
                        "The purchased digital content has already been successfully accessed or downloaded and no qualifying issue exists.",
                        "The request is based solely on a change of mind after the purchase.",
                        "The customer does not provide sufficient information to verify the transaction.",
                        "The issue is caused by circumstances outside ProjectVerse that can reasonably be resolved by the customer.",
                        "The request involves misuse, unauthorized sharing or violation of our Terms & Conditions.",
                        "The purchase was made using another person's account or payment method without authorization.",
                    ].map((item) => (

                        <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-[#D8E3D3] bg-white p-5"
                        >

                            <CheckCircle2 className="mt-0.5 shrink-0 text-[#027A48]" />

                            <span
                                className={`${inter.className} leading-7 text-[#344054]`}
                            >
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= PAYMENT ISSUES ================= */}

            <section className="grid gap-8 lg:grid-cols-2">

                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <CreditCard className="h-7 w-7 text-[#027A48]" />

                    </div>

                    <h2
                        className={`${geist.className} mt-6 text-3xl font-bold text-[#161D16]`}
                    >
                        Payment Issues
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        If your payment was completed but your order or project
                        access was not updated correctly, please contact our
                        support team with your transaction details.
                    </p>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        Our team will verify the transaction and help resolve
                        the issue or determine the appropriate next step.
                    </p>

                </div>


                <div className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5FAF5]">

                        <ShieldCheck className="h-7 w-7 text-[#175CD3]" />

                    </div>

                    <h2
                        className={`${geist.className} mt-6 text-3xl font-bold text-[#161D16]`}
                    >
                        Duplicate Transactions
                    </h2>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        If you believe that you have been charged multiple times
                        for the same purchase, contact us with the relevant
                        transaction IDs.
                    </p>

                    <p
                        className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                    >
                        After verifying the duplicate transaction, we will
                        communicate the appropriate resolution to you.
                    </p>

                </div>

            </section>


            {/* ================= REFUND PROCESS ================= */}

            <section
                id="refund-process"
                className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm"
            >

                <div className="mb-10">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-[#161D16]`}
                    >
                        How to Request a Refund
                    </h2>

                    <p
                        className={`${inter.className} mt-3 text-[#667085]`}
                    >
                        Follow these steps when submitting a cancellation or
                        refund request.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {requestSteps.map((step, index) => (

                        <div
                            key={step}
                            className="flex items-start gap-5 rounded-2xl bg-[#F5FAF5] p-6"
                        >

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#027A48] text-sm font-bold text-white">
                                {index + 1}
                            </div>

                            <p
                                className={`${inter.className} leading-7 text-[#344054]`}
                            >
                                {step}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= PROCESSING ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-[#F5FAF5] p-8">

                <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white">

                        <Clock className="h-8 w-8 text-[#027A48]" />

                    </div>

                    <div>

                        <h2
                            className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                        >
                            Refund Processing
                        </h2>

                        <p
                            className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                        >
                            Once a refund request has been reviewed and approved,
                            the refund will be initiated through the applicable
                            payment method or payment provider.
                        </p>

                        <p
                            className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                        >
                            The time required for the refunded amount to appear
                            in your account may vary depending on the payment
                            provider, bank or financial institution involved.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= DIGITAL DELIVERY ================= */}

            <section className="rounded-3xl border border-[#D8E3D3] bg-white p-8 shadow-sm">

                <h2
                    className={`${geist.className} text-3xl font-bold text-[#161D16]`}
                >
                    Digital Product Delivery
                </h2>

                <p
                    className={`${inter.className} mt-5 leading-8 text-[#667085]`}
                >
                    ProjectVerse primarily provides digital products and
                    downloadable project resources. After a successful payment,
                    eligible purchases may become available through the
                    customer&apos;s ProjectVerse account or through the delivery
                    method described on the relevant product page.
                </p>

                <p
                    className={`${inter.className} mt-4 leading-8 text-[#667085]`}
                >
                    If you complete a payment but do not receive access to the
                    purchased content, please contact support so that we can
                    investigate the transaction and assist you.
                </p>

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
                        Need Help With a Purchase?
                    </h2>

                    <p
                        className={`${inter.className} mx-auto mt-5 max-w-2xl leading-8 text-[#667085]`}
                    >
                        Contact our support team if you have questions about
                        payments, purchases, cancellations, project access or
                        refund requests.
                    </p>

                    <div className="mt-8 space-y-2">

                        <a
                            href="mailto:support@projectverse.com"
                            className="block font-semibold text-[#027A48] hover:underline"
                        >
                            support@projectverse.com
                        </a>

                        <p className="text-[#667085]">
                            Monday - Friday, 09:00 AM - 06:00 PM
                        </p>

                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <a href="mailto:support@projectverse.com">

                            <Button
                                className="rounded-xl bg-[#027A48] px-8 text-white"
                                leftIcon={<Mail size={18} />}
                            >
                                Contact Support
                            </Button>

                        </a>

                        <a href="/contact">

                            <Button
                                className="rounded-xl border border-[#D8E3D3] bg-white px-8 text-[#344054]"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Contact Us
                            </Button>

                        </a>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="overflow-hidden rounded-3xl bg-linear-to-r from-[#027A48] to-[#039855] p-10 lg:p-16">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className={`${geist.className} text-4xl font-bold text-white lg:text-5xl`}
                    >
                        We&apos;re Here to Help
                    </h2>

                    <p
                        className={`${inter.className} mt-6 text-lg leading-8 text-green-100`}
                    >
                        If something went wrong with your ProjectVerse purchase,
                        reach out to our team. We&apos;ll review your request and
                        work with you toward an appropriate resolution.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <a href="/contact">

                            <Button className="rounded-xl bg-white px-8 text-[#027A48]">
                                Contact Us
                            </Button>

                        </a>

                        <a href="/terms-and-conditions">

                            <Button
                                className="rounded-xl border border-white bg-transparent px-8 text-white"
                                rightIcon={<ArrowRight size={18} />}
                            >
                                View Terms
                            </Button>

                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}
