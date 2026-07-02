"use client";

import { inter } from "@/lib/fonts";

interface FormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function FormInput({
    label,
    className = "",
    ...props
}: FormInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className={`${inter.className} text-sm font-semibold text-[#161D16]`}>
                {label}
            </label>

            <input
                {...props}
                className={` h-12 rounded-xl border border-[#D8E3D8] bg-white px-4 text-sm outline-none transition placeholder:text-[#98A2B3] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 ${className}
                `}
            />
        </div>
    );
}