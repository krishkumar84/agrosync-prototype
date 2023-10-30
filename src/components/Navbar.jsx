import React, { useState } from "react";
import FiverrLogo from "../FiverrLogo";
import { IoSearchOutline } from "react-icons/io5";
const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';


function Navbar() {
  const [searchData, setSearchData] = useState("");
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

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

  return (
    <nav className="w-full px-12 flex justify-between items-center py-2 top-0 z-30">
      <div className="mr-2">
        <FiverrLogo fillColor="#404145" />
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="What service are you looking for today?"
          className="w-[30rem] py-2.5 px-5 border"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button
          className="bg-gray-900 py-1.5 text-white w-16 flex justify-center items-center"
          onClick={handleSearch}
        >
          <IoSearchOutline className="fill-white text-white h-6 w-6" />
        </button>
      </div>
      <ul className="flex ml-32 w-full gap-10 items-center">
        <li className="cursor-pointer  text-[#1DBF73] font-medium">
          Create Gig
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
    </nav>
  );
}

export default Navbar;
