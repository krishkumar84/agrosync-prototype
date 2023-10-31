import React from "react";



function PopularServices() {
  const popularServicesData = [
    { name: "Ai Artists", label: "Add talent to AI", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png' },
    { name: "Logo Design", label: "Build your brand", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png' },
    { name: "Wordpress", label: "Customize your site", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png' },
    { name: "Voice Over", label: "Share your message", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png' },
    { name: "Social Media", label: "Reach more customers", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png' },
    { name: "SEO", label: "Unlock growth online", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png' },
    { name: "Illustration", label: "Color your dreams", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161236/illustration-2x.png' },
    { name: "Translation", label: "Go global", image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161248/data-entry-2x.png' },
  ];

  return (
    <div className=" ml-16 sm:ml-20 my-16">
      <h2 className="text-4xl mb-5 text-gray-400 font-bold">
        Popular Services
      </h2>
      <ul className="flex flex-wrap gap-5">
        {popularServicesData.map(({ name, label, image }) => (
          <li key={name} className="relative  cursor-pointer">
            <div className="absolute z-10 text-white left-5 top-4">
              <span>{label}</span>
              <h6 className="font-extrabold text-2xl">{name}</h6>
            </div>
            <div className="h-80  sm:mb-8 mb-32 w-80 sm:w-64">
              <img src={image} alt="service" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularServices;
