import React from "react";
import trust1 from '../assets/trusted1.png';
import trust2 from '../assets/trusted2.png';
import trust3 from '../assets/trusted3.png';
import trust4 from '../assets/trusted4.png';
import trust5 from '../assets/trusted5.png';

function Companies() {
  const trustImages = [trust1, trust2, trust3, trust4, trust5];

  return (
    <div className="flex items-center  justify-center text-gray-400 text-2xl font-bold ">
     <div className=" -mt-3">Trusted by: &nbsp; </div> 
      <ul className="flex justify-between gap-10 mt-4 ml-10">
        {trustImages.map((image, index) => (
          <li key={index} className="relative h-[4.5rem] w-[4.5rem]">
            <img src={image} alt="trusted brands" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
