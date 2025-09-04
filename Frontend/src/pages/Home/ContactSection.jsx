import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/collage1.jpg"; // Replace with your background image path

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
  },
};

export default function ContactSection() {
  return (
    <section
      className="w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Animated Black Overlay */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={overlayVariant}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariant}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md">
            LET&apos;S BUILD TOGETHER
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariant}
          className="bg-white p-8 md:p-20 shadow-lg max-w-sm ml-auto flex flex-col items-center text-center rounded-lg"
        >
          <h3 className="text-sm font-medium text-gray-700 mb-2">LET&apos;S TALK</h3>
          <p className="font-bold mb-6">NEED TO REACH US?</p>
          <a
            href="#contact"
            className="font-sm inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 tracking-widest hover:brightness-110 hover:text-black text-white font-semibold px-4 py-2 hover:bg-yellow-500 transition-colors"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
