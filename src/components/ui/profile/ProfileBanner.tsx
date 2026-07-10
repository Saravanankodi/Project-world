// import Button from '@/components/Button/Button'
// import { GraduationCap, UserCog, Verified } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// const ProfileBanner = () => {
//   return (
//     <>
//           <section className="w-full h-auto flex items-center gap-4 rounded-2xl shadow-xl shadow-[#0F172A0D] bg-white p-6">
//         <aside className=" relative w-30 h-30">
//             <Image 
//                 src={'/Topbar/ProfileImage.jpg'}
//                 alt='Profile'
//                 fill
//                 className='object-cover rounded-2xl'
//                 />
//         </aside>
//         <main className="flex-1">
//             <aside className="flex items-center gap-3">
//                 <h2 className="text-2xl  font-semibold">
//                     Alex Rivera
//                 </h2>
//                 <span className="text-sm font-semibold text-[#5C647A] flex items-center gap-2 px-3 py-1 bg-[#DAE2FD] rounded-full">
//                     <Verified className='w-4 h-4 '/>
//                     Verified
//                 </span>
//             </aside>
//             <div className="w-auto space-y-1">
//                 <span className="flex items-center gap-2 text-[#3D4A3D] text-sm">
//                     <GraduationCap className='w-5 h-5'/>
//                     IIT Bombay
//                 </span>
//                 <span className="flex items-center gap-2 text-[#3D4A3D] text-sm">
//                     <UserCog className='w-5 h-5'/>
//                     Civil Engineering, IoT, AI/ML
//                 </span>
//                 <span className="flex items-center gap-2 text-[#3D4A3D] text-sm">
//                     <GraduationCap className='w-5 h-5'/>
//                     Chennai
//                 </span>
//             </div>
//         </main>
//         <aside className="w-fit h-auto flex items-center gap-3">

//             <Button className='border-2 border-[#BCCBB9] text-[#161D16] text-sm font-medium '>
//                 Edit Profile
//             </Button>
//             <Button className='text-[#004B1E] bg-[#22C55E] text-sm font-bold  '>
//                 Complete Profile
//             </Button>
//         </aside>
//     </section>
//     </>
//   )
// }

// export default ProfileBanner



"use client";

import Button from "@/components/Button/Button";
import { geist, hanken, inter } from "@/lib/fonts";
import {
    GraduationCap,
    MapPin,
    Verified,
    ShieldCheck,
    Award,
} from "lucide-react";
import Image from "next/image";

export default function ProfileBanner() {
    return (
        <section className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-sm">

            {/* Top */}
            <div className="relative sm:flex items-center justify-between">
                <div className="flex gap-3">
                {/* Image */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                        src="/Topbar/ProfileImage.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Details */}
                <div className="flex-1">

                    {/* Badges */}
                    <div className="mb-1 flex flex-wrap gap-2">

                            <span className={`${geist.className} flex items-center gap-1 rounded-full bg-[#006E2F1A] px-2 py-1 text-xs font-semibold text-[#006E2F]`}>
                            <Award size={12} />
                            Top Rated Creator
                        </span>

                            <span className={`${geist.className}  flex items-center gap-1 rounded-full bg-[#DAE2FD] px-2 py-1 text-[10px] font-semibold text-[#5C647A]`}>
                            <Verified size={12} />
                            Verified
                        </span>

                    </div>

                    {/* Name */}
                        <h2 className={`${hanken.className} text-xl font-bold text-[#151C27]`}>
                        Alex Rivera
                    </h2>

                    {/* Details */}
                        <div className={`${inter.className} mt-2 space-y-1 text-sm text-[#3D4A3D]`}>

                        <div className="flex items-center gap-2">
                            <GraduationCap size={15} />
                            IIT Bombay
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={15} />
                            Chennai, India
                        </div>

                        <div className="flex items-center gap-2">
                            <GraduationCap size={15} />
                            Civil Engineering, IoT, AI/ML
                        </div>

                    </div>

                </div>
</div>
                <div className="relative z-10 mt-5 grid grid-cols-2 gap-3 place-items-center">

                    <Button
                        className="w-full h-fit border border-[#BCCBB9] bg-white text-sm sm:text-base text-[#161D16]"
                    >
                        Edit Profile
                    </Button>

                    <Button
                        className="w-full h-fit bg-[#22C55E] font-semibold text-sm sm:text-base  text-[#004B1E]"
                    >
                        Complete Profile
                    </Button>

                </div>

                {/* Watermark */}
                <ShieldCheck
                    className="absolute z-0 right-0 top-8 sm:right-10 sm:top-1 sm:rotate-[-25deg] text-[#E6EFE8]"
                    size={72}
                    strokeWidth={1.5}
                />

            </div>

            {/* Buttons */}

        </section>
    );
}