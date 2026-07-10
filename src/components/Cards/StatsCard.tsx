"use client";

import React from "react";
import { geist, inter } from "@/lib/fonts";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
    title?: string;
    value?: string | number;

    subtitle?: string;
    center?: boolean;
    largeValue?: boolean;

    icon?: React.ReactNode;
    iconBg?: string;

    badge?: string;
    badgeColor?: string;

    trend?: string;
    trendUp?: boolean;

    valueColor?: string;

    rightIcon?: React.ReactNode;

    className?: string;
}

export default function StatsCard({
    title,
    value,

    subtitle,
    center,
    largeValue,

    icon,
    iconBg = "bg-[#ECFDF3]",

    badge,
    badgeColor = "bg-[#ECFDF3] text-[#027A48]",

    trend,
    trendUp = true,

    valueColor = "text-[#161D16]",

    rightIcon,

    className = "",
}: StatsCardProps) {
    return (
        <div
            className={`rounded-2xl   shadow-sm transition hover:shadow-md ${largeValue ? "bg-[#EDF6EA] p-5" : "bg-white p-1" } ${className}`}
        >
            {center ? (
                // =========================
                // Center Layout
                // =========================
                <div className={`flex h-full flex-col items-center justify-center text-center  `}>

                    {icon && (
                        <div
                            className={`mb-1 flex h-10 w-10 items-center justify-center rounded-2xl ${iconBg} text-[#006E2F66]`}
                        >
                            {icon}
                        </div>
                    )}

                    <h2
                        className={`${geist.className} ${largeValue ? "text-2xl text-[#006E2F] font-semibold" : "text-sm font-bold text-[#161D16]"
                            } font-bold ${valueColor}`}
                    >
                        {value}
                    </h2>

                    {subtitle && (
                        <p
                            className={`${geist.className} mt-2 text-[10px] uppercase tracking-wide ${largeValue ? "text-[#161D16]" : "text-[#3D4A3D]"}`}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            ) : (
                // =========================
                // Analytics Layout
                // =========================
                <>
                    {/* Top */}
                    <div className="flex items-start justify-between">

                        <div className="flex items-center gap-3">

                            {icon && (
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
                                >
                                    {icon}
                                </div>
                            )}

                            {title && (
                                <p
                                    className={`${geist.className} text-xs uppercase tracking-wide text-[#667085]`}
                                >
                                    {title}
                                </p>
                            )}

                        </div>

                        {badge && (
                            <span
                                className={`${inter.className} rounded-full px-2.5 py-1 text-xs font-semibold ${badgeColor}`}
                            >
                                {badge}
                            </span>
                        )}

                    </div>

                    {/* Bottom */}
                    <div className="mt-4 flex items-end justify-between">

                        <h2
                            className={`${geist.className} text-xl sm:text-2xl font-bold ${valueColor}`}
                        >
                            {value}
                        </h2>

                        {trend && (
                            <div
                                className={`flex items-center gap-1 text-[10px] sm:text-xs font-semibold ${trendUp
                                        ? "text-[#027A48]"
                                        : "text-[#D92D20]"
                                    }`}
                            >
                                {trendUp ? (
                                    <TrendingUp size={16} />
                                ) : (
                                    <TrendingDown size={16} />
                                )}

                                {trend}
                            </div>
                        )}

                        {rightIcon}

                    </div>
                </>
            )}
        </div>
    );
}