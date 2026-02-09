import React from "react";
import { FaqWithImage } from "./FaqWithImage";
import image from "../public/image.svg";

const F6 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#7A9E9F] text-[#EAE7E1] font-bold p-6 sm:p-10">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={image}
          alt=""
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* FAQ */}
      <div className="w-full lg:w-1/2 flex items-center">
        <FaqWithImage />
      </div>

    </div>
  );
};

export default F6;
