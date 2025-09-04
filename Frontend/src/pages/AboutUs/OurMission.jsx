import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/banner4.jpg";

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export default function OurMission() {
  return (
    <section
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Animated Dark Overlay */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={overlayVariant}
        className="absolute inset-0 bg-black"
      />

      {/* Content wrapper */}
      <div className="relative w-full min-h-screen flex items-center justify-end px-4 md:px-12 py-12 z-10">
        {/* Animated Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariant}
          className="bg-white/95 backdrop-blur-sm border border-gray-100 shadow-2xl max-w-xl w-full p-8 md:p-10 lg:p-12 text-left rounded-lg"
        >
          <p className="text-xs font-semibold tracking-widest text-black uppercase">
            Our Mission
          </p>

          <h2 className="mt-2 text-lg md:text-xl lg:text-xl font-bold text-gray-900 leading-tight">
            At Maxmeli Construction Ltd., our mission is to create spaces that stand the test of time, combining quality materials, innovative designs, and expert workmanship to exceed our clients’ expectations. We are committed to:
          </h2>

          <ul className="mt-6 list-disc list-inside text-base md:text-md text-gray-700 leading-relaxed space-y-2">
            <li>
              Delivering high-quality construction and restoration services with honesty and transparency.
            </li>
            <li>
              Providing personalized solutions tailored to the unique needs of each client.
            </li>
            <li>
              Ensuring sustainability, safety, and compliance in every project.
            </li>
            <li>
              Building long-term relationships based on trust, communication, and reliability.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
