import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";
const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
import { useAuth } from '../../context/AuthContext';

function NavMenu() {
  const [isDivVisible, setDivVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [bgColorScrolling, setBgColorScrolling] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleButtonClick = () => {
    // Toggle the visibility of the div
    setDivVisible(!isDivVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled >= 140) {
        setScrolling(true);
      } else if (scrolled >= 0) {
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

  const bgColorSpring = useSpring({
    backgroundColor: bgColorScrolling ? 'white' : 'rgba(22, 163,74, 0.8)',
    backdropFilter: bgColorScrolling ? 'none' : 'blur(10px)',
  });
  
  
  

  return (
    <div>
      <div className="fixed mt-3 z-40  sm:hidden ">
        <button
          onClick={handleButtonClick}
          className="dark-icon ml-8 mr-24 "
        >
          <FontAwesomeIcon size="xl" icon={faBars} />
        </button>
        <animated.div style={bgColorSpring} className={`${isDivVisible ? "nav2" : "hidden"}`}>
            <div className="">
        <ul className="sm:ml-8 ml-2 w-full py-8 items-center">
        <Link to="/myposts">
        <li onClick={handleButtonClick} className="cursor-pointer py-5 text-3xl"> Post</li> </Link>
        <Link to="/orders">
        <li onClick={handleButtonClick} className="cursor-pointer py-5 text-3xl">Orders</li> </Link>
        <li onClick={handleButtonClick} className="cursor-pointer py-5 text-3xl" >
          Switch To Buyer
        </li>
        <li
          className="cursor-pointer "
          onClick={() => setIsContextMenuVisible(true)}
          title="Profile"
        >
        </li>
        {currentUser && <li
          className="cursor-pointer "
          title="Profile"
        >
          <img
            onClick={() => setOpen(!Open)}
            src={currentUser.img || commonImageUrl}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full "
          />
          <span>{currentUser?.username}</span>
          </li>}
      </ul>
      </div>
        </animated.div>
      </div>
    </div>
  )
}

export default NavMenu;
