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