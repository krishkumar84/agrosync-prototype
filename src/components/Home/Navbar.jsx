import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { IoSearchOutline } from "react-icons/io5";
import AgroLogo from "../assets/AgroSync.png";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";


function Navbar() {
  const [searchData, setSearchData] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [Open, setOpen] = useState(false);
  const [bgColorScrolling, setBgColorScrolling] = useState(false);
  const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
  const currentuser = JSON.parse(localStorage.getItem("currentUser"));


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

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
    <animated.nav className="w-full fixed  px-0 sm:pr-4 flex justify-between items-center py-2 z-20" style={bgColorSpring}>
      <div className="mr-2 ml-32 sm:ml-12  mt-2  w-[150px] sm:w-[500px]  ">
        <Link to="/">
        <img src={AgroLogo} alt="AgroSync Logo" />
        </Link>
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
      <ul className="sm:ml-16 ml-2 w-full xl:ml-20 2xl:ml-72 gap-2 sm:gap-10 hidden sm:flex items-center">
        {!currentuser?.isSeller && <li className="cursor-pointer text-gray-600 hover:text-[#1DBF73] font-medium">
          Become a Seller
        </li>}
        {!currentuser?.isSeller && <Link to='/login'> <li className="cursor-pointer  text-gray-600 hover:text-[#1DBF73] font-medium">Sign in </li></Link>}
        {!currentuser?.isSeller && <Link to='/register'> <li className="cursor-pointer font-medium" onClick={() => {}}>
          <button className="border hover:border-green-700 rounded-md hover:bg-green-600 px-5 py-1.5 text-green-500 hover:text-white">Join</button>
        </li></Link>}
        {currentuser?.isSeller && <Link to='/orders'> <li className="cursor-pointer text-gray-600 hover:text-[#1DBF73] font-medium">Orders </li> </Link>}
        {currentuser?.isSeller && <li className="cursor-pointer text-gray-600 hover:text-[#1DBF73] font-medium">
          switch to selling
        </li>}
        <div className="flex center gap-3 ">
        {currentuser?.isSeller && <li
          className="cursor-pointer "
          title="Profile"
        >
          <img
            onClick={() => setOpen(!Open)}
            src={currentuser.img || commonImageUrl}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full "
          />
          <span>{currentuser?.username}</span>
          {Open && <div className="absolute top-12 w-32 bg-white mt-3 flex flex-col p-4 gap-1.5 text-gray-700  cursor-pointe font-medium rounded-md">
            {currentuser?.isSeller && (
              <>
             <Link onClick={() => setOpen(!Open)} to="/myposts"> <span>Post</span></Link>
             <Link onClick={() => setOpen(!Open)} to="/addpost"> <span>Add New</span></Link>
              </>
              )}
              <Link onClick={() => setOpen(!Open)} to="/orders"> <span>Orders</span> </Link>
              <Link  onClick={handleLogout}> <span>logout</span> </Link>
          </div>}
          </li>}
          </div>
      </ul>
    </animated.nav>

    
  );
}

export default Navbar;
