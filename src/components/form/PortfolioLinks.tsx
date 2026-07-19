import React from 'react'
import AuthInput from '../Auth/AuthInput'
import { Link, Share2, UserCircle } from 'lucide-react'

const PortfolioLinks = () => {
  return (
    <>
      <section className="w-full h-auto bg-white  shadow-lg shadow-[#00000034] border-2 border-[#22C55E] rounded-2xl p-4  space-y-5">
        <h2 className="text-base text-black font-bold">
            PORTFOLIO LINKS
        </h2>
        <main className="w-fill space-y-5">
            <AuthInput placeholder='GitHub Profile' leftIcon={<Link className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2'/>}/>
            <AuthInput placeholder='GitHub Profile' leftIcon={<UserCircle className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2'/>}/>
            <AuthInput placeholder='GitHub Profile' leftIcon={<Share2 className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2'/>}/>
            <AuthInput placeholder='GitHub Profile' leftIcon={<Link className='w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2'/>}/>
        </main>

    </section>
    </>
  )
}

export default PortfolioLinks