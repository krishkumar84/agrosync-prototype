import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import bgHero from '../assets/bg-hero1.webp';
import bgHero2 from '../assets/bg-hero2.webp';
import bgHero3 from '../assets/bg-hero3.webp';
import bgHero4 from '../assets/bg-hero4.webp';
import bgHero5 from '../assets/bg-hero5.webp';
import bgHero6 from '../assets/bg-hero6.webp';

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
    <div className="h-[540px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
        <img
          alt="hero"
          src={imageSources[imageIndex]}
          className={fadeClass}
        />
      </div>
      
      <div className="z-10 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-16">
        <h1 className="text-white text-5xl leading-snug">
          Find the perfect&nbsp;
          <i>freelance</i>
          <br />
          services for your business
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
            <input
              type="text"
              className="h-14 w-[450px] pl-10 rounded-md rounded-r-none"
              placeholder={`Try "building mobile app"`}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <button
            className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md"
            onClick={() => alert(`Search: ${searchData}`)} // Replace with your search functionality
          >
            Search
          </button>
        </div>
        <div className="text-white flex gap-4">
          Popular:
          <ul className="flex gap-5">
            <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              Website Design
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover.bg-white hover.text-black transition-all duration-300 cursor-pointer">
              Wordpress
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover.bg-white hover.text-black transition-all duration-300 cursor-pointer">
              Logo Design
            </li>
            <li className="text-sm py-1 px-3 border rounded-full hover.bg-white hover.text-black transition-all duration-300 cursor-pointer">
              AI Services
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
