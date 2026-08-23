"use client";

import { useState , useEffect } from "react";
import { ExistingProjectFiles, PriceDetails, ProjectInformation, TechnicalDetails } from "@/types/project";
import ProjectInformationForm from "@/components/ui/Upload_Project/ProjectInformation";
import TechnicalDetailsForm from "@/components/ui/Technical_Details/TechnicalDetails";
import PricingForm from "@/components/ui/Pricing/Pricing";
import { saveDraft, submitProject, updateProject } from "@/services/project";
import { getAuth } from "firebase/auth";
import { uploadFile } from "@/services/storage";
import { getProjectById } from "@/services/project";
import { useSearchParams } from "next/navigation";


export default function UploadProject() {

    const auth = getAuth();
    const user = auth.currentUser;

    const [step, setStep] = useState(1);
    const searchParams = useSearchParams();
    const editProjectId = searchParams.get("id");
    const isEditMode = !!editProjectId;
    const [projectId, setProjectId] = useState<string | null>(editProjectId);
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

        const [existingFiles, setExistingFiles] =
            useState<ExistingProjectFiles>({
                sourceCode: null,
                documentation: null,
                demoVideo: null,
                screenshots: [],
            });

        useEffect(() => {
    if (!editProjectId) return;

    const id = editProjectId;

    async function loadProject() {
        try {
            const project = await getProjectById(id);

            if (!project) return;

            setProjectInformation(project.projectInformation);
            setTechnicalDetails(project.technicalDetails);
            setPriceDetails(project.priceDetails);
            setProjectId(project.id ?? null);

            setExistingFiles({
                sourceCode: project.technicalDetails.resources.sourceCode,
                documentation: project.technicalDetails.resources.documentation,
                demoVideo: project.technicalDetails.resources.demoVideo,
                screenshots: project.technicalDetails.resources.screenshots,
            });
        } catch (err) {
            console.error(err);
        }
    }

    loadProject();
}, [editProjectId]);

// save draft
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
//submit form
const handleSubmit = async () => {
    if (!user) return;

    try {
        const sourceCodeURL = projectFiles.sourceCode
            ? await uploadFile(projectFiles.sourceCode, "sourceCode")
            : technicalDetails.resources.sourceCode;

        const documentationURL = projectFiles.documentation
            ? await uploadFile(projectFiles.documentation, "documentation")
            : technicalDetails.resources.documentation;

        const demoVideoURL = projectFiles.demoVideo
            ? await uploadFile(projectFiles.demoVideo, "videos")
            : technicalDetails.resources.demoVideo;

        const screenshotsURL =
            projectFiles.screenshots.length > 0
                ? await Promise.all(
                      projectFiles.screenshots.map((file) =>
                          uploadFile(file, "screenshots")
                      )
                  )
                : technicalDetails.resources.screenshots;

        const technicalData = {
            ...technicalDetails,
            resources: {
                sourceCode: sourceCodeURL,
                documentation: documentationURL,
                demoVideo: demoVideoURL,
                screenshots: screenshotsURL,
            },
        };

        // ==========================
        // EDIT PROJECT
        // ==========================
        if (isEditMode && projectId) {
            await updateProject(projectId, {
                projectInformation,
                technicalDetails: technicalData,
                priceDetails,
                status: "pending",
            });

            alert("Project updated successfully.");
            return;
        }

        // ==========================
        // CREATE NEW PROJECT
        // ==========================
        const id = await saveDraft({
            ownerId: user.uid,
            projectInformation,
            technicalDetails: technicalData,
            priceDetails,
            status: "draft",
        });

        await submitProject(id, {
            projectInformation,
            technicalDetails: technicalData,
            priceDetails,
        });

        setProjectId(id);

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
                    existingFiles={existingFiles}
                    setExistingFiles={setExistingFiles}
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