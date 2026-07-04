"use client";

import {
    FileCode2,
    FileText,
    ImageIcon,
    PlayCircle,
} from "lucide-react";

import { geist } from "@/lib/fonts";
import ResourceUploadCard from "./ResourceUploadCard";

interface Resources {
    sourceCode: File | null;
    documentation: File | null;
    demoVideo: File | null;
    screenshots: File | null;
}

interface ProjectResourcesProps {
    resources: Resources;
    onFileChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof Resources
    ) => void;
}

export default function ProjectResources({
    resources,
    onFileChange,
}: ProjectResourcesProps) {
    return (
        <div className="mt-6 rounded-2xl border border-[#EAECF0] p-6">

            {/* Header */}
            <h3
                className={`${geist.className} text-xl font-semibold text-[#101828]`}
            >
                Project Resources
            </h3>

            <p className="mt-1 text-sm text-[#667085]">
                Upload all required files for reviewers and buyers.
            </p>

            {/* Upload Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">

                <ResourceUploadCard
                    title="Source Code"
                    description="Upload ZIP file containing your source code."
                    icon={<FileCode2 size={36} className="text-[#039855]" />}
                    file={resources.sourceCode}
                    accept=".zip,.rar,.7z"
                    onChange={(e) => onFileChange(e, "sourceCode")}
                />

                <ResourceUploadCard
                    title="Documentation"
                    description="Upload PDF or DOC documentation."
                    icon={<FileText size={36} className="text-[#039855]" />}
                    file={resources.documentation}
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => onFileChange(e, "documentation")}
                />

                <ResourceUploadCard
                    title="Demo Video"
                    description="Upload MP4, MOV or demo video."
                    icon={<PlayCircle size={36} className="text-[#039855]" />}
                    file={resources.demoVideo}
                    accept=".mp4,.mov,.avi"
                    onChange={(e) => onFileChange(e, "demoVideo")}
                />

                <ResourceUploadCard
                    title="Screenshots"
                    description="Upload preview images."
                    icon={<ImageIcon size={36} className="text-[#039855]" />}
                    file={resources.screenshots}
                    accept="image/*"
                    multiple
                    onChange={(e) => onFileChange(e, "screenshots")}
                />

            </div>

        </div>
    );
}