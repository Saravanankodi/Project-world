"use client";

import { Trash2 } from "lucide-react";
import FormInput from "../Upload_Project/FormInput";

interface Language {
    language: string;
    percentage: string;
}

interface LanguageInputRowProps {
    item: {
        language: string;
        percentage: string;
    };
    index: number;
    onChange: (
        index: number,
        field: "language" | "percentage",
        value: string
    ) => void;
    onRemove: (index: number) => void;
    showRemove: boolean;
}

export default function LanguageInputRow({
    item,
    index,
    onChange,
    onRemove,
    showRemove,
}: LanguageInputRowProps) {
    return (
        <div className="grid grid-cols-[1fr_150px_auto] gap-4 items-end">
            <FormInput
                label="Programming Language"
                placeholder="React"
                value={item.language}
                onChange={(e) =>
                    onChange(index, "language", e.target.value)
                }
            />

            <FormInput
                label="Usage %"
                type="number"
                min={0}
                max={100}
                placeholder="40"
                value={item.percentage}
                onChange={(e) =>
                    onChange(index, "percentage", e.target.value)
                }
            />

            {showRemove && (
                <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 text-red-500 hover:bg-red-50"
                >
                    <Trash2 size={18} />
                </button>
            )}
        </div>
    );
}