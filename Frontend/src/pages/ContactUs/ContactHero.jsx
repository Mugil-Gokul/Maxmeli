import React from "react";
import workerImage from "../../assets/collage2.jpg"; 
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-end" // align items to bottom
      style={{
        backgroundImage: `url(${workerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-left px-6 md:px-12 pb-10" // left aligned + bottom padding
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold tracking-wider drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          CONTACT US
        </motion.h1>
        <motion.p
          className="mt-4 text-white text-lg md:text-4xl font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          HOW CAN WE HELP ?
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
