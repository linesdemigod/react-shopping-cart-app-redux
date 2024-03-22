import React from "react";

function HeroSection() {
  const imageUrl =
    "https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="relative h-[calc(100vh-1000px)] min-h-[600px]  bg-cover bg-fixed bg-center"
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] "></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-center text-white font-bold text-2xl lg:text-6xl">
          Fresh Groceries
        </h1>
        <p className="text-center text-white font-bold text-base lg:text-base">
          We offer a huge varieties of exceptional groceries at an affordable
          price.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
