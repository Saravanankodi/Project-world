"use client";

import { geist, inter } from "@/lib/fonts";

interface UploadHeaderProps {
    title: string;
    description: string;
}

export default function UploadHeader({
    title,
    description,
}: UploadHeaderProps) {
    return (
        <div className="mb-8">
            <h1
                className={`
                    ${geist.className}
                    text-2xl sm:text-[32px]
                    leading-none
                    font-bold
                    text-[#006E2F]
                `}
            >
                {title}
            </h1>

            <p
                className={`
                    ${inter.className}
                    mt-3
                    text-sm sm:text-base
                    font-normal
                    text-[#565E74]
                `}
            >
                {description}
            </p>
        </div>
    );
}