"use client";

import { useState } from "react";

import ProjectInformation from "./Upload_Project/ProjectInformation";
import TechnicalDetails from ".//Technical_Details/TechnicalDetails";
import Pricing from ".//Pricing/Pricing";

export default function UploadProject() {
    const [step, setStep] = useState(1);

    // STEP 1 DATA
    const [projectInformation, setProjectInformation] =
        useState({
            title: "",
            domain: "",
            technology: "",
            projectType: "",
            description: "",
            tags: [],
        });

    // STEP 2 DATA
    const [technicalDetails, setTechnicalDetails] =
        useState({
            languages: [
                {
                    language: "",
                    percentage: "",
                },
            ],

            operatingSystems: [],

            hardwareRequirements: "",
            softwareRequirements: "",
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
        useState({
            pricingType: "paid",
            basePrice: 4999,
            discountEnabled: true,
            discount: 20,
            chatEnabled: true,
            enableRatings: true,
            acceptFeedback: true,
        });

    return (
        <div>

            {step === 1 && (
                <ProjectInformation
                    data={projectInformation}
                    setData={setProjectInformation}
                    onContinue={() => setStep(2)}
                />
            )}

            {step === 2 && (
                <TechnicalDetails
                    data={technicalDetails}
                    setData={setTechnicalDetails}
                    onBack={() => setStep(1)}
                    onContinue={() => setStep(3)}
                />
            )}

            {step === 3 && (
                <Pricing
                    data={priceDetails}
                    setData={setPriceDetails}
                    projectInformation={projectInformation}
                    technicalDetails={technicalDetails}
                    onBack={() => setStep(2)}
                />
            )}

        </div>
    );
}