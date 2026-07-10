// import { Edit2 } from 'lucide-react'
// import React from 'react'

// const ProfileInfo = () => {
//   return (
//     <>
//     <section className="w-full rounded-2xl bg-white">
//         <header className="flex items-center justify-between p-2">
//             <h2 className="text-2xl text-[#161D16] font-semibold">
//                 Personal Information
//             </h2>
//             <Edit2 className='w-5 h-5 text-[#006E2F]'/>
//         </header>
//         <main className="w-full grid grid-cols-2 gap-2 items-center p-2 ">
//             <div className="w-full h-auto space-y-1">
//                 <h2 className="text-sm text-[#3D4A3D] font-semibold">
//                     FULL NAME
//                 </h2>
//                 <p className="text-base text-[#161D16] ">
//                     Alex Rivera
//                 </p>
//             </div>
//             <div className="w-full h-auto space-y-1">
//                 <h2 className="text-sm text-[#3D4A3D] font-semibold">
//                     AGE
//                 </h2>
//                 <p className="text-base text-[#161D16] ">
//                     22
//                 </p>
//             </div>
//             <div className="w-full h-auto space-y-1">
//                 <h2 className="text-sm text-[#3D4A3D] font-semibold">
//                     EMAIL ADDRESS
//                 </h2>
//                 <p className="text-base text-[#161D16] ">
//                     alex.rivera@iitb.ac.in
//                 </p>
//             </div>
//             <div className="w-full h-auto space-y-1">
//                 <h2 className="text-sm text-[#3D4A3D] font-semibold">
//                     PHONE NUMBER
//                 </h2>
//                 <p className="text-base text-[#161D16] ">
//                     +91 98765 43210
//                 </p>
//             </div>
//             <div className="w-full h-auto space-y-1">
//                 <h2 className="text-sm text-[#3D4A3D] font-semibold">
//                     USER TYPE
//                 </h2>
//                 <p className="text-base text-[#161D16] ">
//                     Student
//                 </p>
//             </div>
//         </main>
//     </section>
//     </>
//   )
// }

// export default ProfileInfo



"use client";

import { Edit2 } from "lucide-react";
import { geist, inter } from "@/lib/fonts";

const info = [
    {
        label: "FULL NAME",
        value: "Alex Rivera",
    },
    {
        label: "AGE",
        value: "22",
    },
    {
        label: "EMAIL ADDRESS",
        value: "alex.rivera@iitb.ac.in",
    },
    {
        label: "PHONE NUMBER",
        value: "+91 98765 43210",
    },
    {
        label: "USER TYPE",
        value: "Student",
    },
];

export default function ProfileInfo() {
    return (
        <section className="w-full rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm md:p-8">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

                <h2
                    className={`${geist.className} text-xl md:text-2xl font-semibold text-[#161D16]`}
                >
                    Personal Information
                </h2>

                <button className="rounded-lg p-2 transition hover:bg-[#F5F7F5]">
                    <Edit2
                        size={18}
                        className="text-[#006E2F]"
                    />
                </button>

            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 gap-y-7 gap-x-16 sm:grid-cols-2">

                {info.map((item) => (
                    <div
                        key={item.label}
                        className="space-y-1"
                    >
                        <p
                            className={`${geist.className} text-xs font-semibold uppercase tracking-[0.08em] text-[#3D4A3D]`}
                        >
                            {item.label}
                        </p>

                        <p
                            className={`${inter.className} text-base font-medium text-[#161D16]`}
                        >
                            {item.value}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}