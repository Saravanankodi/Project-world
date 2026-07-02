"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { inter } from "@/lib/fonts";

interface Props {
    label: string;
    placeholder: string;
}

export default function TagInput({
    label,
    placeholder,
}: Props) {

    const [tags, setTags] = useState<string[]>([]);
    const [value, setValue] = useState("");

    const addTag = () => {
        if (!value.trim()) return;

        setTags([...tags, value]);

        setValue("");
    };

    return (
        <div className="flex flex-col gap-2">

            <label
                className={`${inter.className} text-sm font-semibold text-[#161D16]`}
            >
                {label}
            </label>

            <div className="rounded-xl border border-[#D8E3D8] bg-white p-3">

                <div className="mb-2 flex flex-wrap gap-2">

                    {tags.map((tag) => (

                        <div
                            key={tag}
                            className="flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3 py-1 text-sm"
                        >
                            {tag}

                            <button
                                type="button"
                                onClick={() =>
                                    setTags(tags.filter((t) => t !== tag))
                                }
                            >
                                <X size={14} />
                            </button>

                        </div>

                    ))}

                </div>

                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), addTag())
                    }
                    placeholder={placeholder}
                    className="w-full outline-none text-sm"
                />

            </div>

        </div>
    );
}