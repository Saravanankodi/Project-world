"use client";

import { geist, inter } from "@/lib/fonts";

interface LanguageItem {
    language: string;
    percentage: string;
}

interface UsageDistributionProps {
    languages: LanguageItem[];
}

export default function UsageDistribution({
    languages,
}: UsageDistributionProps) {
    const total = languages.reduce(
        (sum, item) => sum + (Number(item.percentage) || 0),
        0
    );

    const validLanguages = languages.filter(
        (item) =>
            item.language.trim() !== "" &&
            Number(item.percentage) > 0
    );

    return (
        <div className="flex-1 rounded-2xl border border-[#EAECF0] bg-white p-6">

            {/* Header */}
            <div className="flex items-start justify-between">

                <div>

                    <h3
                        className={`${geist.className} text-lg font-normal text-[#161D16]`}
                    >
                        Usage Distribution
                    </h3>

                </div>

                <span className={`${inter.className} text-sm font-semibold text-[#006E2F]`}>
                    {total}% Total
                </span>

            </div>

            {/* Progress Bars */}
            <div className="mt-8 space-y-6 ">

                {validLanguages.length > 0 ? (
                    validLanguages.map((item, index) => {

                        const percentage = Math.min(
                            Number(item.percentage),
                            100
                        );

                        return (

                            <div key={index} className="space-y-1 overflow-auto max-h-30">

                                <div className="mb-2 flex items-center justify-between">

                                    <span className={`${inter.className} text-sm font-medium text-[#161D16]`}>
                                        {item.language}
                                    </span>

                                    <span className={`${inter.className} text-sm font-semibold text-[#161D16]`}>
                                        {percentage}%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#E4E7EC]">

                                    <div
                                        className="h-full rounded-full bg-[#E2EBDE] transition-all duration-300"
                                        style={{
                                            width: `${percentage}%`,
                                        }}
                                    />

                                </div>

                            </div>

                        );
                    })
                ) : (

                    <div className="h-50 flex items-center justify-center rounded-xl border border-dashed border-[#D0D5DD]  text-center">

                        <p className="text-sm text-[#98A2B3] p-2">
                            Add programming languages above to see usage distribution.
                        </p>

                    </div>

                )}

            </div>

            {/* Footer Validation */}
            {validLanguages.length > 0 && total !== 100 && (

                <div className="mt-6 rounded-lg bg-[#eeffed] px-4 py-3">

                    <p className="text-sm font-medium text-[#47b508]">
                        Total percentage should equal 100%.
                    </p>

                </div>

            )}

        </div>
    );
}