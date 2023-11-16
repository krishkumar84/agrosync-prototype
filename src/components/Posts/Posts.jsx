import React from 'react'
import arrow from '../assets/down-arrow.png'

function Posts() {
  return (
    <div className='flex pt-24 justify-center'>
        <div className="w-full py-6 px-12 flex flex-col gap-4">
            <span className="">Crops</span>
            <h1>Seasonal Crops</h1>
            <p className='text-gray-500 font-medium '>expore many crops</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 ">
                    <span>Budget</span>
                    <input className='p-1.5 border outline-none' type="text" placeholder='min' />
                    <input className='p-1.5 border outline-none' type="text" placeholder='max' />
                    <button className='rounded-md cursor-pointer border px-3 py-1 hover:text-white bg-[#1DBF73]'>Apply</button>

                </div>
                <div className="flex items-center gap-3 ">
                    <span className="text-greay-600 font-normal">Sort by</span>
                    <span className="font-medium "></span>
                    <img className="w-[15px] p-0" src={arrow} alt="" />
                    <div className="rightmenu">
                        <span>Newest</span>
                        <span>Best Selling</span>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Posts
