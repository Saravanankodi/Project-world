export interface ProjectInformation {
    title: string;
    domain: string;
    technology: string;
    projectType: string;
    description: string;
    tags: string[];
}

export interface TechnicalDetails {
    languages: {
        language: string;
        percentage: string;
    }[];

    operatingSystems: string[];

    hardwareRequirements: string;
    softwareRequirements: string;
    dependencies: string;

    resources?: {
        sourceCode?: FileResource | null;
        documentation?: FileResource | null;
        demoVideo?: FileResource | null;
        screenshots?: FileResource | null;
    };
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

export interface FileResource {
    name: string;
    url: string;
    path: string;
    size: number;
    type: string;
}

export interface Project {
    projectInformation: ProjectInformation;
    technicalDetails: TechnicalDetails;
    priceDetails: PriceDetails;
    status: "draft" | "published";
    createdAt?: unknown;
    updatedAt?: unknown;
}