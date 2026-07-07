import { Edit2 } from 'lucide-react'
import React from 'react'

const ProfileInfo = () => {
  return (
    <>
    <section className="w-full rounded-2xl bg-white">
        <header className="flex items-center justify-between p-2">
            <h2 className="text-2xl text-[#161D16] font-semibold">
                Personal Information
            </h2>
            <Edit2 className='w-5 h-5 text-[#006E2F]'/>
        </header>
        <main className="w-full grid grid-cols-2 gap-2 items-center p-2 ">
            <div className="w-full h-auto space-y-1">
                <h2 className="text-sm text-[#3D4A3D] font-semibold">
                    FULL NAME
                </h2>
                <p className="text-base text-[#161D16] ">
                    Alex Rivera
                </p>
            </div>
            <div className="w-full h-auto space-y-1">
                <h2 className="text-sm text-[#3D4A3D] font-semibold">
                    AGE
                </h2>
                <p className="text-base text-[#161D16] ">
                    22
                </p>
            </div>
            <div className="w-full h-auto space-y-1">
                <h2 className="text-sm text-[#3D4A3D] font-semibold">
                    EMAIL ADDRESS
                </h2>
                <p className="text-base text-[#161D16] ">
                    alex.rivera@iitb.ac.in
                </p>
            </div>
            <div className="w-full h-auto space-y-1">
                <h2 className="text-sm text-[#3D4A3D] font-semibold">
                    PHONE NUMBER
                </h2>
                <p className="text-base text-[#161D16] ">
                    +91 98765 43210
                </p>
            </div>
            <div className="w-full h-auto space-y-1">
                <h2 className="text-sm text-[#3D4A3D] font-semibold">
                    USER TYPE
                </h2>
                <p className="text-base text-[#161D16] ">
                    Student
                </p>
            </div>
        </main>
    </section>
    </>
  )
}

export default ProfileInfo