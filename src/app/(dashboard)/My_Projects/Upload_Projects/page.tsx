"use client";

import { useState } from "react";
import { PriceDetails, ProjectInformation, TechnicalDetails } from "@/types/project";
import ProjectInformationForm from "@/components/ui/Upload_Project/ProjectInformation";
import TechnicalDetailsForm from "@/components/ui/Technical_Details/TechnicalDetails";
import PricingForm from "@/components/ui/Pricing/Pricing";
import { saveDraft, submitProject, updateProject } from "@/services/project";
import { getAuth } from "firebase/auth";
import { uploadFile } from "@/services/storage";



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
            technology: [""],
            projectType: "",
            description: "",
        });
const [projectFiles, setProjectFiles] = useState({
    sourceCode: null as File | null,
    documentation: null as File | null,
    demoVideo: null as File | null,
    screenshots: [] as File[],
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

            operatingSystems: [],

            hardwareRequirements: "",
            dependencies: "",

            resources: {
                sourceCode: null,
                documentation: null,
                demoVideo: null,
                screenshots: [],
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
        const sourceCodeURL = await uploadFile(
            projectFiles.sourceCode,
            "sourceCode"
        );

        const documentationURL = await uploadFile(
            projectFiles.documentation,
            "documentation"
        );

        const demoVideoURL = await uploadFile(
            projectFiles.demoVideo,
            "videos"
        );

       const screenshotsURL = await Promise.all(
    projectFiles.screenshots.map((file) =>
        uploadFile(file, "screenshots")
    )
);

        const technicalData = {
            ...technicalDetails,
            resources: {
                sourceCode: sourceCodeURL,
                documentation: documentationURL,
                demoVideo: demoVideoURL,
                screenshots: screenshotsURL,
            },
        };

        if (!projectId) {
            const id = await saveDraft({
                ownerId: user.uid,
                projectInformation,
                technicalDetails: technicalData,
                priceDetails,
                status: "draft",
            });

            setProjectId(id);
        } else {
            await updateProject(projectId, {
                projectInformation,
                technicalDetails: technicalData,
                priceDetails,
            });
        }

        alert("Draft saved.");
    } catch (err) {
        console.error(err);
        alert("Failed to save draft.");
    }
};

const handleSubmit = async () => {
    if (!user) return;

    try {
        // Upload files
        const sourceCodeURL = await uploadFile(
            projectFiles.sourceCode,
            "sourceCode"
        );

        const documentationURL = await uploadFile(
            projectFiles.documentation,
            "documentation"
        );

        const demoVideoURL = await uploadFile(
            projectFiles.demoVideo,
            "videos"
        );

      const screenshotsURL = await Promise.all(
    projectFiles.screenshots.map((file) =>
        uploadFile(file, "screenshots")
    )
);

        // Create technical details with URLs
        const technicalData = {
            ...technicalDetails,
            resources: {
                sourceCode: sourceCodeURL,
                documentation: documentationURL,
                demoVideo: demoVideoURL,
                screenshots: screenshotsURL,
            },
        };

        let id = projectId;

        if (!id) {
            id = await saveDraft({
                ownerId: user.uid,
                projectInformation,
                technicalDetails: technicalData,
                priceDetails,
                status: "draft",
            });

            setProjectId(id);
        }

        await submitProject(id, {
            projectInformation,
            technicalDetails: technicalData,
            priceDetails,
        });

        alert("Project submitted successfully.");
    } catch (err) {
        console.error(err);
        alert("Submission failed.");
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
                    projectFiles={projectFiles}
                    setProjectFiles={setProjectFiles}
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