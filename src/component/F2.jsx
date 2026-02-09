import React from "react";
import image from "../public/i4.jpg";

const F2 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#7A9E9F] text-[#EAE7E1]">
      
      {/* Text */}
      <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
        
        <div className="text-2xl sm:text-3xl lg:text-4xl">
          You Don’t Have To Keep Holding It Together
        </div>

        <br />

        <div className="text-sm sm:text-base lg:text-lg">
          Many people I work with are successful in their careers and deeply
          self-aware. Yet internally, they’re battling constant worry, racing
          thoughts, tension in their body, or the sense that they’re always
          bracing for something to go wrong. You may look functional to others
          while privately feeling stretched beyond your limits. Therapy can be
          the place where you finally exhale.
        </div>

        <br />

        <button className="mt-4 p-3 sm:p-4 bg-[#EAE7E1] text-[#7A9E9F] rounded transition hover:bg-[#D6D1CE] w-fit">
          Learn About My Approach
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 p-6 flex items-center">
        <img
          src={image}
          alt=""
          className="w-full h-[40vh] lg:h-[70vh] object-cover rounded"
        />
      </div>

    </div>
  );
};

export default F2;
