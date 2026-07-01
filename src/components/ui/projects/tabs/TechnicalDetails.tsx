import React from 'react'
import { Progress } from '../../base/ProgressBar'
import { TechnicalDetailsProps } from '@/types/types'
import SvgCircleDone from '@/components/icons/main/CircleDone'

const TechnicalDetails = ({techStacklist,requirements,architecture}:TechnicalDetailsProps) => {
  return (
    <>
    <section className="w-full h-auto text-black">
        <main className="w-full flex justify-between mb-4">
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
            <div className="w-fit ">
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
        <aside className="w-full">
            <p className="text-sm font-bold mb-2">
                System Architecture
            </p>
            {
                architecture.map((item,index)=>(
                    <p className="text-sm" key={index}>
                        ~ {item}
                    </p>
                ))
            }
        </aside>
    </section>
    </>
  )
}

export default TechnicalDetails