"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

interface Props {
    label: string;
    placeholder: string;
    value: string[];
    onChange: (tags: string[]) => void;
}

export default function TagInput({
    label,
    placeholder,
    value: tags,
    onChange,
}: Props) {
    const [inputValue, setInputValue] = useState("");

    const addTag = () => {
        const tag = inputValue.trim();

        if (!tag || tags.includes(tag)) return;

        onChange([...tags, tag]);
        setInputValue("");
    };

    const removeTag = (tag: string) => {
        onChange(tags.filter((t) => t !== tag));
    };

    return (
        <div className="flex w-full max-h-12 flex-col gap-2">
            <label
                className={`${geist.className} text-sm font-semibold text-[#161D16]`}
            >
                {label}
            </label>

            <div className="flex flex-wrap gap-2 rounded-xl border border-[#D8E3D8] bg-white p-3">

                {tags.map((tag) => (
                    <div
                        key={tag}
                        className={`${inter.className} flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3 py-1 text-base font-bold text-[#009741]`}
                    >
                        {tag}

                        <button
                            type="button"
                            onClick={() => removeTag(tag)}
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}

                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                        }
                    }}
                    placeholder={placeholder}
                    className={`${inter.className} min-w-30 flex-1 bg-transparent text-sm outline-none`}
                />
            </div>
        </div>
    );
}