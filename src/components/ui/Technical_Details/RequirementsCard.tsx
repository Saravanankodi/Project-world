"use client";

import { geist } from "@/lib/fonts";
import OSSelector from "./OSSelector";
import FormTextarea from "../Upload_Project/FormTextarea";
import { LucideIcon } from "lucide-react";

interface OperatingSystem {
    id: string;
    name: string;
    icon: LucideIcon;
}

interface RequirementsCardProps {
    operatingSystems: OperatingSystem[];
    selectedOS: string[];
    toggleOS: (os: string) => void;

    hardwareRequirements: string;
    setHardwareRequirements: (value: string) => void;

    dependencies: string;
    setDependencies: (value: string) => void;
}

export default function RequirementsCard({
   
    selectedOS,
    toggleOS,
    hardwareRequirements,
    setHardwareRequirements,

    dependencies,
    setDependencies,
}: RequirementsCardProps) {
    return (
        <div className="rounded-2xl border border-[#EAECF0] p-6">

            <h3
                className={`${geist.className} text-lg font-normal text-[#161D16]`}
            >
                Requirements
            </h3>

            <div className="mt-8 space-y-6">

                <OSSelector
                    selectedOS={selectedOS}
                    onToggle={toggleOS}
                />

                <FormTextarea
                className="h-30"
                    label="Hardware/Software Requirements"
                    placeholder="Visual studeio code
version 3.7"
                    value={hardwareRequirements}
                    onChange={(e) =>
                        setHardwareRequirements(e.target.value)
                    }
                />



                <FormTextarea
                className="h-15"
                    label="Dependencies"
                    placeholder={`Node v18+ Docker Python 3.9 Express MongoDB`}
                    value={dependencies}
                    onChange={(e) => setDependencies(e.target.value)}
                />
            </div>

        </div>
    );
}