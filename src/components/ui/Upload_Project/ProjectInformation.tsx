"use client";

import { Info } from "lucide-react";
import { geist, inter } from "@/lib/fonts";
import FormInput from "./FormInput";
import ProjectType from "./ProjectType";
import FormTextarea from "./FormTextarea";
import TagInput from "./TagInput";
import BottomActions from "./BottomActions";
import CustomSelect from "./CustomSelect";


interface ProjectInformationProps {
    onContinue: () => void;
}

export default function ProjectInformation({
    onContinue,
}: ProjectInformationProps) {
    
    return (
        <section className="rounded-3xl bg-[#F7FBF6] border border-[#E3EFE1] p-6 lg:p-8">

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

                    <p
                        className={`${inter.className}
                        mt-1
                        text-sm
                        text-[#565E74]`}
                    >
                        Tell us about your project and help others discover it.
                    </p>
                </div>

            </div>

            {/* Form */}
            <div className="grid gap-6">

                <FormInput
                    label="Project Title"
                    placeholder="Enter your project title"
                />
<div className="flex">
                <CustomSelect
                    label="Project Domain"
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
                    label="Technology Stack"
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
                        label="Project Description"
                        placeholder="Describe your project, its purpose, features, and target audience..."
                    />
                </div>

                <div className="lg:col-span-2">
                    <TagInput
                        label="Tags"
                        placeholder="Add tags..."
                    />
                </div>

            </div>

            <BottomActions
                onContinue={onContinue}
            />

        </section>
    );
}