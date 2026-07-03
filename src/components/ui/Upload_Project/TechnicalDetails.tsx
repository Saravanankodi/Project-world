"use client";

import { geist, inter } from "@/lib/fonts";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import FormInput from "./FormInput";
import { Monitor, Laptop, Server } from "lucide-react";
import FormTextarea from "./FormTextarea";
import TagInput from "./TagInput";
import {
    UploadCloud,
    FileCode2,
    FileText,
    ImageIcon,
    PlayCircle,
} from "lucide-react";
import BottomActions from "./BottomActions";





interface TechnicalDetailsProps {
    onBack: () => void;
    onContinue: () => void;
    onSaveDraft?: () => void;
}

const TechnicalDetails = ({
    onBack,
    onContinue,
    onSaveDraft,
}: TechnicalDetailsProps) => {
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

    const [dependencies, setDependencies] = useState<string[]>([]);

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
        <section className="mt-8 rounded-3xl border border-[#EAECF0] bg-white p-8">

            {/* Header */}
            <div className="mb-8">
                <h2
                    className={`${geist.className} text-[30px] font-semibold text-[#101828]`}
                >
                    Technical Details
                </h2>

                <p
                    className={`${inter.className} mt-2 text-[16px] text-[#667085]`}
                >
                    Provide technical specifications and project resources.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">

                {/* LEFT COLUMN */}
                <div className="space-y-6">

                    {/* Technology Stack */}
                    <div className="rounded-2xl border border-[#EAECF0] p-6">

                        <div className="flex items-center justify-between">

                            <div>

                                <h3
                                    className={`${geist.className} text-xl font-semibold text-[#101828]`}
                                >
                                    Technology Stack
                                </h3>

                                <p className="mt-1 text-sm text-[#667085]">
                                    Add languages and usage percentage.
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={addLanguage}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D0D5DD] hover:bg-gray-50"
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                        <div className="mt-8 space-y-5">

                            {languages.map((item, index) => (

                                <div
                                    key={index}
                                    className="grid grid-cols-[1fr_150px_auto] gap-4 items-end"
                                >

                                    <FormInput
                                        label="Programming Language"
                                        placeholder="React"
                                        value={item.language}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "language",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <FormInput
                                        label="Usage %"
                                        placeholder="40"
                                        value={item.percentage}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "percentage",
                                                e.target.value
                                            )
                                        }
                                    />

                                    {languages.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeLanguage(index)}
                                            className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 text-red-500 hover:bg-red-50"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    )}

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Usage Distribution */}
                    <div className="rounded-2xl border border-[#EAECF0] p-6">

                        <h3
                            className={`${geist.className} text-xl font-semibold text-[#101828]`}
                        >
                            Usage Distribution
                        </h3>

                        <p className="mt-1 text-sm text-[#667085]">
                            Visual overview of language usage.
                        </p>

                        <div className="mt-8 space-y-6">

                            {languages
                                .filter((item) => item.language.trim() !== "")
                                .map((item, index) => {

                                    const percentage = Math.min(
                                        Number(item.percentage) || 0,
                                        100
                                    );

                                    return (
                                        <div key={index}>

                                            <div className="mb-2 flex items-center justify-between">

                                                <span className="text-sm font-medium text-[#344054]">
                                                    {item.language}
                                                </span>

                                                <span className="text-sm font-semibold text-[#006E2F]">
                                                    {percentage}%
                                                </span>

                                            </div>

                                            <div className="h-3 overflow-hidden rounded-full bg-[#EAECF0]">

                                                <div
                                                    className="h-full rounded-full bg-[#039855] transition-all duration-500"
                                                    style={{
                                                        width: `${percentage}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>
                                    );
                                })}

                            {languages.every(
                                (item) => item.language.trim() === ""
                            ) && (
                                    <div className="rounded-xl border border-dashed border-[#D0D5DD] py-10 text-center">

                                        <p className="text-sm text-[#98A2B3]">
                                            Add programming languages above to see usage distribution.
                                        </p>

                                    </div>
                                )}

                        </div>

                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="rounded-2xl border border-[#EAECF0] p-6">

                    <h3
                        className={`${geist.className} text-xl font-semibold text-[#101828]`}
                    >
                        Requirements
                    </h3>

                    <p className="mt-1 text-sm text-[#667085]">
                        Specify supported operating systems and dependencies.
                    </p>

                    {/* Operating Systems */}

                    <div className="mt-8">

                        <label className="mb-4 block text-sm font-medium text-[#344054]">
                            Supported Operating Systems
                        </label>

                        <div className="grid grid-cols-3 gap-3">

                            {operatingSystems.map((os) => {

                                const Icon = os.icon;

                                const active = selectedOS.includes(os.id);

                                return (

                                    <button
                                        key={os.id}
                                        type="button"
                                        onClick={() => toggleOS(os.id)}
                                        className={`flex flex-col items-center justify-center rounded-xl border p-5 transition

                        ${active
                                                ? "border-[#039855] bg-[#ECFDF3]"
                                                : "border-[#EAECF0] hover:border-[#039855]"
                                            }`}
                                    >

                                        <Icon
                                            size={28}
                                            className={
                                                active
                                                    ? "text-[#039855]"
                                                    : "text-[#98A2B3]"
                                            }
                                        />

                                        <span
                                            className={`mt-3 text-sm font-medium

                            ${active
                                                    ? "text-[#027A48]"
                                                    : "text-[#344054]"
                                                }`}
                                        >
                                            {os.name}
                                        </span>

                                    </button>

                                );
                            })}

                        </div>

                    </div>

                    {/* Hardware */}

                    <div className="mt-8">

                        <FormTextarea
                            label="Hardware Requirements"
                            placeholder="Minimum RAM, CPU, Storage..."
                            value={hardwareRequirements}
                            onChange={(e) =>
                                setHardwareRequirements(e.target.value)
                            }
                        />

                    </div>

                    {/* Software */}

                    <div className="mt-6">

                        <FormTextarea
                            label="Software Requirements"
                            placeholder="Visual Studio, Node.js, Docker..."
                            value={softwareRequirements}
                            onChange={(e) =>
                                setSoftwareRequirements(e.target.value)
                            }
                        />

                    </div>

                    {/* Dependencies */}

                    <div className="mt-6">

                        <TagInput
                            label="Dependencies"
                            placeholder="Express"
                            value={dependencies}
                            onChange={setDependencies}
                        />

                    </div>

                </div>

            </div>

            {/* Project Resources */}
            <div className="mt-6 rounded-2xl border border-[#EAECF0] p-6">

                <h3
                    className={`${geist.className} text-xl font-semibold text-[#101828]`}
                >
                    Project Resources
                </h3>

                <p className="mt-1 text-sm text-[#667085]">
                    Upload all required files for reviewers and buyers.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                    {/* Source Code */}

                    <label className="cursor-pointer rounded-2xl border-2 border-dashed border-[#D0D5DD] p-6 hover:border-[#039855] transition">

                        <input
                            type="file"
                            hidden
                            onChange={(e) =>
                                handleFileChange(e, "sourceCode")
                            }
                        />

                        <div className="flex flex-col items-center">

                            <FileCode2
                                className="text-[#039855]"
                                size={36}
                            />

                            <h4 className="mt-4 text-lg font-semibold">
                                Source Code
                            </h4>

                            <p className="mt-2 text-center text-sm text-[#667085]">
                                Upload ZIP file containing your source code.
                            </p>

                            <UploadCloud
                                size={22}
                                className="mt-5 text-[#98A2B3]"
                            />

                            {resources.sourceCode && (

                                <p className="mt-4 text-sm font-medium text-[#039855]">

                                    {resources.sourceCode.name}

                                </p>

                            )}

                        </div>

                    </label>

                    {/* Documentation */}

                    <label className="cursor-pointer rounded-2xl border-2 border-dashed border-[#D0D5DD] p-6 hover:border-[#039855] transition">

                        <input
                            type="file"
                            hidden
                            onChange={(e) =>
                                handleFileChange(e, "documentation")
                            }
                        />

                        <div className="flex flex-col items-center">

                            <FileText
                                className="text-[#039855]"
                                size={36}
                            />

                            <h4 className="mt-4 text-lg font-semibold">
                                Documentation
                            </h4>

                            <p className="mt-2 text-center text-sm text-[#667085]">
                                Upload PDF or DOC documentation.
                            </p>

                            <UploadCloud
                                size={22}
                                className="mt-5 text-[#98A2B3]"
                            />

                            {resources.documentation && (

                                <p className="mt-4 text-sm font-medium text-[#039855]">

                                    {resources.documentation.name}

                                </p>

                            )}

                        </div>

                    </label>

                    {/* Demo */}

                    <label className="cursor-pointer rounded-2xl border-2 border-dashed border-[#D0D5DD] p-6 hover:border-[#039855] transition">

                        <input
                            type="file"
                            hidden
                            onChange={(e) =>
                                handleFileChange(e, "demoVideo")
                            }
                        />

                        <div className="flex flex-col items-center">

                            <PlayCircle
                                className="text-[#039855]"
                                size={36}
                            />

                            <h4 className="mt-4 text-lg font-semibold">
                                Demo Video
                            </h4>

                            <p className="mt-2 text-center text-sm text-[#667085]">
                                MP4, MOV or external demo link.
                            </p>

                            <UploadCloud
                                size={22}
                                className="mt-5 text-[#98A2B3]"
                            />

                            {resources.demoVideo && (

                                <p className="mt-4 text-sm font-medium text-[#039855]">

                                    {resources.demoVideo.name}

                                </p>

                            )}

                        </div>

                    </label>

                    {/* Screenshots */}

                    <label className="cursor-pointer rounded-2xl border-2 border-dashed border-[#D0D5DD] p-6 hover:border-[#039855] transition">

                        <input
                            type="file"
                            multiple
                            hidden
                            onChange={(e) =>
                                handleFileChange(e, "screenshots")
                            }
                        />

                        <div className="flex flex-col items-center">

                            <ImageIcon
                                className="text-[#039855]"
                                size={36}
                            />

                            <h4 className="mt-4 text-lg font-semibold">
                                Screenshots
                            </h4>

                            <p className="mt-2 text-center text-sm text-[#667085]">
                                Upload preview images.
                            </p>

                            <UploadCloud
                                size={22}
                                className="mt-5 text-[#98A2B3]"
                            />

                            {resources.screenshots && (

                                <p className="mt-4 text-sm font-medium text-[#039855]">

                                    {resources.screenshots.name}

                                </p>

                            )}

                        </div>

                    </label>

                </div>

            </div>

            {/* Bottom Actions */}

            <div className="mt-10 border-t border-[#EAECF0] pt-8">

                <BottomActions
                    backLabel="Back"
                    continueLabel="Continue"
                    saveLabel="Save Draft"
                    onBack={onBack}
                    onContinue={onContinue}
                    onSave={onSaveDraft}
                />

            </div>

        </section>
    );
};

export default TechnicalDetails;