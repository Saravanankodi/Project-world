"use client";

import { geist, inter } from "@/lib/fonts";
import { Delete, UploadCloud } from "lucide-react";

interface ResourceUploadCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;

    file: File | null;

    existingFile?: string | null;

    accept?: string;
    multiple?: boolean;
    removeFile: (
        key: "sourceCode" | "documentation" | "demoVideo"
    ) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ResourceUploadCard({
    title,
    description,
    icon,
    file,
    existingFile,
    accept,
    multiple = false,
    removeFile,
    onChange,
}: ResourceUploadCardProps) {
    
    return (
        <label
            className="cursor-pointer rounded-2xl border-2 border-dashed border-[#D0D5DD] p-2 sm:p-6 transition hover:border-[#039855]"
        >
            <input
                hidden
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={onChange}
            />

            <div className="flex flex-col items-center">
                <div className="w-7 flex items-center justify-center">
                    {icon}
                </div>
                
                <h4 className={`${geist.className} mt-4 text-xs sm:text-lg font-semibold text-[#161D16]`}>
                    {title}
                </h4>

                <p className={`${inter.className} hidden sm:block mt-2 text-center text-sm text-[#667085]`}>
                    {description}
                </p>

                <UploadCloud
                    size={22}
                    className="hidden sm:block mt-5 text-[#98A2B3]"
                />

              {file ? (
    <p className="mt-4 text-sm font-medium text-[#039855]">
        {file.name}
    </p>
) : (
    existingFile && (
        <a
            href={existingFile}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-sm text-blue-600 underline"
        >
            View Uploaded File
        </a>
    )
)}
            </div>
        </label>
    );
}