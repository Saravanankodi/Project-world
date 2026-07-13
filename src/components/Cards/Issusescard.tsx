
import { IssusesCardProps } from '@/types/types'

const Issusescard = ({icon,value,tittle}:IssusesCardProps) => {
  return (
    <>
    <section className="w-full max-w-65 flex items-center justify-center gap-3 bg-white rounded-lg border border-[#BCCBB94D] shadow-lg px-6 py-8">
        <aside className=" ">
            {icon}
        </aside>
        <aside className="flex-1">
            <h2 className="text-xs text-[#3D4A3D] font-semibold">
                {tittle}
            </h2>
            <p className="text-2xl font-bold text-[#161D16] ">
                {value}
            </p>
        </aside>
    </section>
    </>
  )
}

export default Issusescard