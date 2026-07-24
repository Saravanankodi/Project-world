"use client";

import { useState } from "react";
import { PriceDetails, ProjectInformation, TechnicalDetails } from "@/types/project";
import ProjectInformationForm from "@/components/ui/Upload_Project/ProjectInformation";
import TechnicalDetailsForm from "@/components/ui/Technical_Details/TechnicalDetails";
import PricingForm from "@/components/ui/Pricing/Pricing";
import { saveDraft, submitProject, updateProject } from "@/services/project";
import { getUserProfile } from "@/services/user";
import { getAuth } from "firebase/auth";



export default function UploadProject() {

    const auth = getAuth();
    const user = auth.currentUser;

    const [step, setStep] = useState(1);
    const [projectId, setProjectId] = useState<string | null>(null);
     
    // STEP 1 DATA
    const [projectInformation, setProjectInformation] =
        useState<ProjectInformation>({
            title: "",
            domain: "",
            technology: "",
            projectType: "",
            description: "",
            tags: [''],
        });

    // STEP 2 DATA
    const [technicalDetails, setTechnicalDetails] =
        useState<TechnicalDetails>({
            languages: [
                {
                    language: "",
                    percentage: "",
                },
            ],

            operatingSystems: [''],

            hardwareRequirements: "",
            dependencies: "",

            resources: {
                sourceCode: null,
                documentation: null,
                demoVideo: null,
                screenshots: null,
            },
        });

    // STEP 3 DATA
    const [priceDetails, setPriceDetails] =
        useState<PriceDetails>({
            pricingType: "paid",
            basePrice: 4999,
            discountEnabled: true,
            discount: 20,
            chatEnabled: true,
            enableRatings: true,
            acceptFeedback: true,
        });

        const handleSaveDraft = async () => {
            if (!user) return;

            try {
                if (!projectId) {
                    const id = await saveDraft({
                        ownerId: user.uid,
                        projectInformation,
                        technicalDetails,
                        priceDetails,
                        status: "draft",
                    });

                    setProjectId(id);
                } else {
                    await updateProject(projectId, {
                        projectInformation,
                        technicalDetails,
                        priceDetails,
                    });
                }

                console.log("Draft saved");
            } catch (err) {
                console.error(err);
            }
        };

        const handleSubmit = async () => {
            if (!user) return;

            try {
                if (!projectId) {
                    const id = await saveDraft({
                        ownerId: user.uid,
                        projectInformation,
                        technicalDetails,
                        priceDetails,
                        status: "draft",
                    });

                    setProjectId(id);

                    await submitProject(id, {
                        projectInformation,
                        technicalDetails,
                        priceDetails,
                    });
                } else {
                    await submitProject(projectId, {
                        projectInformation,
                        technicalDetails,
                        priceDetails,
                    });
                }

                console.log("Project submitted");
            } catch (err) {
                console.error(err);
            }
        };
    return (
        <div>

            {step === 1 && (
                <ProjectInformationForm
                    data={projectInformation}
                    setData={setProjectInformation}
                    onContinue={() => setStep(2)}
                    onSaveDraft={handleSaveDraft}
                />
            )}

            {step === 2 && (
                <TechnicalDetailsForm
                    data={technicalDetails}
                    setData={setTechnicalDetails}
                    onBack={() => setStep(1)}
                    onContinue={() => setStep(3)}
                    onSaveDraft={handleSaveDraft}
                />
            )}

            {step === 3 && (
                <PricingForm
                    data={priceDetails}
                    setData={setPriceDetails}
                    projectInformation={projectInformation}
                    technicalDetails={technicalDetails}
                    onBack={() => setStep(2)}
                    onSaveDraft={handleSaveDraft}
                    onSubmit={handleSubmit}
                />
            )}

        </div>
    );
}