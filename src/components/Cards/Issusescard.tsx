
import { inter } from '@/lib/fonts'
import { IssusesCardProps } from '@/types/types'

const Issusescard = ({ icon, value, title, variant }:IssusesCardProps) => {
  return (
    <>
    <section className={`w-full  flex items-center justify-center gap-1 sm:gap-3  rounded-lg border border-[#BCCBB94D] shadow-lg sm:px-4 sm:py-3 p-1 py-2
        ${variant === "reverse"
        ? "bg-[#EDF6EA]"
        : "bg-white"
    }`}>
        <aside className="">
            {icon}
        </aside>
        <aside className={`flex-1 ${inter.className}`}>
            <h2 className={` text-[#3D4A3D] font-semibold line-clamp-1
                 ${
                      variant === "default"
                          ? "text-xs"
                      : "text-xs sm:text-sm text-[#161D16] "
                    }`}>
                {title}
            </h2>
            <p className={`text-2xl font-medium text-[#161D16] 
             ${
                        variant === "default"
                  ? "text-xl"
                      : "text-[9px] sm:text-[11px] text-[#3D4A3D]"
                    }`}>
                {value}
            </p>
        </aside>
    </section>
    </>
  )
}

export default Issusescard