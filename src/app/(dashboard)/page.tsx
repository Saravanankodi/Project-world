import React from 'react'
import Projectcard from '@/components/Cards/Projectcard'
import HeroCard from '@/components/Cards/HeroCard';
import Issusescard from '@/components/Cards/Issusescard';
import { Civil, Ai, Lapmobile } from '@/components/icons/dashboard';
import {Cpu} from 'lucide-react'
import SectionHeader from '@/components/ui/base/SectionHeader';
const DashboardPage = () => {

  const cards = [
    {
      id: 1,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Bridge",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
  ];


  const categories = [
    {
      title: "Civil & Structural",
      value: "240+ Projects",
      icon: Civil  ,
      iconBg: "bg-[#EAF8EF]",
      iconColor: "text-[#027A48]",
    },
    {
      title: "AI & ML",
      value: "412+ Projects",
      icon: Ai,
      iconBg: "bg-[#F5F7FF]",
      iconColor: "text-[#667085]",
    },
    {
      title: "IoT & Hardware",
      value: "185+ Projects",
      icon: Cpu,
      iconBg: "bg-[#FFE4DD]",
      iconColor: "text-[#B42318]",
    },
    {
      title: "Full-Stack Web",
      value: "890+ Projects",
      icon: Lapmobile ,
      iconBg: "bg-[#EAF4EE]",
      iconColor: "text-[#027A48]",
    },

    {
      title: "Mechanical",
      value: "140+ Projects",
      icon: Civil  ,
      iconBg: "bg-[#B6A78B]",
      iconColor: "text-[#027A48]",
    },
    {
      title: "CSE & IT",
      value: "442+ Projects",
      icon: Lapmobile ,
      iconBg: "bg-[#F5E3F8]",
      iconColor: "text-[#027A48]",
    },
    {
      title: "Bio Medical",
      value: "130+ Projects",
      icon: Civil  ,
      iconBg: "bg-[#FFD9D2]",
      iconColor: "text-[#027A48]",
    },
    {
      title: "Cyber Security",
      value: "390+ Projects",
      icon: Ai,
      iconBg: "bg-[#F5F7FF]",
      iconColor: "text-[#667085]",
    },

    {
      title: "Ethical Hacking",
      value: "390+ Projects",
      icon: Ai,
      iconBg: "bg-[#F5F7FF]",
      iconColor: "text-[#667085]",
    },
    {
      title: "Analytics",
      value: "442+ Projects",
      icon: Lapmobile ,
      iconBg: "bg-[#F5E3F8]",
      iconColor: "text-[#027A48]",
    },
    {
      title: "Embedded System",
      value: "140+ Projects",
      icon: Civil  ,
      iconBg: "bg-[#B6A78B]",
      iconColor: "text-[#027A48]",
    },
    {
      title: "Chemical Engineering",
      value: "442+ Projects",
      icon: Lapmobile ,
      iconBg: "bg-[#F5E3F8]",
      iconColor: "text-[#027A48]",
    },
  ];
  return (
    <div className='px-4 py-5'>     
      <div>
        <HeroCard/>
      </div>
      <div>
        
      </div>
      <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
        <SectionHeader
          title="Recommended For You"
          subtitle="Based on your interest in Civil Engineering & AI"
          viewAll="View All"
          href="/Explore"
        />
        <div className="flex mt-2 w-max gap-2 md:gap-y-6 md:gap-x-3 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="w-60 md:w-auto">
              <Projectcard {...card} />
            </div>
          ))}
        </div>
        <aside className="w-full p-4 space-y-5">
          <h2 className="text-[20px] text-black font-semibold">
            Explore Categories
          </h2>
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <Issusescard
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  icon={
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
                    >
                      <Icon className={item.iconColor} size={22} />
                    </div>
                  }
                  variant="category"
                />
              );
            })}

          </section>
        </aside>
      </div>
    </div>
  )
}

export default DashboardPage