"use client";

import { geist, inter } from "@/lib/fonts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProfileCompletionCardProps {
    percentage: number;
}

export default function ProfileCompletionCard({
    percentage,
}: ProfileCompletionCardProps) {
    return (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white sm:p-5 p-2 shadow-sm">
            <div className="flex items-center sm:gap-5 gap-2">
                <div className="text-[#006E2F] text-sm sm:hidden block">{percentage}%</div>
                <div className="h-16 w-16 shrink-0 hidden sm:block">
                   
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={10}
                        styles={buildStyles({
                            textColor: "#006E2F",
                            pathColor: "#006E2F",
                            trailColor: "#E4E7EC",
                            textSize: "16px",
                        })}
                    />
                </div>

                <div>

                    <h3
                        className={`${geist.className} text-xs sm:text-sm font-bold text-[#161D16]`}
                    >
                        {percentage}% Completed
                    </h3>

                    <p
                        className={`${inter.className} mt-1 text-[10px]  text-xs text-[#3D4A3D] leading-5`}
                    >
                        Almost there! Complete your profile to boost visibility.
                    </p>

                </div>

            </div>
        </div>
    );
}