'use client';
import Button from '@/components/Button/Button';
import Dropdown from '@/components/ui/base/Dropdown'
import IssueDetails from '@/components/ui/Issues/IssueDetails'
import IssuseBanner from '@/components/ui/Issues/IssuseBanner'
import UserInfo from '@/components/ui/Issues/UserInfo'
import ViewImg from '@/components/ui/Issues/ViewImg'
import { geist } from '@/lib/fonts';
import { Option } from '@/types/types'
import { ChevronRight, Download, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
const OPTION:Option[] = [
    {
       label:'New',
       value:"new" 
    }
]
const IssuesInfoPage = () => {
    const [option,setOption] = useState('');

  return (
    <>
    <section className="w-full h-auto p-6 space-y-4">
        <header className="w-full h-auto flex flex-col sm:flex-row sm:items-center justify-between p-3">
            <aside className="w-fit">
                <h2 className="text-[32px] text-[#006E2F] font-semibold ">
                    Issue Details
                </h2>
                <p className="text-base text-[#3D4A3D] ">
                    Review and manage user support requests.
                </p>
            </aside>
            <Link href={'/'} className='flex text-base text-[#006E2F] gap-2 '>
            <MoveLeft />
                Back to Dashboard
            </Link>
        </header>
        <aside className="w-full ">
            <IssuseBanner/>
        </aside>
        <main className="w-full h-full flex sm:flex-row flex-col gap-4">
            <aside className="flex-1 h-full flex flex-col gap-4">
                <UserInfo/>
                <IssueDetails
                    projectName="AI Resume Builder"
                    paymentAmount={999}
                    technicalSummary="Code execution error"
                    description={`User reports that the main Python script fails to initialize after downloading from the marketplace. The error message indicates a missing dependency 'projectverse-core-v2' which is not listed in the requirements.txt file. This prevents the user from deploying the AI Resume Builder locally.`}
                />
                      <div className='w-full hidden sm:block'>
                          <Button
                              rightIcon={<Download size={16} />}
                              className={`${geist.className} w-full inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] text-black px-4 py-2 text-sm font-semibold bg-[#565E7480] transition hover:bg-[#F3F4F6]
                          `}
                          >
                              DOWNLOAD CHATS

                          </Button>
                      </div>
            </aside>
            <aside className="w-full sm:w-5/12 flex flex-col gap-3">
                <ViewImg/>
                <ViewImg/>
                <div className="w-full bg-white rounded-xl border border-[#BCCBB94D] shadow-lg p-6 ">
                    <div className="">
                        <h2 className="text-2xl text-[#161D16] font-semibold ">
                            Management
                        </h2>
                    </div>
                    <Dropdown 
                        name='Status'
                        option={OPTION}
                        value={option}
                        onChange={setOption}
                    />
                    <aside className="flex items-center justify-center gap-3 mt-2">
                        <Button className='text-xs py-2 sm:text-sm bg-[#565E74] w-full text-white '>
                            SAVE STATUS
                        </Button>
                        <Button className='text-xs py-2 sm:text-sm bg-[#006E2F] w-full text-white '>
                            MESSAGE USER
                        </Button>
                    </aside>
                </div>
            </aside>
            
        </main>
              <div className='w-full sm:hidden '>
                  <Button
                      rightIcon={<Download size={16} />}
                      className={`${geist.className} w-full inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] text-black px-4 py-2 text-sm font-semibold bg-[#565E7480] transition hover:bg-[#F3F4F6]
                          `}
                  >
                      DOWNLOAD CHATS

                  </Button>
              </div>
    </section>
    </>
  )
}

export default IssuesInfoPage