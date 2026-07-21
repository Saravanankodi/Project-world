import { inter } from "@/lib/fonts";
import {useRouter} from "next/navigation"

function Footer() {
    const router = useRouter();
    return (
        <div className={`${inter.className} hidden w-full  md:flex  justify-between px-8 bg-white text-[#565E74] text-xs`}>
            <div className="flex m-1">
                <ul className={`flex flex-row gap-6 font-medium ${inter.className} `}>
                    <li className="cursor-pointer" onClick={()=> {router.push("/Footer/About")}}>About</li>
                    <li className="cursor-pointer" onClick={() => { router.push("/Footer/Contact")}}>Contact</li>
                    <li className="cursor-pointer" onClick={() => { router.push("/Footer/Support")}}>Support</li>
                    <li className="cursor-pointer" onClick={() => { router.push("/Footer/Privacy")}}>Privacy</li>
                    <li className="cursor-pointer" onClick={() => { router.push("/Footer/Terms")}}>Terms</li>
                </ul>
            </div>
            <div className={` flex flex-col gap-1  items-end justify-center ${inter.className}`}>
                <span className='text-[#565E74B2] text-xs font-normal'> © 2026 ProjectVerse. Discover. Build. Share. Innovate.</span>
                <span className='text-[#006E2F99] text-xs  font-bold'>POWERED BY DESFLYER</span>
            </div>
        </div>
    )
}

export default Footer