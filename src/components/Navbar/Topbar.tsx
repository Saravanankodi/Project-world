

import React from 'react'
import { CartIcon, NotificationIcon, SearchIcon, } from '../icons'
import Image from 'next/image'
import { inter, geist } from '@/lib/fonts'
import Search from './Search'

function Topbar() {
    return (
        <div className='min-w-0 w-full md:p-2 px-4 py-2 flex flex-row items-center md:justify-between md:px-8 bg-white border-b border-[#BCCBB94D]'>
            <div className='w-3/5 hidden md:flex flex-row gap-12 items-center justify-start'>
                <div className={` text-2xl text-[#161D16] ms-5 font-bold ${geist.className}`}>ProjectVerse</div>
                <div className='w-3/6'><Search /></div>
            </div>
            <div className='min-w-0 w-full md:hidden flex items-center justify-between'>
                <div className={` text-2xl text-[#161D16]  font-bold ${geist.className}`}>ProjectVerse</div>
                <div className='px-4'><SearchIcon /></div>
            </div>
            <div className='flex flex-row justify-center items-center md:gap-4'>
                <div><NotificationIcon /></div>
                <div className='hidden md:block'><CartIcon /></div>
                <div className='w-5 h-6  flex items-center justify-center'><div className='w-0.5 h-6 bg-[#BCCBB9] '></div></div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <div className='hidden md:flex flex-col items-start justify-center  '>
                        <span className={`text-sm text-[#161D16] font-bold ${geist.className}`}>Alex Rivera</span>
                        <span className={`text-xs text-[#3D4A3D] font-normal ${inter.className}`}>Senior Architect</span>
                    </div>
                    <div>
                        <div className='w-10 h-10 border-2 border-[#22C55E] rounded-full'><Image src="/Topbar/ProfileImage.jpg" alt="Alex Rivera" width={40} height={40} className=' rounded-full' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar