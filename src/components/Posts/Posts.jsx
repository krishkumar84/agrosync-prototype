import React, { useState } from 'react';
import arrow from '../assets/down-arrow.png';
import {posts} from '../../utils/categories';
import Post from './Post';

function Posts() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const resort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='flex py-24 justify-center'>
      <div className="w-full py-6 px-12 flex flex-col gap-4">
        <span className="text-gray-600  text-lg font-medium">AgroSync: Categories</span>
        <h1 className='text-4xl font-extrabold'>Seasonal Crops</h1>
        <p className='text-gray-500 font-medium '>explore many seasonal crops</p>
        <div className="flex items-center justify-between">
          <div className="flex p-[7px] flex-wrap items-center gap-3 ">
            <span className='block'>Budget</span>
            <input className='p-1.5 mr-2 border outline-none' type="text" placeholder='min' />
            <input className='p-1.5 border outline-none' type="text" placeholder='max' />
            <button className='rounded-md cursor-pointer border px-3 py-1 hover:text-white bg-[#1DBF73]'>Apply</button>
          </div>
          <div className="flex flex-wrap items-center gap-3 ">
            <span className="text-greay-600 font-normal">Sort by</span>
            <span className="font-medium "></span>
            <div className='inline-flex items-center'>
            <span className=''>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img onClick={() => setOpen(!open)} className="w-[15px] p-0" src={arrow} alt="" />
            </div>
            {open && (
              <div className="p-5 bg-white rounded-md border-gray-200 absolute mt-32 right-0 gap-5 flex flex-col">
               { sort === "sales" ? <span onClick={() => resort("createdAt")}>Newest</span>
                : <span onClick={() => resort("sales")}>Best Selling</span>
             } </div>
            )}
          </div>
        </div>
        <div className=" items-center mt-12 justify-between flex flex-wrap ">
         {posts.map(post => (
        <Post key={post.id} item={post} />
    ))}
</div>

      </div>
    </div>
  );
}

export default Posts;
