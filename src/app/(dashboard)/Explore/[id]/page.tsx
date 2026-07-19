import CreatorProfileCard from '@/components/ui/projects/preview/CreatorProfileCard'
import CreatorSupportCard from '@/components/ui/projects/preview/CreatorSupportCard'
import ImageGallery from '@/components/ui/projects/preview/ImageGallery'
import ProjectsInfo from '@/components/ui/projects/ProjectsInfo'
import ProjectsTabs from '@/components/ui/projects/ProjectsTab'
import Features from '@/components/ui/projects/tabs/Features'
import Overview from '@/components/ui/projects/tabs/Overview'
import React from 'react'

const ProjectOverviewPage = () => {
  return (
    <main className='py-4 px-5'>
      <section className="w-full gap-6 flex flex-col sm:flex-row items-center justify-center">
      <div className='w-full sm:w-[50%] h-auto'>
          <ImageGallery />
      </div>
        <div className='w-full sm:w-[50%] gap-4 flex flex-col items-center justify-center'>
          <ProjectsInfo
            tittle="Eco-Smart Bridge Infrastructure"
            categories="Civil Engineering"
            avgRatings={4.8}
            reviewCount={42}
            purchasesCount={128}
            tagList={[
              "Python",
              "React",
              "IoT",
              "AutoCAD",
            ]}
            price={349.00}
            discount={249.00}
          />
          <CreatorProfileCard
            creatorName="Alex Rivera"
            creatorRole="Mechatronics Expert"
            projects={42}
            rating={4.9}
            avatar="/Topbar/ProfileImage.jpg"
            profileHref="/creator/alex-rivera"
          />
        </div>
    </section>
      <section className="mt-5 w-full gap-6 flex flex-col sm:flex-row items-center justify-center">
        <div className='w-full sm:w-[60%]'>
          <ProjectsTabs />
        </div>
        <div className='w-full sm:w-[40%]'>      
            <CreatorSupportCard
              creatorName="Alex"
              availability="Mon - Fri"
              chatHref="/chat/alex-rivera"
            />         
        </div>
    </section>
   
    </main>
  )
}

export default ProjectOverviewPage