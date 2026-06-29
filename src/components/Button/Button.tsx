"use client";

import { ButtonProps } from "@/types/types";

const Button = ({
    children,
    leftIcon,
    rightIcon,
    className = "",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`inline-flex items-center justify-center cursor-pointer gap-2 ${className} px-3 py-1 md:px-6 md:py-3 rounded-xl`}
            {...props}
        >
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
        </button>
    );
};

export default Button;