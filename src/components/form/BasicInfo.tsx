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
        value:"female"
    },
]

const BasicInfo = () => {
    const [userType,setUserType] = useState('');
    const [gender,setGender] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState(18);
    const [location,setLocation] = useState('');

  return (
    <>
          <section className="w-full h-auto bg-white  shadow-lg shadow-[#00000034] rounded-2xl p-6 space-y-6">
        <h2 className="text-base text-[#161D16] font-bold ">
            Basic Information
        </h2>
        <form action="" className="w-full grid grid-cols-2 gap-5">
            <AuthInput 
                label='FULL NAME' 
                type='text' 
                placeholder='Alex Rivera'
                value={name}
                onChange={(e)=>(setName(e.target.value))} />

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
            <AuthInput 
                label='AGE' 
                type='number' 
                placeholder='Years'
                value={age}
                onChange={(e)=>(setAge(Number(e.target.value)))} />
            <div className="col-span-2">
                <AuthInput 
                    label='LOCATION' 
                    type='text' 
                    placeholder='City, Country'
                    value={location}
                    onChange={(e)=>(setLocation(e.target.value))} />
            </div>
        </form>
    </section>
    </>
  )
}

export default BasicInfo