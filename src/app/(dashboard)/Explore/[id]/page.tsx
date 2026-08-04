'use client';

import CreatorProfileCard from '@/components/ui/projects/preview/CreatorProfileCard'
import CreatorSupportCard from '@/components/ui/projects/preview/CreatorSupportCard'
import ImageGallery from '@/components/ui/projects/preview/ImageGallery'
import ProjectsInfo from '@/components/ui/projects/ProjectsInfo'
import ProjectsTabs from '@/components/ui/projects/ProjectsTab'
import { getProjectById, Project } from '@/services/project'
import { getUserProfile, getUsers } from '@/services/user'
import { UserProfile } from '@/types/types';
import { use, useEffect, useState } from 'react'


type Props = {
  params: Promise<{
    id: string;
  }>;
};


const ProjectOverviewPage = ({
 params,
}:Props) => {
  const [project,setProject] = useState<Project>();
  const [owner,setOwner] = useState<UserProfile | null>(null);

  const { id } = use(params)
  useEffect(()=>{

  async function load(){

  const projectData = await getProjectById(id);


  if(!projectData) return;


  setProject(projectData);



  const userData = await getUserProfile(
      projectData.ownerId
  );


  setOwner(userData);

  }


  load();


  },[id]);



  if(!project){
  return <div>Loading...</div>
  }

  console.log(project)
  console.log(owner)
  return (
    <main className='py-4 px-5'>
      <section className="w-full gap-6 flex flex-col sm:flex-row items-center justify-center">
      <div className='w-full sm:w-[50%] h-auto'>
          <ImageGallery
  images={
    Array.isArray(project.technicalDetails?.resources?.screenshots)
      ? project.technicalDetails.resources.screenshots.filter(
          (img): img is string => img !== null
        )
      : []
  }
  video={project.technicalDetails?.resources?.demoVideo ?? undefined}
/>
      </div>
        <div className='w-full sm:w-[50%] gap-4 flex flex-col items-center justify-center'>
          <ProjectsInfo
            tittle={project.projectInformation.title}
            categories={project.projectInformation.domain}
            avgRatings={4.8}
            reviewCount={42}
            purchasesCount={128}
            tagList={project.projectInformation.technology}
            price={project.priceDetails.basePrice}
            discount={249.00}
          />
          
        </div>
    </section>
      <section className="mt-5 w-full gap-6 flex flex-col sm:flex-row items-center justify-center">
        <div className='w-full sm:w-[60%]'>
          <ProjectsTabs data={project} />
        </div>
        <div className='w-full sm:w-[40%] flex flex-col gap-5'>  
            <CreatorProfileCard
              creatorName={owner?.name}
              creatorRole={owner?.userType}
              projects={42}
              rating={4.9}
              avatar="/Topbar/ProfileImage.jpg"
              profileHref="/creator/alex-rivera"
            />    
            <CreatorSupportCard
              creatorName={owner?.name}
              availability="Mon - Fri"
              chatHref="/chat/alex-rivera"
            />         
        </div>
    </section>
   
    </main>
  )
}

export default ProjectOverviewPage