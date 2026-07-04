"use client";

import { useState } from "react";
import { Monitor, Laptop, Server } from "lucide-react";
import BottomActions from "../Upload_Project/BottomActions";
import TechnologyStack from "./TechnologyStack";
import UsageDistribution from "./UsageDistribution";
import RequirementsCard from "./RequirementsCard";
import ProjectResources from "./ProjectResources";
import UploadHeader from "../Upload_Project/UploadHeader";

interface TechnicalDetailsProps {
    onBack: () => void;
    onContinue: () => void;
    onSaveDraft?: () => void;
}

export default function TechnicalDetails({
    onBack,
    onContinue,
    onSaveDraft,
}: TechnicalDetailsProps) {

    const [languages, setLanguages] = useState([
        {
            language: "",
            percentage: "",
        },
    ]);

    const handleChange = (
        index: number,
        field: "language" | "percentage",
        value: string
    ) => {
        const updated = [...languages];
        updated[index][field] = value;
        setLanguages(updated);
    };

    const addLanguage = () => {
        setLanguages([
            ...languages,
            {
                language: "",
                percentage: "",
            },
        ]);
    };

    const removeLanguage = (index: number) => {
        setLanguages(languages.filter((_, i) => i !== index));
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

    const [selectedOS, setSelectedOS] = useState<string[]>([]);

    const toggleOS = (os: string) => {
        if (selectedOS.includes(os)) {
            setSelectedOS(selectedOS.filter((item) => item !== os));
        } else {
            setSelectedOS([...selectedOS, os]);
        }
    };

    const [hardwareRequirements, setHardwareRequirements] = useState("");

    const [softwareRequirements, setSoftwareRequirements] = useState("");
    const [dependencies, setDependencies] = useState("");

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
        <section className="my-10 p-2 md:p-8">

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
                        languages={languages}
                        onAdd={addLanguage}
                        onChange={handleChange}
                        onRemove={removeLanguage}
                    />
                    <UsageDistribution
                        languages={languages}
                    />
                </div>

                {/* RIGHT COLUMN */}

                <RequirementsCard
                    operatingSystems={operatingSystems}
                    selectedOS={selectedOS}
                    toggleOS={toggleOS}
                    hardwareRequirements={hardwareRequirements}
                    setHardwareRequirements={setHardwareRequirements}
                    softwareRequirements={softwareRequirements}
                    setSoftwareRequirements={setSoftwareRequirements}
                    dependencies={dependencies}
                    setDependencies={setDependencies}
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