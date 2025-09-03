import React from "react";
import { motion } from "framer-motion";
import Collage1 from "../../assets/collage1.jpg";
import Collage2 from "../../assets/collage2.jpg";
import Collage3 from "../../assets/collage3.jpg";
import Collage4 from "../../assets/collage4.jpg";
import Collage5 from "../../assets/collage5.jpg";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-20 bg-gray-50"
    >
      {/* Section Heading */}
      <motion.div
        variants={textVariant}
        custom={0}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest">
          Why Choose Us
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-6 md:px-6">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <motion.h3
            variants={textVariant}
            custom={1}
            className="text-5xl md:text-6xl font-extrabold text-black leading-tight uppercase"
          >
            Building Dreams, Creating Value
          </motion.h3>
          <motion.h5
            variants={textVariant}
            custom={2}
            className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight uppercase"
          >
            Your Trusted Partner in Construction and Restoration
          </motion.h5>
          <motion.p
            variants={textVariant}
            custom={3}
            className="text-lg md:text-lg text-gray-600"
          >
            Maxmeli Construction Ltd. We delivers expert construction,
            restoration, and outdoor development with a highly skilled team.
            They prioritize sustainable practices, industry compliance, and
            modern trends. With a focus on quality craftsmanship, they ensure
            projects are functional, durable, and aesthetically flawless.
          </motion.p>
          <motion.a
            variants={textVariant}
            custom={4}
            href="#about"
            className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition"
          >
            Learn More
          </motion.a>
        </div>

        {/* Right Side - Image Collage */}
        <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {[Collage1, Collage2, Collage3, Collage4].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Collage ${i + 1}`}
              variants={imageVariant}
              custom={i}
              className={`w-full h-44 object-cover shadow-lg ${
                i === 0 ? "rounded-tl-md" : i === 1 ? "rounded-tr-md" : ""
              }`}
            />
          ))}
          <motion.img
            src={Collage5}
            alt="Collage 5"
            variants={imageVariant}
            custom={5}
            className="w-full h-72 md:col-span-2 object-cover shadow-lg mt-4 rounded-bl-md rounded-br-md"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
