"use client";

import { Monitor, Laptop, Server } from "lucide-react";

const operatingSystems = [
    {
        id: "windows",
        name: "Windows",
        icon: Monitor,
    },
    {
        id: "macos",
        name: "macOS",
        icon: Laptop,
    },
    {
        id: "linux",
        name: "Linux",
        icon: Server,
    },
];

interface OSSelectorProps {
    selectedOS: string[];
    onToggle: (os: string) => void;
}

export default function OSSelector({
    selectedOS,
    onToggle,
}: OSSelectorProps) {
    return (
        <div>
            <label className="mb-4 block text-sm font-medium text-[#344054]">
                Operating Systems
            </label>

            <div className="grid grid-cols-3 gap-3">
                {operatingSystems.map((os) => {
                    const Icon = os.icon;
                    const active = selectedOS.includes(os.id);
                    return (
                        <button
                            key={os.id}
                            type="button"
                            onClick={() => onToggle(os.id)}
                            className={`flex flex-col items-center justify-center rounded-xl border p-5 transition
                                ${active
                                    ? "border-[#039855] bg-[#ECFDF3]"
                                    : "border-[#EAECF0] hover:border-[#039855]"
                                }`}
                        >
                            <Icon
                                size={28}
                                className={
                                    active
                                        ? "text-[#039855]"
                                        : "text-[#98A2B3]"
                                }
                            />

                            <span
                                className={`mt-3 text-sm font-medium ${active
                                        ? "text-[#027A48]"
                                        : "text-[#344054]"
                                    }`}
                            >
                                {os.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}