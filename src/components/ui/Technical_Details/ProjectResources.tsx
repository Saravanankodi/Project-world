"use client";

import {
    FileCode2,
    FileText,
    ImageIcon,
    PlayCircle,
} from "lucide-react";

import { geist } from "@/lib/fonts";
import ResourceUploadCard from "./ResourceUploadCard";
import { ExistingProjectFiles } from "@/types/project";

interface Resources {
    sourceCode: File | null;
    documentation: File | null;
    demoVideo: File | null;
    screenshots: File[];
}

interface ProjectResourcesProps {
    resources: Resources;
    onFileChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof Resources
    ) => void;
    removeFile: (
        key: "sourceCode" | "documentation" | "demoVideo"
    ) => void;
    removeScreenshot: (index: number) => void;
    existingFiles: ExistingProjectFiles;

    setExistingFiles: React.Dispatch<
        React.SetStateAction<ExistingProjectFiles>
    >;
}

export default function ProjectResources({
   resources,
    onFileChange,
    removeFile,
    removeScreenshot,
  existingFiles,
    setExistingFiles,
}: ProjectResourcesProps) {
    
    return (
        <div className="mt-6 rounded-2xl border border-[#EAECF0]  p-3 sm:p-6">

            {/* Header */}
            <h3
                className={`${geist.className} text-lg font-medium text-[#161D16]`}
            >
                Project Resources
            </h3>

            {/* Upload Cards */}
            <div className="mt-8 grid gap-1 md:gap-6 grid-cols-2">

                <ResourceUploadCard
                    title="Source Code"
                    description="Upload ZIP file containing your source code."
                    icon={<FileCode2 size={36} className="text-[#039855]" />}
                    file={resources.sourceCode}
                    existingFile={existingFiles.sourceCode}
                    accept=".zip,.rar,.7z"
                    onChange={(e) => onFileChange(e, "sourceCode")}
                    removeFile={removeFile}
                />

                <ResourceUploadCard
                    title="Documentation"
                    description="Upload PDF or DOC documentation."
                    icon={<FileText size={36} className="text-[#039855]" />}
                    file={resources.documentation}
                    existingFile={existingFiles.documentation}
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => onFileChange(e, "documentation")}
                    removeFile={removeFile}
                />

                <ResourceUploadCard
                    title="Demo Video"
                    description="Upload MP4, MOV or demo video."
                    icon={<PlayCircle size={36} className="text-[#039855]" />}
                    file={resources.demoVideo}
                    existingFile={existingFiles.demoVideo}
                    accept=".mp4,.mov,.avi"
                    onChange={(e) => onFileChange(e, "demoVideo")}
                    removeFile={removeFile}
                />

                <div className="border rounded-xl p-4">

                    <div className="flex items-center gap-2 mb-3">
                        <ImageIcon size={36} className="text-[#039855]" />

                        <div>
                            <h4 className="font-medium">
                                Screenshots
                            </h4>

                            <p className="text-sm text-gray-500">
                                Upload preview images.
                            </p>
                        </div>
                    </div>


                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => onFileChange(e, "screenshots")}
                    />


                     <div className="mt-3 space-y-1">
               {existingFiles.screenshots
    .filter((url): url is string => url !== null)
    .map((url, index) => (
        <div
            key={`existing-${index}`}
            className="flex items-center justify-between"
        >
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline truncate"
            >
                Screenshot {index + 1}
            </a>

            <button
                type="button"
                onClick={() =>
                    setExistingFiles(prev => ({
                        ...prev,
                        screenshots: prev.screenshots.filter(
                            (_, i) => i !== index
                        ),
                    }))
                }
            >
                Remove
            </button>
        </div>
    ))}
                        {resources.screenshots.map((file, index) => (
                            <div
                                key={index}
                                className="flex justify-between"
                            >
                                <span>{file.name}</span>

                                <button
                                    type="button"
                                    onClick={() => removeScreenshot(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
}