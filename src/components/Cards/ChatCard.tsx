import { ChatcardProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const ChatCard = ({profile,name,message,time}:ChatcardProps) => {
  return (
    <>
    <section className="w-full h-auto flex items-center gap-3 p-4">
        <aside className="w-12 h-12 relative">
            <Image 
                src={profile || '/Topbar/ProfileImage.jpg'}
                alt='profil'
                fill
                className=' rounded-full object-cover'
                />
            <div className=" absolute right-0 bottom-0 rounded-full w-3 h-3 bg-[#22C55E] border-2 border-white"></div>
        </aside>
        <main className="flex-1">
            <aside className="flex justify-between items-center">
                <p className="text-sm text-[#161D16] font-bold">
                    {name}
                </p>
                <span className="text-sm text-[#3D4A3D] font-medium">
                    {new Date(time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </span>
            </aside>
            <span className="text-sm text-[#3D4A3D] font-medium line-clamp-1 ">
                {message}
            </span>
        </main>
    </section>
    </>
  )
}

export default ChatCard