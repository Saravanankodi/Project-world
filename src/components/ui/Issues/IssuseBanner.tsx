import Button from '@/components/Button/Button'
import React from 'react'

const IssuseBanner = () => {
  return (
    <>
    <section className="w-full h-auto flex items-center justify-center gap-5 p-4 border border-[#BCCBB933] bg-white rounded-xl shadow-lg">
        <aside className="w-fit h-auto p-2">
                  <p className="text-[10px] text-[#3D4A3D] font-medium  sm:hidden">
                      Issue ID
                  </p>
            <p className="text-xs text-[#006E2F] font-semibold  ">
                #PV-8842
            </p>
                  <h2 className="text-sm text-[#161D16] font-bold hidden sm:block">
                AI Resume Builder
            </h2>
        </aside>
        <aside className="w-fit h-auto p-2 flex-1">
                  <p className="text-[10px] text-[#3D4A3D] font-medium  sm:hidden">
                      Catogory
                  </p>
            <p className="text-xs text-[#3D4A3D] font-semibold  ">
                Source Code Not Working
            </p>
                  <h2 className="text-sm text-[#161D16] hidden sm:block">
                Dependencies missing in local
            </h2>
        </aside>
        <aside className="w-fit h-auto p-2 hidden sm:block">
            <p className="text-xs text-[#3D4A3D] font-semibold  ">
                Date
            </p>
            <h2 className="text-sm text-[#161D16]">
                Oct 24, 2024
            </h2>
        </aside>
              <aside className="w-fit h-auto p-2 hidden sm:block">
            <p className="text-xs text-[#3D4A3D] font-semibold  ">
                Status
            </p>
            <aside className="w-fit px-2 py-1 bg-[#FEE2E2] flex items-center justify-center gap-1 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#DC2626] "/>
                <span className='text-[10px] text-[#B91C1C] '>new</span>
            </aside>
        </aside>
              <Button className='bg-black text-white hidden sm:block'>
            View Details
        </Button>
    </section>
    </>
  )
}

export default IssuseBanner