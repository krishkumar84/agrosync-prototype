import React from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/star.png';
import like from '../assets/heart.png'

function Post({ item }) {
  return (
    <Link to="/posts">
      <div className="sm:w-64 w-full  rounded-sm  border-2 mb-6">
        <img className="w-full h-1/2 rounded-md bg-cover" src={item.img} alt="" />
        <div className="flex flex-col gap-2 pt-2 ">
          <div className="flex items-center gap-4">
            <img className="w-6 h-6 ml-1.5  rounded-full" src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p className='text-gray-600  text-base px-2 '>{item.desc}</p>
          <div className="flex center gap-1.5">
            {/* Replace the following line with your actual star image */}
            <img className="w-[15px] h-[15px] mt-1.5 ml-3" src={star} alt="" />
            <span className='text-yellow-400  text-xl '>{item.star}</span>
          </div>
        </div>
        <div className=" pb-2 flex  items-center justify-between">
          {/* Replace the following line with your actual like image */}
          <img className="w-[25px] h-[25px] ml-3 cursor-pointer" src={like} alt="" />
          <div className="flex items-center justify-between px-3 flex-col">
          <span className='text-gray-500 font-medium '>Starting At</span>
          <h2 className='text-gray-600  text-xl '>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
