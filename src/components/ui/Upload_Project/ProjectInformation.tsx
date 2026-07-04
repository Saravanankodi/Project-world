"use client";

import { Info } from "lucide-react";
import { geist, inter } from "@/lib/fonts";
import FormInput from "./FormInput";
import ProjectType from "./ProjectType";
import FormTextarea from "./FormTextarea";
import TagInput from "./TagInput";
import BottomActions from "./BottomActions";
import CustomSelect from "./CustomSelect";
import { useState } from "react";
import UploadHeader from "./UploadHeader";

interface ProjectInformationProps {
    onContinue: () => void;
    onSaveDraft?: () => void;
}

export default function ProjectInformation({
    onContinue,
    onSaveDraft,
}: ProjectInformationProps) {
    const [tags, setTags] = useState<string[]>([]);
    
    return (
        <section className="">
            <UploadHeader
                title="Upload Your Project"
                description="Share your innovation with students and creators worldwide."
            />
            <div className=" bg-[#24EA2412] rounded-3xl shadow-[#0F172A0D] p-6 lg:p-8">
            {/* Header */}
            <div className="flex items-start gap-3 mb-8">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F5E9]">
                    <Info
                        size={20}
                        className="text-[#16A34A]"
                    />
                </div>

                <div>
                    <h2
                        className={`${geist.className}
                        text-2xl
                        font-bold
                        text-[#006E2F]`}
                    >
                        Project Information
                    </h2>

                </div>

            </div>

            {/* Form */}
            <div className="flex flex-col gap-6">

                <FormInput
                    label="Project Title"
                    placeholder="Enter your project title"
                />
                <div className="w-full flex gap-5">
                    <CustomSelect
                        label="Domain / Category"
                        placeholder="Select Domain"
                        options={[
                            "Web Development",
                            "Artificial Intelligence",
                            "Machine Learning",
                            "Cyber Security",
                            "IoT",
                        ]}
                    />

                    <CustomSelect
                        label="Technology "
                        placeholder="Select Technology"
                        options={[
                            "React",
                            "Next.js",
                            "Node.js",
                            "MongoDB",
                            "Express",
                        ]}
                    />
                </div>
                <ProjectType />

                <div className="lg:col-span-2">
                    <FormTextarea
                        label="Short Description"
                        placeholder="Describe your project, its purpose, features, and target audience..."
                    />
                </div>

                <div className="lg:col-span-2">
                    <TagInput
                        label="Keywords / Tags"
                        placeholder="Add tags..."
                        value={tags}
                        onChange={setTags}
                    />
                </div>

            </div>
            <div className="w-full flex flex-col md:flex-row mt-5">
                <div className="w-full md:w-4/6 flex items-start gap-1 md:gap-3 rounded-2xl  md:p-4 py-2 ">
                    <Info
                        size={20}
                        className="mt-0.5 text-[#16A34A]"
                    />
                    <p
                        className={`${inter.className} text-xs  text-[#565E74]`}
                    >
                        Project draft will be saved automatically.
                    </p>
                </div>
                <div className="w-full md:w-2/6 flex flex-row items-center justify-center md:justify-end ">
                    <BottomActions
                        onContinue={onContinue}
                        onSaveDraft={onSaveDraft}
                    />
                </div>
            </div>
            </div>

        </section>
    );
}