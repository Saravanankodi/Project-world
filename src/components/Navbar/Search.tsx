import React from 'react'
import { SearchIcon } from '../icons'


interface SearchProps {
  placeholder?: string;
  className?: string;
}

export default function Search({
  placeholder = "Search...",
  className,
}: SearchProps) {
  return (
    <div>
        <div className={`w-full h-10 flex flex-row gap-4 items-center justify-center rounded-xl ${className} px-4`}>
                            <div><SearchIcon /></div>
              <input type="text" placeholder={placeholder} className='w-full outline-none text-sm text-[#6B7280] font-normal ' />
                        </div>
    </div>
  )
}



