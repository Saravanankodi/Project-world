import ReviewCard from '@/components/Cards/ReviewCard'
import { Star } from 'lucide-react'
import React from 'react'
import RatingPercentageBar from '../../base/RatingPercentageBar';

  const ratings = [
    { star: 5, percentage: 76 },
    { star: 4, percentage: 17 },
    { star: 3, percentage: 5 },
    { star: 2, percentage: 1 },
    { star: 1, percentage: 1 },
  ];

const Review = () => {
  return (
    <>
    <section className="w-full h-auto text-black">
      <header className="w-full flex gap-4 ">
        <aside className="w-fit space-y-2 p-2">
          <p className="text-sm">
            Overall Rating
          </p>
          <span className="text-3xl font-bold flex items-center gap-3">
            4.8 <Star className='w-7 h-7 text-[#FACC15]' fill='#FACC15'/>
          </span>
          <p className="text-sm">
            out of 5
          </p>
          <div className="w-full">
            <aside className="flex gap-2">
              {[...Array(4)].map((_, index) => (
                <Star
                  key={index}
                  className='w-5 h-5 text-[#FACC15]' fill='#FACC15'
                />
              ))}
            </aside>
            <p className="text-sm">
              based on 42 review
            </p>
          </div>
        </aside>
        <div className="flex-1 p-4 space-y-4">
          {ratings.map((rating) => (
            <RatingPercentageBar
              key={rating.star}
              star={rating.star}
              percentage={rating.percentage}
            />
          ))}
        </div>
      </header>
      <main className="w-full">
        
      </main>
      
    </section>
    </>
  )
}

export default Review