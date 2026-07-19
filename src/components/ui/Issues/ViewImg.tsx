import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ViewImg = () => {
  return (
    <>
    <section className="w-full  bg-white border border-[#BCCBB94D] rounded-xl shadow-lg p-4">
        <header className="w-full flex items-center justify-between p-2">
            <aside className="w-fit flex">
                <ImageIcon className='w-5 h-5 text-[#006E2F] '/>
                <p className="text-sm text-[#161D16] font-bold">
                    Problem Screenshot
                </p>
            </aside>
            <p className="text-[10px] text-[#006E2F] font-bold">
                VIEW FULL IMAGE
            </p>
        </header>
        <main className="w-full h-40 relative mt-3 ">
            <Image
                src="/Topbar/ProfileImage.jpg"
                alt="Profile"
                fill
                className="object-cover border border-[#BCCBB94D] rounded-lg"
            />
        </main>

    </section>
    </>
  )
}

export default ViewImg