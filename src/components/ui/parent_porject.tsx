// "use client";

// import { useState } from "react";
// import ProjectInformationForm from "./Upload_Project/ProjectInformation";
// import TechnicalDetailsForm from "./Technical_Details/TechnicalDetails";
// import { PriceDetails, ProjectInformation, TechnicalDetails } from "@/types/project";
// import PricingForm from "./Pricing/Pricing";


// export default function UploadProject() {
//     const [step, setStep] = useState(1);

//     // STEP 1 DATA
//     const [projectInformation, setProjectInformation] =
//         useState<ProjectInformation>({
//             title: "",
//             domain: "",
//             technology: [""],
//             projectType: "",
//             description: "",
//         });

//     // STEP 2 DATA
//     const [technicalDetails, setTechnicalDetails] =
//         useState<TechnicalDetails>({
//             languages: [
//                 {
//                     language: "",
//                     percentage: "",
//                 },
//             ],

//             operatingSystems: [''],

//             hardwareRequirements: "",
//             dependencies: "",

//             resources: {
//                 sourceCode: null,
//                 documentation: null,
//                 demoVideo: null,
//                 screenshots: [null],
//             },
//         });

//     // STEP 3 DATA
//     const [priceDetails, setPriceDetails] =
//         useState<PriceDetails>({
//             pricingType: "paid",
//             basePrice: 4999,
//             discountEnabled: true,
//             discount: 20,
//             chatEnabled: true,
//             enableRatings: true,
//             acceptFeedback: true,
//         });

//     return (
//         <div>

//             {step === 1 && (
//                 <ProjectInformationForm
//                     data={projectInformation}
//                     setData={setProjectInformation}
//                     onContinue={() => setStep(2)}
//                 />
//             )}

//             {step === 2 && (
//                 <TechnicalDetailsForm
//                     data={technicalDetails}
//                     setData={setTechnicalDetails}
//                     onBack={() => setStep(1)}
//                     onContinue={() => setStep(3)}
//                 />
//             )}

//             {step === 3 && (
//                 <PricingForm
//                     data={priceDetails}
//                     setData={setPriceDetails}
//                     projectInformation={projectInformation}
//                     technicalDetails={technicalDetails}
//                     onBack={() => setStep(2)}
//                 />
//             )}

//         </div>
//     );
// }