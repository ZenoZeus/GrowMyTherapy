import React from "react";
import image from "../public/i6.png";

const F1 = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-[Nunito] bg-[#EAE7E1]">
      
      {/* Image */}
      <div className="w-full lg:w-[60vw]">
        <img
          src={image}
          alt="Image"
          className="w-full h-[50vh] lg:h-[120vh] object-cover"
        />
      </div>

      {/* Text */}
      <div className="text-[#066115] p-6 sm:p-10 flex flex-col justify-center">
        
        <div className="text-3xl sm:text-4xl lg:text-6xl">
          A Compassinate Space For Healing
        </div>

        <br />

        <div className="text-xl sm:text-2xl lg:text-4xl">
          Anxiety & Trauma Therapy in Santa Monica, California
        </div>

        <br />

        <div className="text-lg sm:text-xl lg:text-2xl">
          For thoughtful, high-achieving adults who feel overwhelmed on the inside while managing everything on the outside.
        </div>

        <div className="text-lg sm:text-xl lg:text-2xl">
          Build calm, restore balance, and feel more like yourself again.
        </div>

        <br />
        <br />

        <div className="flex">
          <button className="p-3 sm:p-4 text-lg sm:text-xl lg:text-2xl bg-[#066115] text-white rounded transition hover:bg-[#4F6F57]">
            Book a Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default F1;
