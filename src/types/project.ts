import { ProjectStatus } from "@/services/project";

export interface ProjectInformation {
    title: string;
    domain: string;
    technology: string[];
    projectType: string;
    description: string;
}

export interface TechnicalDetails {
    languages: {
        language: string;
        percentage: string;
    }[];

    operatingSystems: string[];

    hardwareRequirements: string;
    dependencies: string;

    resources: {
    sourceCode: string | null;
    documentation: string | null;
    demoVideo: string | null;
    screenshots:(string | null)[];
}
}

export interface PriceDetails {
    pricingType: "free" | "paid";
    basePrice: number;
    discountEnabled: boolean;
    discount: number;
    chatEnabled: boolean;
    enableRatings: boolean;
    acceptFeedback: boolean;
}



export interface Project {
    id?:string;
    projectInformation: ProjectInformation;
    technicalDetails: TechnicalDetails;
    priceDetails: PriceDetails;
    status: ProjectStatus;
    createdAt?: unknown;
    updatedAt?: unknown;
}

export interface ProjectTypeProps {
    value: string;
    onChange: (value: string) => void;
}
