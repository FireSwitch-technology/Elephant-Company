import React from "react";
import downtown from "../assets/downtown.mp4";

const Transform = () => {
  return (
    <div className="bg-gray-100 py-12 w-full h-fit">
      <div className="relative">
        <video
          src={downtown}
          autoPlay
          loop
          muted
          className="w-full h-[600px] object-cover"
        />

        {/* downBox */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-8 w-full sm:w-2xl rounded-2xl gap-5 text-center shadow-md z-10">
          <h1 className="text-2xl sm:text-4xl font-display font-bold mb-4">
            Transform Your Property Today!
          </h1>
          <p className="text-base sm:text-xl font-display font-normal">
            Let Elephant Solutions take care of all your home and business
            improvement needs with expertise you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transform;
