"use client";

import React from "react";
import { Monitor, Laptop, Server } from "lucide-react";
import BottomActions from "../Upload_Project/BottomActions";
import TechnologyStack from "./TechnologyStack";
import UsageDistribution from "./UsageDistribution";
import RequirementsCard from "./RequirementsCard";
import ProjectResources from "./ProjectResources";
import UploadHeader from "../Upload_Project/UploadHeader";
import { TechnicalDetails } from "@/types/project";
import { uploadFile } from "@/services/storage";

interface TechnicalDetailsProps {
    data: TechnicalDetails;
    setData: React.Dispatch<React.SetStateAction<TechnicalDetails>>;

    projectFiles: {
        sourceCode: File | null;
        documentation: File | null;
        demoVideo: File | null;
        screenshots: File[] ;
    };

    setProjectFiles: React.Dispatch<
        React.SetStateAction<{
            sourceCode: File | null;
            documentation: File | null;
            demoVideo: File | null;
            screenshots: File[];
        }>
    >;

    onBack: () => void;
    onContinue: () => void;
    onSaveDraft?: () => void;
}

export default function TechnicalDetailsForm({
    data,
    setData,
    projectFiles,
    setProjectFiles,
    onBack,
    onContinue,
    onSaveDraft,
}: TechnicalDetailsProps) {

    // ===============================
    // Language Handlers
    // ===============================

    const handleChange = (
        index: number,
        field: "language" | "percentage",
        value: string
    ) => {
        const updated = [...data.languages];
        updated[index] = {
            ...updated[index],
            [field]: value,
        };

        setData(prev => ({
            ...prev,
            languages: updated,
        }));
    };

    const addLanguage = () => {
        setData(prev => ({
            ...prev,
            languages: [
                ...prev.languages,
                {
                    language: "",
                    percentage: "",
                },
            ],
        }));
    };

    const removeLanguage = (index: number) => {
        setData(prev => ({
            ...prev,
            languages: prev.languages.filter((_, i) => i !== index),
        }));
    };

    // ===============================
    // Operating Systems
    // ===============================

    const operatingSystems = [
        {
            id: "windows",
            name: "Windows",
            icon: Monitor,
        },
        {
            id: "macos",
            name: "macOS",
            icon: Laptop,
        },
        {
            id: "linux",
            name: "Linux",
            icon: Server,
        },
    ];

    const toggleOS = (os: string) => {
        setData(prev => ({
            ...prev,
            operatingSystems: prev.operatingSystems.includes(os)
                ? prev.operatingSystems.filter(item => item !== os)
                : [...prev.operatingSystems, os],
        }));
    };

    // ===============================
    // File Upload
    // ===============================

 const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof projectFiles
) => {

    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setProjectFiles(prev => ({
        ...prev,
        [key]:
            key === "screenshots"
                ? files
                : files[0],
    }));
};

    // ===============================
    // Validation
    // ===============================

    const validateForm = () => {

        // Programming Languages

        for (const lang of data.languages) {

            if (!lang.language.trim()) {
                alert("Programming Language is required.");
                return false;
            }

            if (!lang.percentage.trim()) {
                alert("Usage Percentage is required.");
                return false;
            }

            const percent = Number(lang.percentage);

            if (
                isNaN(percent) ||
                percent <= 0 ||
                percent > 100
            ) {
                alert("Usage Percentage must be between 1 and 100.");
                return false;
            }
        }

        // Operating System
if (!projectFiles.sourceCode) {
    alert("Please upload Source Code.");
    return false;
}

if (!projectFiles.documentation) {
    alert("Please upload Documentation.");
    return false;
}

if (!projectFiles.demoVideo) {
    alert("Please upload Demo Video.");
    return false;
}

if (projectFiles.screenshots.length === 0) {
    alert("Please upload Project Screenshots.");
    return false;
}      return true;
    };

    const handleContinue = async () => {
        if (!validateForm()) return;
                       onContinue();
    };
    return (      
          <section className="my-10">

            <UploadHeader
                title="Technical Details"
                description="Help buyers understand the technology, requirements, and implementation of your project."
            />

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">

                {/* LEFT COLUMN */}
                <div className="flex flex-col space-y-6 h-full">

                    <TechnologyStack
                        languages={data.languages}
                        onAdd={addLanguage}
                        onChange={handleChange}
                        onRemove={removeLanguage}
                    />

                    <UsageDistribution
                        languages={data.languages}
                    />

                </div>
                <RequirementsCard
                    operatingSystems={operatingSystems}
                    selectedOS={data.operatingSystems}
                    toggleOS={toggleOS}

                    hardwareRequirements={data.hardwareRequirements}
                    setHardwareRequirements={(value) =>
                        setData(prev => ({
                            ...prev,
                            hardwareRequirements: value,
                        }))
                    }

                    dependencies={data.dependencies}
                    setDependencies={(value) =>
                        setData(prev => ({
                            ...prev,
                            dependencies: value,
                        }))
                    }
                />

            </div>

            {/* Resources */}

            <div className="mt-6">

<ProjectResources
    resources={projectFiles}
    onFileChange={handleFileChange}
/>

            </div>

            {/* Bottom Actions */}

            <div className="mt-10 border-t border-[#EAECF0] pt-8">

                <BottomActions
                    onBack={onBack}
                    onSaveDraft={onSaveDraft}
                    onContinue={handleContinue}
                />

            </div>

        </section>
    );
}