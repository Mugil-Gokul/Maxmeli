import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/collage3.jpg"; // replace with your actual image path

const ConstructionHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Small heading with underline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <h3 className="text-sm md:text-base font-semibold tracking-widest text-white uppercase">
              Tailored Construction Solutions
            </h3>
            <div className="w-full h-[0.5px] bg-white mt-2"></div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white leading-snug"
          >
            Building the future of the construction industry, one project at a time
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ConstructionHero;
