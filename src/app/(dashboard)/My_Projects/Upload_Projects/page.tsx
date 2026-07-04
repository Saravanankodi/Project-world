// import Stepper from "@/components/ui/Upload_Project/Stepper";
// import UploadHeader from "@/components/ui/Upload_Project/UploadHeader";
// import ProjectInformation from "@/components/ui/Upload_Project/ProjectInformation";

// export default function UploadProjectPage() {
//     return (
//         <div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">

//             <Stepper currentStep={1} />

//             <UploadHeader
//                 title="Upload Your Project"
//                 description="Share your innovation with students and creators worldwide."
//             />

//             <ProjectInformation />

//         </div>
//     );
// }



"use client";

import { useState } from "react";

import Stepper from "@/components/ui/Upload_Project/Stepper";
import UploadHeader from "@/components/ui/Upload_Project/UploadHeader";
import { useRouter } from "next/navigation";
import ProjectInformation from "@/components/ui/Upload_Project/ProjectInformation";
import TechnicalDetails from "@/components/ui/Technical_Details/TechnicalDetails";
import Pricing from "@/components/ui/Upload_Project/Pricing";



export default function UploadProjectPage() {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        setStep((prev) => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSaveDraft = () => {
        console.log("Draft Saved");
        alert("Draft saved successfully!");
    };
    const router = useRouter();

    const handleSubmit = () => {
        console.log("Project Submitted");
        // API Call
        alert("Project submitted successfully!");
        // later:
        router.push("/My_Projects");
    };

    return (

        <div className="mx-auto max-w-7xl">

            <Stepper currentStep={step} />

           

            {step === 1 && (
                <ProjectInformation
                    onContinue={handleContinue}
                    onSaveDraft={handleSaveDraft}
                />
            )}

            {step === 2 && (
                <TechnicalDetails
                    onBack={handleBack}
                    onContinue={handleContinue}
                    onSaveDraft={handleSaveDraft}
                />
            )}

            {step === 3 && (
                <Pricing
                    onBack={handleBack}
                    onSaveDraft={handleSaveDraft}
                    onSubmit={handleSubmit}
                />
            )}

        </div>

    );

}