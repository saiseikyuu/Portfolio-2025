"use client";
import React, { useEffect, useState } from "react";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Background animated circles */}

      {/* Main logo container */}
      <div
        className={`relative z-10 transform transition-all duration-1000 ${
          isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {/* RB Letters with individual animations */}
        <div className="flex items-center space-x-2">
          {/* Letter R */}
          <div className="relative group">
            <div
              className={`text-[200px] lg:text-[800px]  font-bold text-black transform transition-all duration-700 hover:scale-110 ${
                isVisible ? "translate-y-0" : "-translate-y-10"
              }`}
            >
              R
            </div>
            {/* Animated underline for R */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* Animated separator */}
          <div
            className={`w-1 h-16 bg-black transform transition-all duration-500 delay-300 ${
              isVisible ? "scale-y-100" : "scale-y-0"
            }`}
          ></div>

          {/* Letter B */}
          <div className="relative group">
            <div
              className={`text-[200px] lg:text-[800px] font-bold text-black transform transition-all duration-700 delay-200 hover:scale-110 ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              B
            </div>
            {/* Animated underline for B */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
          </div>
        </div>

        {/* Pulse effect overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-40 h-40 lg:w-[600px] lg:h-[600px]  border-2 border-black rounded-full animate-ping opacity-10"></div>
        </div>
      </div>

      {/* Interactive hover zones */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 group cursor-pointer">
          <div className="absolute top-0 left-0 w-2 h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
        </div>
        <div className="flex-1 group cursor-pointer">
          <div className="absolute top-0 right-0 w-2 h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
