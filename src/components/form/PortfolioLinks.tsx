import React from 'react'
import AuthInput from '../Auth/AuthInput'
import { Link, Share2, UserCircle } from 'lucide-react'
import { Profile, UserProfile } from '@/types/types'

const PortfolioLinks = ({profile,setProfile}:Profile) => {
  const updateLink = (
    field: keyof UserProfile["portfolioLinks"],
    value: string
  ) => {
    setProfile((prev:any) => ({
      ...prev,
      portfolioLinks: {
        ...prev.portfolioLinks,
        [field]: value,
      },
    }));
  };
  return (
    <>
    <section className="w-full h-auto bg-white  shadow-lg shadow-[#00000034] border-2 border-[#22C55E] rounded-2xl p-4  space-y-5">
        <h2 className="text-base text-black font-bold">
            PORTFOLIO LINKS
        </h2>
        <main className="w-fill space-y-5">
            <AuthInput
              placeholder="GitHub Profile"
              value={profile.portfolioLinks.github}
              onChange={(e) => updateLink("github", e.target.value)}
              leftIcon={
                <Link className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
            <AuthInput
              placeholder="LinkedIn Profile"
              value={profile.portfolioLinks.linkedin}
              onChange={(e) => updateLink("linkedin", e.target.value)}
              leftIcon={
                <UserCircle className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
            <AuthInput
              placeholder="Portfolio Website"
              value={profile.portfolioLinks.website}
              onChange={(e) => updateLink("website", e.target.value)}
              leftIcon={
                <Share2 className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
            <AuthInput
              placeholder="Behance Profile"
              value={profile.portfolioLinks.behance}
              onChange={(e) => updateLink("behance", e.target.value)}
              leftIcon={
                <Link className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
              }
            />
        </main>

    </section>
    </>
  )
}

export default PortfolioLinks