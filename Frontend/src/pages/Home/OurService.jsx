import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Construction from "../../assets/Construction.jpg";
import Restoration from "../../assets/restoration.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const underlineVariant = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "100%",
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
  },
};

const OurService = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full relative min-h-screen">
      {/* Top Black Background */}
      <div className="bg-black text-white px-8 py-12 min-h-[75vh] flex flex-col justify-start relative">
        <div className="max-w-6xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
            className="uppercase text-sm tracking-widest font-semibold text-white"
          >
            - Our Services
          </motion.p>

          <motion.hr
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={underlineVariant}
            className="mt-3 border-white"
          />

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
            transition={{ delay: 0.6 }}
            className="text-4xl tracking-widest font-bold mt-4"
          >
            WHAT WE DO
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="absolute bottom-0 left-8 right-8 md:left-auto md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 translate-y-1/2">
          {[Construction, Restoration].map((img, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-[400px] h-[500px] overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={img}
                  alt={i === 0 ? "Construction" : "Restoration"}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                onClick={() =>
                  navigate(
                    i === 0
                      ? "/services/construction"
                      : "/services/restoration"
                  )
                }
                className="cursor-pointer bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 tracking-widest hover:brightness-110 hover:text-black text-white font-bold uppercase text-center py-3 w-full max-w-[400px] mt-4 hover:bg-yellow-600 transition-colors duration-300"
              >
                {i === 0 ? "Construction" : "Restoration"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
