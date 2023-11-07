import React from "react";
import image1 from "../assets/agroimg1.jpeg"
import image2 from "../assets/agroimg2.jpeg"
import image3 from "../assets/agroimg3.jpeg"
import image4 from "../assets/agroimg4.jpeg"



function PopularServices() {
  const popularServicesData = [
    { name: "Popular Crops", label: "In-Demand Crops ", image: image1 },
    { name: "Best Sellers", label: "Top-selling crops", image: image2 },
    { name: "Seasonal Picks", label: "Feature crops that are in season", image: image3 },
    { name: "Tips and Advice", label: "Share your message", image: image4 },
   ];

  return (
    <div className=" ml-16 sm:ml-16 my-8 ">
      <h2 className="text-4xl mb-5 text-gray-800 font-bold">
        Popular Services
      </h2>
      <ul className="flex mt-12 flex-wrap gap-12">
        {popularServicesData.map(({ name, label, image }) => (
          <li key={name} className="relative  cursor-pointer">
            <div className="absolute z-10 text-gray-600 left-5 top-4">
              <span>{label}</span>
              <h6 className="font-extrabold text-2xl">{name}</h6>
            </div>
            <div className="h-80  sm:mb-8 mb-32 w-80 sm:w-64">
              <img className="pt-20" src={image} alt="service" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularServices;
