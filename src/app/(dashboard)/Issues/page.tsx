import Button from '@/components/Button/Button'
import Issusescard from '@/components/Cards/Issusescard'
import { Done, List, New, Ongoing } from '@/components/icons/Issuse'
import IssuseBanner from '@/components/ui/Issues/IssuseBanner'
import UserInfo from '@/components/ui/Issues/UserInfo'
import ViewImg from '@/components/ui/Issues/ViewImg'
import { Plus } from 'lucide-react'
import React from 'react'

const IssuesPage = () => {
  return (
    <>
    <section className="w-full h-auto p-6">
        <header className="w-full h-auto flex flex-col sm:flex-row items-start gap-2 justify-between p-3">
            <aside className="w-fit">
                <h2 className="text-[32px] text-[#006E2F] font-semibold ">
                    My Issues
                </h2>
                <p className="text-base text-[#3D4A3D] ">
                    Track all your reported issues and their current status.
                </p>
            </aside>
            <Button className='bg-[#22C55E] flex rounded-lg text-[#004B1E] font-bold ' leftIcon = {<Plus className='w-5 h-5'/>}>
                Create new Issues
            </Button>
        </header>

        <aside className="w-full my-2 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Issusescard
                title='Total Issues'
                value='12'
                icon={<List/>}
                variant='default'/>
            <Issusescard
                title='New Issues'
                value='12'
                icon={<New/>}
                variant='default'/>
            <Issusescard
                title='Ongoing Issues'
                value='12'
                icon={<Ongoing/>}
                variant='default'/>
            <Issusescard
                title='Resolved Issues'
                value='12'
                icon={<Done/>}
                variant='default'/>
        </aside>
        <main className="w-full">
            <aside className="w-full">
                
            </aside>
            <IssuseBanner/>
        </main>
    </section>
    </>
  )
}

export default IssuesPage