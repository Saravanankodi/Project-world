import React from 'react'
import { Progress } from '../../base/ProgressBar'
import { OverviewProps } from '@/types/types'
import SvgCircleDone from '@/components/icons/main/CircleDone'


const Overview = ({overview,techStacklist,requirements}:OverviewProps) => {
  return (
    <>
    <section className="w-full h-auto text-black space-y-5">
        <header className="w-full">
            <h2 className="text-[20px] text-[#161D16] font-semibold  ">
                Project Overview
            </h2>
            <p className="text-sm text-[#3D4A3D] ">
                {overview}
            </p>
        </header>
        <main className="w-full flex justify-center gap-10">
            <aside className="w-1/2 space-y-3">
                <p className="text-sm font-bold">
                    Technical Stack
                </p>
                {
                    techStacklist.map((items,index)=>(
                        <Progress 
                            type='line'
                            label={items.label}
                            value={items.value}
                            key={index}
                        />
                    ))
                }
            </aside>
            <div className="w-1/2 ">
                <p className="text-sm font-bold mb-3">
                    Requirements
                </p>
                {
                    requirements.map((item,index)=>(
                        <div className="w-fit flex items-center gap-2 mb-2" key={index}>
                            <SvgCircleDone className='w-4 h-4 text-[#006E2F] '/>
                            <span className="text-sm">
                                {item}
                            </span>
                        </div>
                    ))
                }
            </div>
        </main>
    </section>
    </>
  )
}

export default Overview