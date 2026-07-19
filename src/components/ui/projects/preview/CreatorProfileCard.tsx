import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { BadgeCheck } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface CreatorProfileCardProps {
    creatorName: string;
    creatorRole: string;
    projects: number;
    rating: number;
    avatar: string;
    profileHref: string;
}

const CreatorProfileCard = ({
    creatorName,
    creatorRole,
    projects,
    rating,
    avatar,
    profileHref,
}: CreatorProfileCardProps) => {
    return (
        <section className="w-full rounded-2xl border border-[#D8E3D3] bg-[#BCCBB94D] p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                    <Image
                        src={avatar}
                        alt={creatorName}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                    />

                    <div>

                        <div className="flex items-center gap-2">

                            <h2 className={` ${geist.className} text-sm font-bold text-[#161D16]`}>
                                {creatorName}
                            </h2>

                            <BadgeCheck
                                size={18}
                                fill="#027A48"
                                className="text-[#027A48]"
                            />

                        </div>

                        <p className={`${inter.className} text-[10px] text-[#3D4A3D]`}>
                            {creatorRole}
                        </p>

                        <div className={`${inter.className} mt-2 flex gap-2 text-[10px] text-[#3D4A3D]`}>
                            <span>{projects} projects</span>
                            <span>•</span>
                            <span>{rating} rating</span>
                        </div>

                    </div>

                </div>

                <Link href={profileHref}>
                    <Button className="border border-[#006E2F] text-[#006e2f] font-bold text-xs rounded-xl px-6">
                        View Profile
                    </Button>
                </Link>

            </div>
        </section>
    );
};

export default CreatorProfileCard;