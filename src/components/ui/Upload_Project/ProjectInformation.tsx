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
import { ProjectInformation } from "@/types/project";

interface ProjectInformationProps {
    data: ProjectInformation;
    setData: React.Dispatch<React.SetStateAction<ProjectInformation>>;
    onContinue: () => void;
    onSaveDraft?: () => void;
}
interface ProjectInformationErrors {
  title?: string;
  domain?: string;
  technology?: string;
  projectType?: string;
  description?: string;
  tags?: string;
}

export default function ProjectInformationForm({
    data,
    setData,
    onContinue,
    onSaveDraft,
}: ProjectInformationProps) {

    const [errors, setErrors] = useState<ProjectInformationErrors>({});

    const validateProjectInformation = (
        data: ProjectInformation
        ): {
        isValid: boolean;
        errors: ProjectInformationErrors;
        } => {
        const errors: ProjectInformationErrors = {};

        // Project title
        if (!data.title.trim()) {
            errors.title = "Project title is required.";
        } else if (data.title.trim().length < 5) {
            errors.title = "Project title must be at least 5 characters.";
        }

        // Domain
        if (!data.domain.trim()) {
            errors.domain = "Please select a domain.";
        }

        // Technology
        if (!data.technology || data.technology.length === 0) {
            errors.technology = "Please select a technology.";
        }

        // Project Type
        if (!data.projectType) {
            errors.projectType = "Please select a project type.";
        }

        // Description
        if (!data.description.trim()) {
            errors.description = "Project description is required.";
        } else if (data.description.trim().length < 30) {
            errors.description =
            "Description should be at least 30 characters.";
        }

        // Tags
        // if (!data.tags || data.tags.length === 0) {
        //     errors.tags = "Please add at least one tag.";
        // }

        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    };

    const handleContinue = () => {
        const validation = validateProjectInformation(data);

        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
 
        setErrors({});
        onContinue();
    };
    return (
        <section className="mb-10 sm:my-8">
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
                    error={errors.title}
                    placeholder="Enter your project title"
                    value={data.title}
                    onChange={(e)=>(setData(
                        (prev)=>({
                            ...prev,
                            title:e.target.value
                        })
                    ))}
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
                        value={data.domain}
                        onChange={(value)=>(setData(
                            (prev)=>({
                                ...prev,
                                domain: value
                            })
                        ))}
                    />

                    <TagInput
                        label="Technology "
                        placeholder="Select Technology"
                        value={data.technology}
                        onChange={(value)=>(
                            setData((prev)=>({
                                ...prev,
                                technology: value
                            }))
                        )}
                    />
                </div>
                <ProjectType 
                    value={data.projectType}
                    onChange={(value) =>
                        setData((prev) => ({
                            ...prev,
                            projectType: value,
                        }))
                    } />

                <div className="lg:col-span-2">
                    <FormTextarea
                        label="Short Description"
                        error={errors.description}
                        placeholder="Describe your project, its purpose, features, and target audience..."
                        value={data.description}
                        onChange={(e)=>(setData(
                            (prev)=>({
                                ...prev,
                                description: e.target.value
                            })
                        ))}
                    />
                </div>

                {/* <div className="lg:col-span-2">
                    <TagInput
                        label="Keywords / Tags"
                        placeholder="Add tags..."
                        value={data.tags}
                        onChange={(value)=>(setData(
                            (prev)=>({
                                ...prev,
                                tags:value
                            })
                        ))}
                    />
                </div> */}

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
                        onContinue={handleContinue}
                        onSaveDraft={onSaveDraft}
                    />
                </div>
            </div>
            </div>

        </section>
    );
}