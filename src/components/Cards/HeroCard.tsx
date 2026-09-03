"use client"; 

import React from 'react'
import Button from '../Button/Button'
import RightArrow from '../icons/cards/RightArrow'
import { inter, geist } from "@/lib/fonts"
import { useRouter } from "next/navigation";


function HeroCard() {
    const router = useRouter();
    return (
        <div>
            <div className="relative overflow-hidden rounded-3xl bg-[#006E2F] mb-2">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center px-8 py-5 md:py-10 text-white">
                        <h1 className={` ${geist.className} text-xl md:text-2xl  font-semibold text-white`}>
                            Welcome back, Sarah! 👋
                        </h1>

                        <p className={` ${inter.className} mt-3 text-sm md:text-base text-white`}>
                            Discover your next breakthrough project, connect with top-tier creators,
                            and scale your innovations.
                        </p>

                        <div className="mt-5 md:mt-8 flex gap-4">
                            <Button
                                onClick={() => router.push("/Explore")}
                                className={`rounded-xl bg-white py-3 md:px-6 md:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-3  font-bold text-xs md:text-base lg:text-sm xl:text-base text-[#006E2F] ${geist.className}`}
                                rightIcon={<RightArrow />}
                            >
                                Explore Projects
                            </Button>

                            <Button
                                onClick={() => router.push("/My_Projects/Upload_Projects")}
                                className={`rounded-xl border border-[#FFFFFF4D] bg-[#22C55E33] py-3 md:px-6 md:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-3 font-bold  text-xs md:text-base lg:text-sm xl:text-base  text-white ${geist.className}`}
                            >
                                Upload Project
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden lg:block">
                        <img
                            src="/cards/Banner.png"
                            alt="Banner"
                            className="h-full w-full object-cover"
                        />

                        {/* Green Overlay */}
                        <div className="absolute inset-0 bg-[#006E2F]/35" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard