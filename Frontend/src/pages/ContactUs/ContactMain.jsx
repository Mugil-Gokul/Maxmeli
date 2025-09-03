import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ContactMain = () => {
  return (
    <section className="py-16 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left - Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={itemVariants}
        >
          <form className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 transition"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>

        {/* Right - Contact Info */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          {/* Email Box */}
          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-400 p-[2px]"
            variants={itemVariants}
          >
            <div className="flex items-center gap-5 bg-white rounded-xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="bg-yellow-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <AiOutlineMail className="text-white text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-medium tracking-wide">
                  Email Us @
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  info@maxmeli.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone Box */}
          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-400 p-[2px]"
            variants={itemVariants}
          >
            <div className="flex items-center gap-5 bg-white rounded-xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="bg-yellow-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <AiOutlinePhone className="text-white text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-medium tracking-wide">
                  Call Us At
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  +1 (647) 308 6244
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMain;
