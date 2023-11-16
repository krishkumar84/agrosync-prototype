import React from 'react'
import { Link } from 'react-router-dom'
// import posts from "../../utils/categories"

function Post(item) {
  return (
    <Link to="/post/123">
    <div className='w-4/12 h-4/12  border mb-6'>
      <img className='w-full h-1/2 bg-cover' src={item.img}alt="" />
      <div className="flex flex-col gap-4 pt-3 pb-5">
        <div className="flex items-center gap-4">
            <img className='w-6 h-6 rounded-full ' src={item.pp} alt="" />
            <span>{item.username}</span>
        </div>
        <p>{item.desc}</p>
        <div className="flex center gap-1.5">
            <img className='w-2 h-2' src="" alt="" />
            <span>{item.star}</span>
        </div>
      </div>
      <div className="pt-3 pb-4 flex items-center justify-between">
        <img className='w-3 h-3 cursor-pointer ' src="" alt="" />
        <span>Starting At</span>
        <h2>${item.price}</h2>
      </div>
    </div>
    </Link>
  )
}

export default Post
