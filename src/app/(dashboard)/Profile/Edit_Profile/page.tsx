import BasicInfo from '@/components/form/BasicInfo'
import PaymentDetails from '@/components/form/PaymentDetails'
import PortfolioLinks from '@/components/form/PortfolioLinks'
import ProfilePhoto from '@/components/form/ProfilePhoto'
import ContactVerification from '@/components/ui/profile/ContactVerification'
import PortfolioSocialsCard from '@/components/ui/profile/PortfolioSocialsCard'
import ProfileInfo from '@/components/ui/profile/ProfileInfo'
import FormTextarea from '@/components/ui/Upload_Project/FormTextarea'
import { inter } from '@/lib/fonts'
import React from 'react'

function page() {
    return (
        <div className='px-5 py-4 bg-[#F3FCEF] space-y-5'>
            <div className='flex  sm:flex-row flex-col gap-6'>
                <ProfilePhoto />

                <BasicInfo />
            </div>
            <div className='w-full grid sm:grid-cols-[3fr_2fr] gap-6'>
                <PaymentDetails />
                <PortfolioLinks /></div>

            <div className='w-full sm:flex gap-6 '>
                <ContactVerification />
                <div className='w-full flex flex-col mt-3 sm:mt-0 bg-white shadow-lg shadow-[#00000034] rounded-2xl p-3 sm:p-5'>
                    <FormTextarea label='Short Introduction' placeholder='Tell the community about yourself, your goals, and what you`re looking for...' />
                    <div className='flex items-center justify-end'>
                        <p className={`${inter.className} text-[#3D4A3D] text-[11px]`}>
                            Maximum 300 characters
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default page