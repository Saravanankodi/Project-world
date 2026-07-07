"use client";

import { Plus } from "lucide-react";
import { geist, inter } from "@/lib/fonts";
import LanguageInputRow from "./LanguageInputRow";

interface Language {
    language: string;
    percentage: string;
}

interface TechnologyStackProps {
    languages: Language[];
    onAdd: () => void;
    onChange: (
        index: number,
        field: "language" | "percentage",
        value: string
    ) => void;
    onRemove: (index: number) => void;
}

export default function TechnologyStack({
    languages,
    onAdd,
    onChange,
    onRemove,
}: TechnologyStackProps) {
    return (
        <div className="rounded-2xl border border-[#EAECF0] p-6 ">
            {/* Header */}
            <div className="flex items-center justify-between">

                <h3
                    className={`${geist.className} text-lg font-normal text-[#161D16]`}
                >
                    Technology Stack
                </h3>


                <button
                    type="button"
                    onClick={onAdd}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D0D5DD] hover:bg-[#F9FAFB]"
                >
                    <Plus size={18} />
                </button>
            </div>
            <div className={`${inter.className} mt-1 text-sm text-[#161D16] font-semibold`}>
                Languages
            </div>

            {/* Languages */}
            <div className="mt-4 space-y-5 overflow-auto px-4 max-h-45">
                {languages.map((item, index) => (
                    <LanguageInputRow
                        key={index}
                        item={item}
                        index={index}
                        showRemove={languages.length > 1}
                        onChange={onChange}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
}