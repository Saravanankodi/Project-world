import { geist,inter } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavLinkProps{
    id:string;
    href:string;
    label?: string;
    error?: string;
    leftIcon?: string | React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function NavLink({
    label,
    error,
    id,
    href,
    leftIcon,
    rightIcon,
    ...props
}: NavLinkProps) {
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
                <div className={`w-full h-11 flex items-center rounded-md border bg-[#F9FFF8]
                    ${leftIcon ? "pl-10" : "pl-4"}
                    ${rightIcon ? "pr-10" : "pr-4"}
                    text-sm ${inter.className} outline-none transition
                    `}>
                    <Link
                        href={href}
                        className="text-sm text-[#161D16] "
                    >
                        {href}
                    </Link>
                </div>
                {rightIcon && (
                    <div className="absolute  right-3 top-1/2  -translate-y-1/2  cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>
        </div>
    );
}