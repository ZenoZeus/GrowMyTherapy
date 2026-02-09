import React from "react";

const F9 = () => {
  return (
    <div className="border-b-2 text-[#066115] font-bold bg-white">
      
      {/* Top footer */}
      <div className="border-b-2 px-6 sm:pl-70 sm:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl lg:text-5xl">Maya</div>

          <br />

          <div className="text-base sm:text-lg max-w-xs">
            Address: 123th Street 45 W, Santa Monica, CA 90401
          </div>

          <br />

          <div className="text-base sm:text-lg underline">email</div>
          <div className="text-base sm:text-lg underline">555-555-5555</div>
        </div>

        {/* Hours */}
        <div>
          <div className="text-xl sm:text-2xl lg:text-3xl">Hours</div>
          <div className="text-base sm:text-lg">Time</div>
        </div>

        {/* Links */}
        <div>
          <div className="text-xl sm:text-2xl lg:text-3xl">Finds</div>
          <div className="text-base sm:text-lg">Home</div>
          <div className="text-base sm:text-lg">Contact</div>
          <div className="text-base sm:text-lg">Blogs</div>
        </div>

      </div>

      {/* Bottom footer */}
      <div className="px-6 sm:px-10 py-8 text-sm sm:text-base text-center">
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="underline">Privacy & Cookies Policy</div>
          <div className="underline">Good Faith Estimate</div>
          <div className="underline">Website Terms & Conditions</div>
          <div className="underline">Disclaimer</div>
        </div>

        <br />

        <div>
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </div>

      </div>
    </div>
  );
};

export default F9;
