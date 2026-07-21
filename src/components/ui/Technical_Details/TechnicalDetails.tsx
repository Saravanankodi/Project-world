"use client";

import React, { useState } from "react";
import { Monitor, Laptop, Server } from "lucide-react";
import BottomActions from "../Upload_Project/BottomActions";
import TechnologyStack from "./TechnologyStack";
import UsageDistribution from "./UsageDistribution";
import RequirementsCard from "./RequirementsCard";
import ProjectResources from "./ProjectResources";
import UploadHeader from "../Upload_Project/UploadHeader";
import { TechnicalDetails } from "@/types/project";

interface TechnicalDetailsProps {
    data:TechnicalDetails;
    setData: React.Dispatch<React.SetStateAction<TechnicalDetails>>;
    onBack: () => void;
    onContinue: () => void;
    onSaveDraft?: () => void;
}

export default function TechnicalDetailsForm({
    data,
    setData,
    onBack,
    onContinue,
    onSaveDraft,
}: TechnicalDetailsProps) {

    const handleChange = (
        index: number,
        field: "language" | "percentage",
        value: string
    ) => {
        const updated = [...data.languages];
        updated[index][field] = value;
        setData((prev)=>({
            ...prev,
            languages:updated
        }))
    };

    const addLanguage = () => {
        setData((prev)=>({
            ...prev,
            languages: [
            ...data.languages,
            {
                language: "",
                percentage: "",
            },
        ]
        }));
    };

    const removeLanguage = (index: number) => {
        setData((prev)=>({
            ...prev,
            languages: data.languages.filter((_, i) => i !== index)
        }));
    };

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
        setData((prev) => ({
            ...prev,
            operatingSystems: prev.operatingSystems.includes(os)
                ? prev.operatingSystems.filter((item) => item !== os)
                : [...prev.operatingSystems, os],
        }));
    };


    const [resources, setResources] = useState({
        sourceCode: null as File | null,
        documentation: null as File | null,
        demoVideo: null as File | null,
        screenshots: null as File | null,
    });

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof typeof resources
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setResources((prev) => ({
            ...prev,
            [key]: file,
        }));
    };


    return (
        <section className="my-10 ">

            {/* Header */}

            <UploadHeader
                title="Technical Details"
                description="Help buyers understand the technology, requirements, and implementation of yourproject."
            />

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] ">
                {/* LEFT COLUMN */}
                <div className="flex flex-col space-y-6 h-full">
                    {/* Technology Stack */}
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

                {/* RIGHT COLUMN */}

                <RequirementsCard
                    operatingSystems={operatingSystems}
                    selectedOS={data.operatingSystems}
                    toggleOS={toggleOS}
                    hardwareRequirements={data.hardwareRequirements}
                    setHardwareRequirements={(value) =>
                        setData((prev) => ({
                            ...prev,
                            hardwareRequirements: value,
                    }))}
                    dependencies={data.dependencies}
                    setDependencies={(value)=>(setData(
                        (prev)=>({
                            ...prev,
                            dependencies: value
                        })
                    ))}
                />
            </div>

            {/* Project Resources */}

            <div className="mt-6">

                <ProjectResources
                    resources={resources}
                    onFileChange={handleFileChange}
                />

            </div>

            {/* Bottom Actions */}

            <div className="mt-10 border-t border-[#EAECF0] pt-8">

                <BottomActions
                    onBack={onBack}
                    onContinue={onContinue}
                    onSaveDraft={onSaveDraft}
                />

            </div>

        </section>
    );
}