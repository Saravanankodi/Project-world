'use client'

import { useState } from 'react'
import AuthInput from '../Auth/AuthInput'
import { Option } from '@/types/types'
import Dropdown from '../ui/base/Dropdown'
import { LocationEdit } from 'lucide-react'

const USER_TYPE = [
    {
        label:"Professional",
        value:"professional"
    },
    {
        label:"Student",
        value:"student"
    },
]
const GENDER = [
    {
        label:"Prefer not to say",
        value:"preferNTS"
    },
    {
        label:"Male",
        value:"male"
    },
    {
        label:"Female",
        value:"Female"
    },
]

const BasicInfo = () => {
    const [userType,setUserType] = useState('');
    const [gender,setGender] = useState('');
  return (
    <>
    <section className="w-full h-auto bg-white rounded-xl p-6 space-y-6">
        <h2 className="text-base text-[#161D16] font-bold ">
            Basic Information
        </h2>
        <form action="" className="w-full grid grid-cols-2 gap-5">
            <AuthInput label='FULL NAME' type='text' placeholder='Alex Rivera' />
            <Dropdown 
                name='USER TYPE'
                option={USER_TYPE}
                value={userType}
                onChange={setUserType}
                />
            <Dropdown 
                name='GENDER'
                option={GENDER}
                value={gender}
                onChange={setGender}
                />
            <AuthInput label='AGE' type='number' placeholder='Years'/>
            <div className="col-span-2">
                <AuthInput label='LOCATION' type='text' placeholder='City, Country'/>
            </div>
        </form>
    </section>
    </>
  )
}

export default BasicInfo