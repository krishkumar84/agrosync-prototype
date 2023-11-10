import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
const commonImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';

function NavMenu() {
  const [isDivVisible, setDivVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [bgColorScrolling, setBgColorScrolling] = useState(false);

  const handleButtonClick = () => {
    // Toggle the visibility of the div
    setDivVisible(!isDivVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled >= 140) {
        setScrolling(true);
      } else if (scrolled >= 42) {
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
        <li className="cursor-pointer py-5 text-3xl">Create Post</li>
        <li className="cursor-pointer py-5 text-3xl">Orders</li>
        <li className="cursor-pointer py-5 text-3xl" onClick={() => {}}>
          Switch To Buyer
        </li>
        <li
          className="cursor-pointer "
          onClick={() => setIsContextMenuVisible(true)}
          title="Profile"
        >
        </li>
      </ul>
      </div>
        </animated.div>
      </div>
    </div>
  )
}

export default NavMenu;
