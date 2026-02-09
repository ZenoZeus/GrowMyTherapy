import React from "react";
import maya from "../public/maya.png";

const F5 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-[#066115] font-bold">
      
      {/* Text */}
      <div className="w-full lg:w-[60%] p-6 sm:p-10 flex flex-col justify-center">
        
        <div className="text-3xl sm:text-4xl lg:text-6xl">
          Hi, I’m Dr. Maya Reynolds
        </div>

        <br />
        <br />

        <div className="text-base sm:text-lg lg:text-2xl">
          <p>
            I’m a licensed clinical psychologist based in Santa Monica, serving
            adults across California through in-person and virtual therapy.
          </p>

          <br />

          <p>
            My clients are often insightful, motivated people who have spent years
            pushing through stress. Beneath that strength, they may feel anxious,
            emotionally on edge, or disconnected from themselves.
          </p>

          <br />

          <p>
            I offer therapy that is warm, structured, and collaborative — a space
            where you feel supported while doing meaningful, deeper work.
          </p>
        </div>

        <br />

        <button className="mt-4 p-3 sm:p-4 text-lg sm:text-xl lg:text-2xl bg-[#066115] text-white rounded transition hover:bg-[#4F6F57] w-fit">
          Let's Chat
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-6">
        <img
          src={maya}
          alt=""
          className="w-full max-w-md h-[40vh] lg:h-[80vh] object-cover rounded"
        />
      </div>

    </div>
  );
};

export default F5;
