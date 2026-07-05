import React from 'react'
import Projectcard from '@/components/Cards/Projectcard'
import HeroCard from '@/components/Cards/HeroCard';
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
    {
      id: 2,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Bridge Infrastructure Infrastructure",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
    {
      id: 3,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Infrastructure",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
    {
      id: 4,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Bridge Infrastructure",
      description:
        "design with integrated IoT sensors for monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
    {
      id: 5,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Bridge Infrastructure",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
    {
      id: 6,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Next-gen structural design with integrated IoT",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time Next-gen structural design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
    {
      id: 7,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Bridge Infrastructure",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
    },
    {
      id: 8,
      image: "/Auth/login.png",
      category: "Civil Engineering",
      title: "Eco-Smart Bridge Infrastructure",
      description:
        "Next-gen structural design with integrated IoT sensors for real-time monitoring.",
      rating: 4.9,
      author: "Alex Rivera",
      authorAvatar: "/Topbar/ProfileImage.jpg",
      price: 120,
      bookmarked: true,
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
        <div className="flex  w-max gap-2 md:gap-y-6 md:gap-x-3 md:grid md:w-full md:grid-cols-3 xl:grid-cols-4">
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
        </aside>
      </div>
    </div>
  )
}

export default DashboardPage