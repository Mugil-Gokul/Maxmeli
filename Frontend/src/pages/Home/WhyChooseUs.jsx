import React from "react";
import Collage1 from "../../assets/collage1.jpg";
import Collage2 from "../../assets/collage2.jpg";
import Collage3 from "../../assets/collage3.jpg";
import Collage4 from "../../assets/collage4.jpg";
import Collage5 from "../../assets/collage5.jpg";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest">
          Why Choose Us
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-6 md:px-6">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-5xl md:text-6xl font-extrabold text-black leading-tight uppercase">
            Building Dreams, Creating Value
          </h3>
          <h5 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight uppercase">
            Your Trusted Partner in Construction and Restoration
          </h5>
          <p className="text-lg md:text-lg text-gray-600">
            Maxmeli Construction Ltd. We delivers expert construction, restoration, and outdoor development with a highly skilled team. They prioritize sustainable practices, industry compliance, and modern trends. With a focus on quality craftsmanship, they ensure projects are functional, durable, and aesthetically flawless.
          </p>
          <a
            href="#about"
            className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>

        {/* Right Side - Image Collage */}
        <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {/* 2x2 grid images */}
          <img
            src={Collage1}
            alt="Collage 1"
            className="w-full h-44 object-cover shadow-lg rounded-tl-md"
          />
          <img
            src={Collage2}
            alt="Collage 2"
            className="w-full h-44 object-cover shadow-lg rounded-tr-md"
          />
          <img
            src={Collage3}
            alt="Collage 3"
            className="w-full h-44 object-cover shadow-lg"
          />
          <img
            src={Collage4}
            alt="Collage 4"
            className="w-full h-44 object-cover shadow-lg"
          />
          {/* Full width image */}
          <img
            src={Collage5}
            alt="Collage 5"
            className="w-full h-72 md:col-span-2 object-cover shadow-lg mt-4 rounded-bl-md rounded-br-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
