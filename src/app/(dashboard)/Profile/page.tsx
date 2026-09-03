'use client'

import { useEffect, useState } from 'react'
import { getUserProfile } from '@/services/user' // adjust path
import { UserProfile } from '@/types/types'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'

import StatsCard from "@/components/Cards/StatsCard"
import BasicInfo from "@/components/form/BasicInfo"
import MissingItemsCard from "@/components/ui/profile/MissingItemsCard"
import PortfolioSocialsCard from "@/components/ui/profile/PortfolioSocialsCard"
import ProfileBanner from "@/components/ui/profile/ProfileBanner"
import ProfileCompletionCard from "@/components/ui/profile/ProfileCompletionCard"
import ProfileInfo from "@/components/ui/profile/ProfileInfo"
import PaymentDetails from "@/components/ui/projects/PaymentDetails"
import PaymentDetailsform from "@/components/form/PaymentDetails"
import { geist, inter } from "@/lib/fonts"
import { Heart, ShoppingCart, Tag, Users } from "lucide-react"
import PortfolioLinks from "@/components/form/PortfolioLinks"
import ProfilePhoto from "@/components/form/ProfilePhoto"
import SocialLinks from '@/components/ui/profile/SocialLinks'

const ProfilePage = () => {

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUserProfile(user.uid)
        setUserProfile(data)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])
  console.log(userProfile)

  if (loading) return <p>Loading...</p>
    return (
        <>
            <section className="w-full h-auto  p-5">

                <div className={`${geist.className} mb-1 text-2xl lg:text-[32px] font-bold text-[#006E2F]`}>My Projects</div>

                <div className={`${inter.className} mb-2 text-sm xl:text-base font-normal text-[#3D4A3D]`}>Manage, update, and track your uploaded projects.</div>

                <ProfileBanner data={userProfile} />
                <main className="w-full mt-5 ">

                    <div className="flex flex-col sm:flex-row justify-center">
                        <div className="sm:w-1/2">
                            <div className="w-full h-full grid gap-8">
                                {/* <div className="grid gap-2 sm:gap-6 grid-cols-[2fr_1.5fr]">

                                    <ProfileCompletionCard
                                        percentage={100}
                                    />

                                    <MissingItemsCard
                                        items={[
                                            "Add portfolio link",
                                            "Verify identity",
                                        ]}
                                    />

                                </div> */}
                                <div className="w-full">
                                    <ProfileInfo info={userProfile}/>
                                </div>
                                <div className="w-full">
                                    <SocialLinks href={userProfile?.portfolioLinks}/>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 grid">
                            <div className="bg-[#FFFFFF] shadow-lg shadow-[#0F172A0D] p-4 rounded-2xl m-5">
                                <p className={`${geist.className} font-semibold text-sm text-[#3D4A3D] mb-5`}>
                                    CREATOR PERFORMANCE
                                </p>

                                <div className="grid grid-cols-2 gap-6">

                                    <StatsCard
                                        center
                                        largeValue
                                        value="12"
                                        subtitle="Projects"
                                        valueColor="text-[#006E2F]"
                                        className="bg-[#F4FAF3]"
                                    />

                                    <StatsCard
                                        center
                                        largeValue
                                        value="320"
                                        subtitle="Sales"
                                        valueColor="text-[#006E2F]"
                                        className="bg-[#F4FAF3]"
                                    />

                                    <StatsCard
                                        center
                                        largeValue
                                        value="4.9★"
                                        subtitle="Rating"
                                        valueColor="text-[#006E2F]"
                                        className="bg-[#F4FAF3]"
                                    />

                                    <StatsCard
                                        center
                                        largeValue
                                        value="1.2K"
                                        subtitle="Followers"
                                        valueColor="text-[#006E2F]"
                                        className="bg-[#F4FAF3]"
                                    />

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 p-5">

                                <StatsCard
                                    center
                                    icon={<ShoppingCart size={34} className="text-[#98C6A6] bg-white" />}
                                    iconBg="bg-transparent"
                                    value="5"
                                    subtitle="Purchased"
                                />

                                <StatsCard
                                    center
                                    icon={<Heart size={34} className="text-[#98C6A6] bg-white" />}
                                    iconBg="bg-transparent"
                                    value="24"
                                    subtitle="Saved"
                                />

                                <StatsCard
                                    center
                                    icon={<Tag size={34} className="text-[#98C6A6] bg-white" />}
                                    iconBg="bg-transparent"
                                    value="12"
                                    subtitle="Sold"
                                />

                                <StatsCard
                                    center
                                    icon={<Users size={34} className="text-[#98C6A6] bg-white" />}
                                    iconBg="bg-transparent"
                                    value="42"
                                    subtitle="Mentorship"
                                />

                            </div>
                        </div>
                    </div>
                    <PortfolioSocialsCard />

                </main>
               

            </section>
        </>
    )
}

export default ProfilePage