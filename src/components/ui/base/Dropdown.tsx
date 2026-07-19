"use clint";


import { geist, inter } from '@/lib/fonts';
import { DropdownProps, Option } from '@/types/types';
import React, { useState } from 'react'


const Dropdown = ({name,option,value,onChange}:DropdownProps) => {
    const [open,setOpen] = useState(false);
    

    const handleSelect =(option:Option)=>{
        // setSelect(option)
        onChange(option.value)
        setOpen(false)
    }
    const selectedOption = option.find(o => o.value === value);
  return (
    <>
    <div className="relative w-full ">
      <p className={`${geist.className} block mb-2 text-[14px] font-medium text-[#374151]`}>
        {name}
      </p>
      <button
        type='button'
        onClick={() => setOpen(!open)}
          className={`w-full  h-11  rounded-md border border-[#D7E6D6] focus:border-[#22C55E] text-left pl-4 bg-[#F3FCEF] placeholder-[#6B7280] text-[#161D16]
                  text-sm ${inter.className} outline-none transition`}
      >
         {selectedOption ? selectedOption.label : "Select"}
      
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-xl border
                       border-[#C7C4D8] bg-white  shadow-lg">
          {option.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 text-base text-[#131B2E] hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>

    </>
  )
}

export default Dropdown