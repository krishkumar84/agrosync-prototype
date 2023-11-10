import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { IoSearchOutline } from "react-icons/io5";
import AgroLogo from "../assets/AgroSync.png";


function Navbar() {
  const [searchData, setSearchData] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [bgColorScrolling, setBgColorScrolling] = useState(false);
  const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled >= 340) {
        setScrolling(true);
      } else if (scrolled >= 40) {
        setBgColorScrolling(true);
      } else {
        setScrolling(false);
        setBgColorScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = () => {
    // Handle search logic
  };
 

  const bgColorSpring = useSpring({
    backgroundColor: bgColorScrolling ? 'white' : 'transparent',
  });

  const [searchAnimation, setSearchAnimation] = useSpring(() => ({
    opacity: scrolling ? 1 : 0,
    transform: `translateY(${scrolling ? 0 : -20}px)`,
  }));

  useEffect(() => {
    setSearchAnimation({
      opacity: scrolling ? 1 : 0,
      transform: `translateY(${scrolling ? 0 : -20}px)`,
    });
  }, [scrolling]);

  return (
    <animated.nav className="w-full fixed mt-3 px-0 sm:pr-4 flex justify-between items-center py-2 z-20" style={bgColorSpring}>
      <div className="mr-2 ml-32 sm:ml-12  mt-2  w-[150px] sm:w-[500px]  ">
        <img src={AgroLogo} alt="AgroSync Logo" />
      </div>
      <div className=" hidden sm:flex">
        <animated.input
          type="text"
          placeholder="What crop are you looking for today?"
          className="sm:w-[28rem] w-[10rem] py-2.5 sm:px-5 px-5 ml-3 border"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          style={{
            ...searchAnimation,
            visibility: scrolling ? 'visible' : 'hidden',
          }}
        />
        <animated.button
          className="bg-gray-900 py-1.5 pr-2 sm:flex text-white w-16 justify-center items-center"
          onClick={handleSearch}
          style={{
            ...searchAnimation,
            visibility: scrolling ? 'visible' : 'hidden',
          }}
        >
          <IoSearchOutline className="fill-white text-white ml-4 h-6 w-6" />
        </animated.button>
      </div>
      <ul className="sm:ml-8 ml-2 w-full xl:ml-20 2xl:ml-72 gap-2 sm:gap-10 hidden sm:flex items-center">
        <li className="cursor-pointer text-[#1DBF73] font-medium">
          Create Post
        </li>
        <li className="cursor-pointer text-[#1DBF73] font-medium">Orders</li>
        <li className="cursor-pointer font-medium" onClick={() => {}}>
          Switch To Buyer
        </li>
        <li
          className="cursor-pointer "
          onClick={() => setIsContextMenuVisible(true)}
          title="Profile"
        >
          <img
            src={commonImageUrl}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full "
          />
        </li>
      </ul>
    </animated.nav>

    
  );
}

export default Navbar;
