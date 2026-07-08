import Button from '@/components/Button/Button'
import { GraduationCap, UserCog, Verified } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProfileBanner = () => {
  return (
    <>
    <section className="w-full h-auto flex items-center gap-4 rounded-2xl bg-white p-6">
        <aside className=" relative w-30 h-30">
            <Image 
                src={'/Topbar/ProfileImage.jpg'}
                alt='Profile'
                fill
                className='object-cover rounded-2xl'
                />
        </aside>
        <main className="flex-1">
            <aside className="flex items-center gap-3">
                <h2 className="text-2xl  font-semibold">
                    Alex Rivera
                </h2>
                <span className="text-sm font-semibold text-[#5C647A] flex items-center gap-2 px-3 py-1 bg-[#DAE2FD] rounded-full">
                    <Verified className='w-4 h-4 '/>
                    Verified
                </span>
            </aside>
            <div className="w-auto space-y-1">
                <span className="flex items-center gap-2 text-[#3D4A3D] text-sm">
                    <GraduationCap className='w-5 h-5'/>
                    IIT Bombay
                </span>
                <span className="flex items-center gap-2 text-[#3D4A3D] text-sm">
                    <UserCog className='w-5 h-5'/>
                    Civil Engineering, IoT, AI/ML
                </span>
                <span className="flex items-center gap-2 text-[#3D4A3D] text-sm">
                    <GraduationCap className='w-5 h-5'/>
                    Chennai
                </span>
            </div>
        </main>
        <aside className="w-fit h-auto flex items-center gap-3">

            <Button className='border-2 border-[#BCCBB9] text-[#161D16] text-sm font-medium '>
                Edit Profile
            </Button>
            <Button className='text-[#004B1E] bg-[#22C55E] text-sm font-bold  '>
                Complete Profile
            </Button>
        </aside>
    </section>
    </>
  )
}

export default ProfileBanner