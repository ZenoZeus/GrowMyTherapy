import React from "react";
import heal from "../public/heal.png";

const F4 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#7A9E9F] text-[#EAE7E1] font-bold">
      
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={heal}
          alt=""
          className="w-full h-[40vh] lg:h-[120vh] object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
        
        <div className="text-2xl sm:text-3xl lg:text-4xl">
          Healing Together
        </div>

        <br />

        <div className="text-sm sm:text-base lg:text-lg">
          <ul className="space-y-4">
            <li>
              I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness
              practices, and body-oriented techniques to address both the
              emotional and physiological impact of stress and trauma.
            </li>

            <li>
              Our work will be active and engaging, while always grounded in
              safety and trust.
            </li>

            <li>
              My aim is not only symptom relief, but helping you build
              resilience and a stronger relationship with yourself over time.
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default F4;
