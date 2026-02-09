import React from "react";
import an from "../public/an.png";
import rel from "../public/rel.png";
import tr from "../public/tr.png";

const F3 = () => {
  return (
    <div className="flex flex-col bg-[#EAE7E1] text-[#066115] font-bold py-16">
      
      {/* Heading */}
      <div className="text-3xl sm:text-4xl lg:text-5xl mx-auto text-center">
        My Specialties
      </div>

      <div className="mt-2 text-lg sm:text-xl lg:text-2xl mx-auto text-center">
        Specialized Support for Anxiety, Trauma & Burnout
      </div>

      {/* Cards */}
      <div className="mt-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="border-2 p-6 rounded flex flex-col">
          <div className="text-xl sm:text-2xl">Anxiety & Panic</div>
          <br />
          <div className="text-sm sm:text-base">
            Learn practical ways to calm your nervous system, interrupt spirals of overthinking, and regain a sense of steadiness in everyday life.
          </div>
          <div className="mt-8">
            <img
              src={an}
              alt=""
              className="w-40 h-40 rounded-full object-cover mx-auto scale-125"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 p-6 rounded flex flex-col">
          <div className="text-xl sm:text-2xl">Trauma Recovery</div>
          <br />
          <div className="text-sm sm:text-base">
            Gently process painful or overwhelming experiences at a pace that feels safe, helping you feel more grounded and less controlled by the past.
          </div>
          <div className="mt-8">
            <img
              src={rel}
              alt=""
              className="w-40 h-40 rounded-full object-cover mx-auto scale-125"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-2 p-6 rounded flex flex-col">
          <div className="text-xl sm:text-2xl">Burnout & Perfectionism</div>
          <br />
          <div className="text-sm sm:text-base">
            Move away from constant internal pressure and reconnect with more sustainable, fulfilling ways of living and working.
          </div>
          <div className="mt-8">
            <img
              src={tr}
              alt=""
              className="w-40 h-40 rounded-full object-cover mx-auto scale-125"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default F3;
