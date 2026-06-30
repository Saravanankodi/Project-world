import Button from '@/components/Button/Button'
import { MyPurchasesIcon, SaveProjectsIcon } from '@/components/icons/Sidebar'
import { ProjectInfoProps } from '@/types/types'
import { MessageSquareMore, Star } from 'lucide-react'
import React from 'react'

const ProjectsInfo = ({tittle,categories,avgRatings,reviewCount,purchasesCount,tagList,price,discount}:ProjectInfoProps) => {
    
  return (
    <>
    <section className="w-full max-w-md h-auto border border-[#BCCBB94D] rounded-xl space-y-5 p-5">
        <header className="w-full">
            <aside className="w-full flex">
                <h2 className="text-[26px] text-black font-semibold flex-1 ">
                    {tittle}
                </h2>
                <div className="w-fit p-2">
                    <p className="text-sm text-[#006E2F]  ">
                        {discount}
                    </p>
                    <p className="text-sm text-black line-through  ">
                        {price}
                    </p>
                </div>
            </aside>
            <span className="w-fit text-[8px] text-[#006E2F] bg-[#006E2F1A] rounded-full py-1 px-2">
                {categories}
            </span>
        </header>
        <aside className="w-full flex items-center gap-5">
            <div className="w-fit flex items-center gap-2 text-black ">
                <Star className='w-4 h-4 text-[#FACC15] ' fill='#FACC15'/>
                <p className="text-sm">
                    <span className='font-bold'>
                        {avgRatings}
                    </span>
                    ({reviewCount} reviews)
                </p>
            </div>
            <div className="w-px h-3 bg-[#BCCBB9] "/>
            <div className="w-fit flex items-center gap-2 text-black ">
                <MyPurchasesIcon/>
                <p className="text-sm">
                    ({purchasesCount} purchases)
                </p>
            </div>
        </aside>
        <div className="flex items-center gap-3">
            {
                tagList.map((tag,index)=>(
                    <span key={index} className="w-fit text-[10px] font-medium text-[#3D4A3D] bg-[#EDF6EA] border border-[#BCCBB933] rounded-full py-1 px-2">
                        {tag}
                    </span>
                ))
            }
        </div>
        <main className="w-full space-y-2">
            <Button className='w-full text-sm text-white bg-[#3D4A3D] rounded-xl '>
                Buyed
            </Button>
            <aside className="w-full flex items-center gap-3">
                <Button className='w-1/2 border-2 border-[#006E2F] rounded-xl text-[#006E2F] ' leftIcon={<SaveProjectsIcon/>}>
                    Save Project
                </Button>
                <Button className='w-1/2 border-2 border-[##6D7B6C] rounded-xl text-[#3D4A3D] ' leftIcon={<MessageSquareMore/>}>
                    Chat Creator
                </Button>
            </aside>
        </main>
    </section>
    </>
  )
}

export default ProjectsInfo