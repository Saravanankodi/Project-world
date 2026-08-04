
import { Link, Share2, UserCircle } from 'lucide-react'
import React from 'react'
import NavLink from './NavLink'
import { Portfolio } from '@/types/types';

type LinkProps = {
    href: Portfolio | undefined;
}
const SocialLinks = ({href}:LinkProps) => {
  return (
    <>
    <section className="w-full h-auto bg-white  shadow-lg shadow-[#00000034] border-2 border-[#22C55E] rounded-2xl p-4  space-y-5">
        <h2 className="text-base text-black font-bold">
            PORTFOLIO LINKS
        </h2>
        <main className="w-fill space-y-5">
            <NavLink
              id='hl'
              href={href?.behance || ""}
              leftIcon={
                <Link className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
            <NavLink
              id='hl'
              href={href?.linkedin || ""}
              leftIcon={
                <UserCircle className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
            <NavLink
              id='hl'
              href={href?.github || ""}
              leftIcon={
                <Share2 className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
            <NavLink
              id='hl'
              href={href?.website || ""}
              leftIcon={
                <Link className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
        </main>

    </section>
    </>
  )
}

export default SocialLinks