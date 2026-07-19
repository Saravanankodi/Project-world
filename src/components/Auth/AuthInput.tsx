import { geist,inter } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

interface AuthInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: string | React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function AuthInput({
    label,
    error,
    id,
    leftIcon,
    rightIcon,
    ...props
}: AuthInputProps) {
    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className={`${geist.className} block mb-2 text-[14px] font-medium text-[#374151]`}
            >
                {label}
            </label>

            <div className="relative">
                {leftIcon && typeof(leftIcon) == 'string' && (
                    <Image
                        src={leftIcon.toString()}
                        alt=""
                        width={18}
                        height={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                    />
                )}
                {
                    leftIcon && (
                        leftIcon
                    )
                }

                <input
                    id={id}
                    {...props}
                    className={`w-full h-11  rounded-md border bg-[#F9FFF8] placeholder-[#6B7280] text-[#161D16]
          ${leftIcon ? "pl-10" : "pl-4"}
          ${rightIcon ? "pr-10" : "pr-4"}
          text-sm ${inter.className} outline-none transition
          ${error
                            ? "border-red-500"
                            : "border-[#D7E6D6] focus:border-[#22C55E]"
                        }`}
                />

                {rightIcon && (
                    <div className="absolute  right-3 top-1/2  -translate-y-1/2  cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>

            {error && (
                <p className="text-xs text-red-500 mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}