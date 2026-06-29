import React from 'react'
import Projectcard from '@/components/Cards/Projectcard'
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
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
      authorAvatar: "/Topbar/ProfileImage.png",
      price: 120,
      bookmarked: true,
    },
  ];

  return (
    <div>     
      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex w-max gap-3 md:grid md:w-full xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="w-fit shrink-0 md:w-auto">
              <Projectcard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage