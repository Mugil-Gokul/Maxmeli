import React from "react";
import { motion } from "framer-motion";
import Collage1 from "../../assets/collage11.jpg";
import Collage2 from "../../assets/collage12.jpg";
import Collage3 from "../../assets/collage13.jpg";
import Collage4 from "../../assets/collage14.jpg";
import Collage5 from "../../assets/collage15.jpg";

// Heading slides up from bottom
const headingVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Left-side content slides in from left
const leftTextVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Image variant
const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-12 sm:py-14 md:py-20 bg-gray-50"
    >
      {/* Section Heading */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-16 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-widest">
          Why Choose Us
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
          <motion.h3
            variants={leftTextVariant}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-snug uppercase"
          >
            Building Dreams, Creating Value
          </motion.h3>
          <motion.h5
            variants={leftTextVariant}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug uppercase"
          >
            Your Trusted Partner in Construction and Restoration
          </motion.h5>
          <motion.p
            variants={leftTextVariant}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-gray-600"
          >
            Maxmeli Construction Ltd. delivers expert construction, restoration,
            and outdoor development with a highly skilled team. We prioritize
            sustainable practices, industry compliance, and modern trends. With
            a focus on quality craftsmanship, we ensure projects are functional,
            durable, and aesthetically flawless.
          </motion.p>
          <motion.a
            variants={leftTextVariant}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="#about"
            className="inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-semibold tracking-widest shadow-md hover:brightness-110 hover:text-black transition"
          >
            Learn More
          </motion.a>
        </div>

        {/* Right Side - Animated Image Collage */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
          {[Collage1, Collage2, Collage3, Collage4].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Collage ${i + 1}`}
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="w-full h-28 sm:h-36 md:h-40 lg:h-48 object-cover rounded-md shadow-lg"
            />
          ))}
          <motion.img
            src={Collage5}
            alt="Collage 5"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="w-full h-40 sm:h-52 md:h-40 lg:h-40 object-cover shadow-lg rounded-md col-span-2"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
