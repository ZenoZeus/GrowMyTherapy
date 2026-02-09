import React from 'react'

const PillNav = () => {
  return (
    <div className="px-4 bg-opacity-80 font-[Nunito] font-semibold bg-[#EAE7E1]">
      <div className="py-4 px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <div className="text-4xl text-[#066115]">Maya</div>
        </div>

        <div className="flex gap-x-10 text-[#066115] justify-start sm:justify-end">
          <div className="text-2xl">Blog</div>
          <div className="text-2xl">Contact</div>
        </div>

      </div>
    </div>
  )
}

export default PillNav
