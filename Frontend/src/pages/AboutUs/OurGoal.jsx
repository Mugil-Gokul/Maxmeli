import React from "react";
import WorkersImg from "../../assets/collage3.jpg"; // replace with your actual image path

const OurGoal = () => {
  return (
    <section className="w-full grid md:grid-cols-2 h-screen px-5">
      {/* Left - Image */}
      <div className="flex items-center justify-center bg-white">
        <img
          src={WorkersImg}
          alt="Construction Workers"
          className="max-h-[80%] max-w-full object-contain"
        />
      </div>

      {/* Right - Text */}
      <div className="bg-white text-black flex items-center justify-center px-6 md:px-12 lg:px-16">
        <div className="max-w-lg">
          {/* White line */}
          <div className="w-12 h-[2px] bg-black mb-4"></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed text-lg">
            Our goal is to bring your vision to life with precision, efficiency,
            and superior craftsmanship. Whether you are looking to build your
            dream home, restore aging structures, or enhance your outdoor
            spaces, Maxmeli Construction Ltd. is your one-stop solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
