import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import HeroVid from "../../assets/hero.mp4";

const Hero = () => {
  const scrollToNextSection = () => {
    const sections = document.querySelectorAll("section");
    const heroSection = document.querySelector("#hero-section");
    const sectionsArray = Array.from(sections);
    const currentIndex = sectionsArray.indexOf(heroSection);
    const nextSection = sectionsArray[currentIndex + 1];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textRise = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)", transition: { duration: 3, ease: "easeOut" } }
  };

  return (
    <section id="hero-section" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={HeroVid}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center px-12">
        <div className="text-left max-w-2xl space-y-6">
          {/* Heading */}
          <div className="relative overflow-hidden">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest"
              variants={textRise}
              initial="hidden"
              animate="visible"
            >
              Maxmeli Construction Ltd.
            </motion.h1>
          </div>

          {/* Paragraph */}
          <div className="relative overflow-hidden">
            <motion.p
              className="text-sm md:text-xl text-white tracking-wider font-medium"
              variants={textRise}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              We offer unmatched expertise, quality craftsmanship, and innovative solutions in construction, restoration, and outdoor development.
            </motion.p>
          </div>
        </div>

        {/* Down Arrow */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={48} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
