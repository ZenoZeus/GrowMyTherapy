import React from "react";

const F8 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#7A9E9F] text-[#EAE7E1] font-bold px-6 py-16 text-center">
      
      {/* Title */}
      <div className="text-2xl sm:text-3xl lg:text-4xl">
        Get started today.
      </div>

      {/* Description */}
      <div className="mt-4 space-y-2 text-sm sm:text-base lg:text-lg max-w-2xl">
        <p>
          Ready to take the first step towards a happier, healthier you?
        </p>
        <p>
          Contact me to book your first session. I look forward to starting this therapeutic journey with you.
        </p>
      </div>

      {/* Button */}
      <button className="mt-8 p-3 sm:p-4 bg-[#EAE7E1] text-[#7A9E9F] rounded transition hover:bg-[#D6D1CE]">
        Let's Go!
      </button>

    </div>
  );
};

export default F8;
