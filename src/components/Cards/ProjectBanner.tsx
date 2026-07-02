import Button from '../Button/Button'
import { inter, geist } from "@/lib/fonts"
import { useRouter } from 'next/navigation'

function ProjectBanner() {
    const router = useRouter();
    return (
        <div className="flex bg-[#006E2F] text-white p-6 items-center justify-center rounded-xl gap-6">
            <div className="w-3/4 flex flex-col justify-center  text-white">
                <div className={` ${geist.className} text-xl md:text-2xl  font-semibold text-white`}>
                    Boost Your Project Visibility
                </div>
                <div className={` ${inter.className} mt-3 text-sm md:text-base text-white`}>
                    Featured projects get up to 4x more views and 2.5x more sales. Unlock your
                    creator potential today with our promotion tools.
                </div>
                <div className="mt-5 md:mt-8">
                    <Button
                        onClick={() => router.push("/Explore")}
                        className={`rounded-xl bg-white py-3 md:px-6 md:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-3  font-bold text-xs md:text-base lg:text-sm xl:text-base text-[#006E2F]  hover:bg-[#006E2F] hover:text-white border border-white ${geist.className}`}
                    >
                        Get Featured
                    </Button>
                </div>
            </div>
            <div className='w-1/4 flex items-center justify-center '>
                <img className='border-4 border-[#FFFFFF33] rounded-2xl' src="/img/Rocket.png" alt="rocket" />
            </div>
        </div>
    )
}

export default ProjectBanner