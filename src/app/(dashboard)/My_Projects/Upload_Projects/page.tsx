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

import ProjectInformation from "@/components/ui/Upload_Project/ProjectInformation";
import TechnicalDetails from "@/components/ui/Upload_Project/TechnicalDetails";



export default function UploadProjectPage() {

    const [step, setStep] = useState(1);

    return (

        <div className="mx-auto max-w-7xl">

            <Stepper currentStep={step} />

            <UploadHeader
                title="Upload Your Project"
                description="Share your innovation with students and creators worldwide."
            />

            {step === 1 && (
                <ProjectInformation
                    onContinue={() => setStep(2)}
                />
            )}

            {step === 2 && (
                <TechnicalDetails
                    onContinue={() => setStep(3)}
                    onBack={() => setStep(1)}
                />
            )}

            {/* {step === 3 && (
                <PricingSettings
                    onBack={() => setStep(2)}
                />
            )} */}

        </div>

    );

}