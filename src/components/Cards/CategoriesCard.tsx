import React from 'react'
import { DashboardIcon } from '../icons'
import { CategoriesCardProps } from '@/types/types'

const CategoriesCard = ({icon,tittle,projectCount}:CategoriesCardProps) => {
  return (
    <>
    <section className="w-full max-w-65 text-black flex items-center justify-center gap-4 p-4 rounded-xl border border-[#BCCBB94D] ">
        <aside className="w-10 aspect-square bg-[#22C55E1A] rounded-lg flex items-center justify-center ">
            {icon}
        </aside>
        <main className="flex-1">
            <h2 className="text-sm font-semibold">
                {tittle}
            </h2>
            <p className="text-[11px] text-[#565E74] ">
                {projectCount}+ Projects
            </p>
        </main>
    </section>
    </>
  )
}

export default CategoriesCard