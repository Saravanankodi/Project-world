"use client";

import { useState } from "react";
import { inter } from "@/lib/fonts";

const types = [
    "Web App",
    "Mobile App",
    "Desktop App",
    "Other",
];

export default function ProjectType() {
    const [selected, setSelected] = useState("Web App");

    return (
        <div className="flex flex-col gap-3">

            <label className={`${inter.className} text-sm font-semibold text-[#161D16]`}>
                Project Type
            </label>

            <div className="flex flex-wrap gap-5">

                {types.map((type) => (

                    <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            checked={selected === type}
                            onChange={() => setSelected(type)}
                            className="accent-[#22C55E]"
                        />

                        <span
                            className={`${inter.className} text-sm text-[#344054]`}
                        >
                            {type}
                        </span>

                    </label>

                ))}

            </div>
        </div>
    );
}