import React from "react";
import { motion } from "framer-motion";
import WorkersImg from "../../assets/collage3.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OurGoal = () => {
  return (
    <section className="w-full grid md:grid-cols-2 h-screen px-5 overflow-hidden">
      {/* Left - Image */}
      <motion.div
        className="flex items-center justify-center bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={WorkersImg}
          alt="Construction Workers"
          className="max-h-[80%] max-w-full object-contain"
        />
      </motion.div>

      {/* Right - Text */}
      <motion.div
        className="bg-white text-black flex items-center justify-center px-6 md:px-12 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
      >
        <div className="max-w-lg">
          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-black mb-4"
          />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Goal
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-lg"
          >
            Our goal is to bring your vision to life with precision, efficiency,
            and superior craftsmanship. Whether you are looking to build your
            dream home, restore aging structures, or enhance your outdoor
            spaces, Maxmeli Construction Ltd. is your one-stop solution.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default OurGoal;
