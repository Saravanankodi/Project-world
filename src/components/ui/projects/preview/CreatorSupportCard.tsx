import Link from "next/link";
import Button from "@/components/Button/Button";
import { Lock, ShieldCheck } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface CreatorSupportCardProps {
    creatorName: string;
    availability: string;
    chatHref: string;
}

const CreatorSupportCard = ({
    creatorName,
    availability,
    chatHref,
}: CreatorSupportCardProps) => {
    return (
        <div className="space-y-2">

            {/* Mentorship */}

            <section className="rounded-2xl border border-[#D8E3D3] bg-white p-4">

                <h2 className={`${geist.className} text-sm font-bold text-[#161D16]`}>
                    Learn directly from {creatorName}
                </h2>

                <p className={`${inter.className} mt-2 text-xs text-[#3D4A3D] leading-7`}>
                    Get personalized guidance on implementing this
                    bridge project or custom mechatronics advice.
                </p>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-[#F7FCF6] p-5">

                    <span className={`${inter.className} text-[10px] font-medium text-[#3D4A3D]`}>
                        Availability
                    </span>

                    <span className={`${inter.className} text-[10px] font-medium text-[#3D4A3D]`}>
                        {availability}
                    </span>

                </div>

                <Link href={chatHref}>
                    <Button
                        leftIcon={<Lock size={18} />}
                        className={`${geist.className} mt-6 h-14 w-full rounded-xl bg-[#DCE5D9] text-sm text-[#3D4A3D]`}
                    >
                        Chat Creator
                    </Button>
                </Link>

            </section>

            {/* Secure Access */}

            <section className="rounded-2xl border border-[#D8E3D3] bg-[#F7FCF6] p-4">

                <div className="flex gap-4">

                    <ShieldCheck
                        size={28}
                        className="mt-1 text-[#027A48]"
                    />

                    <div>

                        <h2 className={` ${geist.className} text-sm font-bold text-[#006E2F]`}>
                            Secure Project Access
                        </h2>

                        <p className={` ${inter.className} mt-2 leading-7 text-[11px] text-[#3D4A3D]`}>
                            Immediate download. 7-day technical support included. Source
                            code verified by ProjectVerse.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default CreatorSupportCard;