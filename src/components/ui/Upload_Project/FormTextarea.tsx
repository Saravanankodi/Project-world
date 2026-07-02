"use client";

import { inter } from "@/lib/fonts";

interface Props
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export default function FormTextarea({
    label,
    className = "",
    ...props
}: Props) {
    return (
        <div className="flex flex-col gap-2">

            <label className={`${inter.className} text-sm font-semibold text-[#161D16]`} >
                {label}
            </label>

            <textarea
                rows={6}
                {...props}
                className={` rounded-xl border border-[#D8E3D8] bg-white p-4 text-sm outline-none resize-none placeholder:text-[#98A2B3] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 ${className}
                `}
            />

        </div>
    );
}