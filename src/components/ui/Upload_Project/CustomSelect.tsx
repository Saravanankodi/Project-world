"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { inter } from "@/lib/fonts";

interface CustomSelectProps {
    label: string;
    placeholder: string;
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
}

export default function CustomSelect({
    label,
    placeholder,
    options,
    value = "",
    onChange,
}: CustomSelectProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(value);

    const selectOption = (option: string) => {
        setSelected(option);
        onChange?.(option);
        setOpen(false);
    };

    return (
        <div className="relative flex flex-col gap-2">
            <label
                className={`${inter.className} text-sm font-semibold text-[#161D16]`}
            >
                {label}
            </label>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex h-12 w-full items-center justify-between rounded-xl border border-[#D8E3D8] bg-white px-4 text-sm text-left shadow-sm transition hover:border-[#22C55E]">
                <span
                    className={
                        selected
                            ? "text-[#161D16]"
                            : "text-[#98A2B3]"
                    }
                >
                    {selected || placeholder}
                </span>

                <ChevronDown
                    size={18}
                    className={`transition ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div
                    className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-xl">
                    {options.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => selectOption(item)}
                            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-[#F3F9F3]">

                            {item}

                            {selected === item && (
                                <Check
                                    size={16}
                                    className="text-[#22C55E]"
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}