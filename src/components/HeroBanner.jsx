import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import bgHero from '../assets/Component1.png';
import bgHero2 from '../assets/Component2.png';
import bgHero3 from '../assets/Component3.png';
import bgHero4 from '../assets/Component4.png';
import bgHero5 from '../assets/Component5.png';
import bgHero6 from '../assets/Component6.png';

const imageSources = [
  bgHero,
  bgHero2,
  bgHero3,
  bgHero4,
  bgHero5,
  bgHero6,
];

function HomeBanner() {
  const [imageIndex, setImageIndex] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [fadeClass, setFadeClass] = useState("image-transition");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("image-transition-fadeout");
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex >= imageSources.length - 1 ? 0 : prevIndex + 1));
        setFadeClass("image-transition-fadein");
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:h-[540px] h-[440px]  bg-green-600 sm:bg-white relative bg-cover">
      <div className="absolute hidden sm:block top-0 right-0 w-[110vw] h-full transition-opacity z-0">
        <img
          alt="hero"
          src={imageSources[imageIndex]}
          className={fadeClass}
        />
      </div>
      
      <div className="z-10 relative w-[400px] sm:w-[650px] flex justify-center flex-col h-full gap-5 pl-12 sm:ml-16">
        <h1 className="text-white sm:text-5xl text-5xl leading-snug">
          Find the perfect&nbsp;
          <i>CROP</i>
          <br />
           for your business
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
            <input
              type="text"
              className="h-14 sm:w-[450px] w-[240px] pl-10 rounded-md rounded-r-none"
              placeholder={`Try "Finding any crop"`}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <button
            className="bg-[#1DBF73] text-white  px-4 sm:px-12 text-lg font-semibold rounded-r-md"
            onClick={() => alert(`Search: ${searchData}`)} // Replace with your search functionality
          >
            Search
          </button>
        </div>
        <div className="text-white hidden sm:block flex gap-4">
          Popular:
          <ul className="flex pt-2 gap-5">
            <li className="text-sm py-1  px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              Wheat
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover.bg-white hover.text-black transition-all duration-300 cursor-pointer">
              Rice
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover.bg-white hover.text-black transition-all duration-300 cursor-pointer">
              Maize
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover.bg-white hover.text-black transition-all duration-300 cursor-pointer">
              SugarCane
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
