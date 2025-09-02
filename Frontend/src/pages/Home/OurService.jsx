import React from "react";
import Construction from "../../assets/collage1.jpg";
import Restoration from "../../assets/collage2.jpg";

const OurService = () => {
  return (
    <section className="w-full relative h-[100vh]">
      {/* Top Black Background */}
      <div className="bg-black text-white px-8 py-12 h-[75vh] flex flex-col justify-start relative">
        <div className="max-w-6xl">
          <p className="uppercase text-sm tracking-widest text-white font-semibold">
            - Our Services
          </p>
          <hr className="mt-3"/>
          <h2 className="text-4xl tracking-widest font-bold mt-2">WHAT WE DO</h2>
        </div>

        {/* Cards placed on top of black background */}
        <div className="absolute bottom-0 right-8 left-8 md:left-auto md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 translate-y-1/2 h-[100vh]">
          {/* Construction */}
          <div className="flex flex-col">
            <div className="w-[400px] h-[500px] overflow-hidden">
              <img
                src={Construction}
                alt="Construction"
                className="w-[400px] h-full object-cover"
              />
            </div>
            <div className="bg-yellow-500 text-white font-bold uppercase tracking-wider text-center py-3 w-[400px]">
              Construction
            </div>
          </div>

          {/* Restoration */}
          <div className="flex flex-col">
            <div className="w-[400px] h-[500px] overflow-hidden">
              <img
                src={Restoration}
                alt="Restoration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-yellow-500 text-white font-bold uppercase tracking-wider text-center py-3 w-[400px]">
              Restoration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
