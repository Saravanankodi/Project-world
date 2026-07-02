import { FeaturesProps } from '@/types/types'
import React from 'react'

const Features = ({feature,overview}:FeaturesProps) => {
  return (
    <>
    <section className="w-full h-auto">
        <aside className="w-full">
            <h2 className="text-[20px] font-semibold text-[#161D16] ">
                Features
            </h2>
            <p className="text-sm text-[#3D4A3D]">
                {feature}
            </p>
        </aside>
        <aside className="w-full">
            <h2 className="text-sm font-bold text-black ">
                Project Overview
            </h2>
            <p className="text-sm text-[#3D4A3D]">
                {overview}
            </p>
        </aside>
    </section>
    </>
  )
}

export default Features