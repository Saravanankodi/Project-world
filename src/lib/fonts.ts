import { Geist, Inter,} from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import { Libertinus_Mono } from "next/font/google"


export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const geist = Geist({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const hanken = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const libertinus = Libertinus_Mono({
    subsets: ["latin"],
    weight: "400",
});
