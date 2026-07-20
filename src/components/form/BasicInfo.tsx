'use client'

import { useState } from 'react'
import AuthInput from '../Auth/AuthInput'
import { Option, Profile } from '@/types/types'
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

const BasicInfo = ({profile,setProfile}:Profile) => {

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
                value={profile.name}
                onChange={(e)=>(setProfile(
                    (prev:any)=>({
                        ...prev,
                        name:e.target.value
                    })
                ))} />

            <Dropdown
            name="USER TYPE"
            option={USER_TYPE}
            value={profile.userType}
            onChange={(value) =>
                setProfile((prev:any) => ({
                ...prev,
                userType: value as "student" | "professional",
                }))
            }
            />

            <Dropdown
            name="GENDER"
            option={GENDER}
            value={profile.gender}
            onChange={(value) =>
                setProfile((prev:any) => ({
                ...prev,
                gender: value as "none" | "male" | "female",
                }))
            }
            />
            <AuthInput 
                label='AGE' 
                type='number' 
                placeholder='Years'
                value={profile.age}
                onChange={(e)=>(setProfile(
                    (prev:any)=>({
                        ...prev,
                        age: e.target.value
                    })
                ))} />
            <div className="col-span-2">
                <AuthInput 
                    label='LOCATION' 
                    type='text' 
                    placeholder='City, Country'
                    value={profile.location}
                    onChange={(e)=>(setProfile(
                        (prev:any)=>({
                            ...prev,
                            location: e.target.value,
                        })
                    ))} />
            </div>
        </form>
    </section>
    </>
  )
}

export default BasicInfo