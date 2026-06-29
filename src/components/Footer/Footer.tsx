import React from 'react'
import { inter } from "@/lib/fonts";

function Footer() {
    return (
        <div className={`${inter.className} hidden w-full  md:flex  justify-between px-8 bg-white text-[#565E74] text-xs`}>
            <div className="flex m-1">
                <ul className={`flex flex-row gap-6 font-medium ${inter.className}`}>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className={` flex flex-col gap-1  items-end justify-center ${inter.className}`}>
                <span className='text-[#565E74B2] text-xs font-normal'> © 2026 ProjectVerse. Discover. Build. Share. Innovate.</span>
                <span className='text-[#006E2F99] text-xs  font-bold'>POWERED BY DESFLYER</span>
            </div>
        </div>
    )
}

export default Footer