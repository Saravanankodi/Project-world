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

import { Timestamp } from "firebase/firestore";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { PriceDetails, Project, ProjectInformation, TechnicalDetails } from "./project";
import { User } from "@/services/user";

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
export type technicalStack ={
    language:string;
    percentage:string;
}
export type OverviewProps ={
    overview:string;
    techStacklist: technicalStack[];
    requirements:string[];
}
export type FeaturesProps = {
    feature:string;
    overview:string;
}
export type TechnicalDetailsProps = {
    techStacklist: technicalStack[];
    requirements: string[];
    architecture: string[];
}
export type ProjectStatus =
    | "marketplace"
    | "review"
    | "draft";

// export interface Project {
//     id: number;
//     image: string;
//     title: string;
//     website: string;
//     technologies: string[];
//     uploadDate: string;
//     status: ProjectStatus;
//     metrics: {
//         sales?: number;
//         revenue?: string;
//         views?: string;
//         likes?: number;
//         progress?: number;
//     };
   
// }

export interface ProjectTableProps {
    projects: Project[];
    page: number;
    totalPages: number;
    totalItems: number;
    rowsPerPage: number;

    onPageChange: (page: number) => void;
}

export type RatingPercentageBarProps = {
  star: number;
  percentage: number;
  color?: string;
};


interface Props {
    label: string;
    placeholder: string;
    value?: string[];
    onChange?: (tags: string[]) => void;
}
export type MessageType = "text" | "image" | "file";

export type MessageStatus = "sent" | "delivered" | "read";

export type message = {
    msg: string;
    type: MessageType;
    senderId:string;
    createdAt: Date;
    status?: MessageStatus;
} 

export type ChatcardProps = {
    name:string;
    profile?: string;
    message: string; 
    time: string;
}
export interface Message {
  msg: string;
  type: "text";
  senderId: string;
  createdAt: string;
  status: "sent" | "read" | "delivered";
}

export interface Chat {
  projectId: string;
  lastMessage: string;
  updatedAt: string;
  messages: Record<string, Message>;
}

export interface ChatData {
  currentUser: string;
  chats: Record<string, Chat>;
}
export type Option ={
    label:string;
    value:string;
}
export type DropdownProps ={
    name:string;
    option: Option[];
    value?:string | number;
    onChange:(value:string)=> void;
}

export interface VerificationCardProps {
  icon: ReactNode;
  value: string;
  verified?: boolean;
}

export type IssusesCardProps = {
    icon:ReactNode;
    title:string;
    value:string;
    variant?: "default" | "reverse" | "category";
}
export interface IssueDetailsProps {
  projectName: string;
  paymentAmount: number;
  technicalSummary: string;
  description: string;
}

// For firestore and state management

export type Portfolio = {
    github: string;
    linkedin: string;
    website: string;
    behance: string;
}
// payment details for user profile
export interface PaymentDetails {
  method: "bank" | "upi";

  accountHolder?: string;
  bankName?: string;
  accountNumber?: string;
  ifsc?: string;

  upiId?: string;
  phoneNumber?: string;
}

export interface UserProfile {
  uid: string;

  name: string;
  email: string;
  phone: string;

  age: number;

  gender: "none" | "male" | "female";

  userType: "student" | "professional";

  experience: number;

  location: string;

  intro: string;

  profileImg: string;

  portfolioLinks: Portfolio;

  payment: PaymentDetails;

  createdAt: Timestamp;

  updatedAt: Timestamp;
}

export interface Payment {
    id: number;
    date: string;
    project: string;
    category: string;
    amount: string;
    method: "UPI" | "CARD" | "BANK";
    status: "PAID" | "PENDING" | "FAILED";
}

// for local profile update

export interface Profile{
    profile:any;
    setProfile:React.Dispatch<any>;
}

export type projectsWithUsers = {
 owner: User | undefined;
 id?: string;
 ownerId: string;
 projectInformation: ProjectInformation;
 technicalDetails: TechnicalDetails;
 priceDetails: PriceDetails;
 status: ProjectStatus;
 rejectionReason?: string;
 createdAt?: unknown;
 updatedAt?: unknown;
 publishedAt?: unknown;
}