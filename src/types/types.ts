export interface ProjectCardProps {
    image: string;
    category: string;
    title: string;
    description: string;
    rating: number;
    author: string;
    authorAvatar?: string;
    price: number | string;
    bookmarked?: boolean;
   
}


import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
}

export type CategoriesCardProps = {
    icon:React.ReactNode;
    tittle:string;
    projectCount:number;    
}

export type ProjectInfoProps = {
    tittle:string;
    categories:string;
    avgRatings:number;
    reviewCount:number;
    purchasesCount:number;
    tagList:string[];
    price:number;
    discount:number;
}
export type ProjectStatus =
    | "marketplace"
    | "review"
    | "draft";

export interface Project {
    id: number;
    image: string;
    title: string;
    website: string;
    technologies: string[];
    uploadDate: string;
    status: ProjectStatus;
    metrics: {
        sales?: number;
        revenue?: string;
        views?: string;
        likes?: number;
        progress?: number;
    };
   
}

export interface ProjectTableProps {
    projects: Project[];
    page: number;
    totalPages: number;
    totalItems: number;
    rowsPerPage: number;

    onPageChange: (page: number) => void;
}


