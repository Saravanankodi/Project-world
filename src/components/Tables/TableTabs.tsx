"use client";

import { geist } from "@/lib/fonts";
import { useState } from "react";

export interface TabItem {
    id: string;
    label: string;
    count: number;
}

interface TableTabsProps {
    tabs: TabItem[];
    defaultTab?: string;
    onChange?: (tab: string) => void;
}

const TableTabs = ({
    tabs,
    defaultTab,
    onChange,
}: TableTabsProps) => {
    const [activeTab, setActiveTab] = useState(
        defaultTab || tabs[0].id
    );

    const handleTab = (id: string) => {
        setActiveTab(id);
        onChange?.(id);
    };

    return (
        <div className="flex items-center gap-8 overflow-x-auto border-b border-[#BCCBB9] bg-[#EDF6EA] px-6">
            {tabs.map((tab) => {
                const active = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => handleTab(tab.id)}
                        className={`relative whitespace-nowrap py-3 text-sm font-medium transition-all ${geist.className}
              ${active
                            ? "text-[#006E2F]"
                            : "text-[#3D4A3D] hover:text-[#0A8A43]"
                            }`}
                    >
                        {tab.label} ({tab.count})

                        {active && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#006E2F]" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default TableTabs;