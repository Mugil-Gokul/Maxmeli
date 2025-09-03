import React from "react";
import { motion } from "framer-motion";
import ServicesVid from "../../assets/services.mp4";

const ServicesHero = () => {
  const textRise = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 3, ease: "easeOut" }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        src={ServicesVid}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-12">
        <div className="text-left max-w-2xl space-y-6 relative z-10">
          {/* Heading */}
          <div className="relative overflow-hidden">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest"
              variants={textRise}
              initial="hidden"
              animate="visible"
            >
              Building Excellence, Delivering Trust
            </motion.h1>
          </div>

          {/* Paragraph */}
          <div className="relative overflow-hidden">
            <motion.p
              className="text-md md:text-xl text-white tracking-wider font-medium"
              variants={textRise}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              From large-scale commercial projects to bespoke residential builds,
              we provide end-to-end construction, renovation, and infrastructure
              solutions. Our team blends innovation, precision, and craftsmanship
              to bring your vision to life — on time and on budget.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
