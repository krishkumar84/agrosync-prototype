import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import FiverrLogo from "../FiverrLogo";
import { IoSearchOutline } from "react-icons/io5";
const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';


function Navbar() {
  const [searchData, setSearchData] = useState("");
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
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

  const ContextMenuData = [
    {
      name: "Profile",
      callback: () => {
        // Handle profile navigation
        setIsContextMenuVisible(false);
      },
    },
    {
      name: "Logout",
      callback: () => {
        // Handle logout logic
        setIsContextMenuVisible(false);
      },
    },
  ];

  const bgColorSpring = useSpring({
    backgroundColor: scrolling ? 'white' : 'transparent',
  });

  const navbarClass = `w-full fixed mt-3 px-0 sm:px-12 flex justify-between items-center py-2 z-20`;

  return (
    <animated.nav className={navbarClass} style={bgColorSpring}>
      <div className="mr-2 ml-2">
        <FiverrLogo fillColor="#404145" />
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="What crop are you looking for today?"
          className="sm:w-[30rem] w-[10rem] hidden sm:block py-2.5 sm:px-5 px-5 border"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button
          className="bg-gray-900 py-1.5 hidden sm:block text-white w-16 flex justify-center items-center"
          onClick={handleSearch}
        >
          <IoSearchOutline className="fill-white text-white ml-4 h-6 w-6" />
        </button>
      </div>
      <ul className="flex sm:ml-28 ml-2 w-full gap-2 sm:gap-10 items-center">
        <li className="cursor-pointer  text-[#1DBF73] font-medium">
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
            className="rounded-full"
          />
        </li>
      </ul>
    </animated.nav>
  );
}

export default Navbar;
