import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="bg-[#0B0F19] text-[#F5F5F5]">
        <h1 className="text-[#00FFE4]">Ajay Gour</h1>
        <p className="text-[#A259FF]">Full Stack MERN Developer</p>
        <button className="bg-gradient-to-r from-[#00FFE4] to-[#A259FF] text-black px-6 py-2 rounded-lg">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default navbar;
