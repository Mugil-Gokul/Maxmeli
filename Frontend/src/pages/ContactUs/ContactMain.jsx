import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";
import axios from "axios";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4040/api/contact", formData);
      setMessage(res.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        description: "",
      });
    } catch (err) {
      setMessage("Something went wrong. Try again later.");
    }
  };

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
        <motion.div className="bg-white p-8 rounded-lg shadow-lg" variants={itemVariants}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500"
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-semibold tracking-widest shadow-md hover:brightness-110 hover:text-black transition"
            >
              SUBMIT
            </button>
          </form>
          {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        </motion.div>

        {/* Right - Contact Info */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          {/* Email Box */}
          <motion.div className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-400 p-[2px]" variants={itemVariants}>
            <div className="flex items-center gap-5 bg-white rounded-xl p-6 group-hover:-translate-y-1 transition">
              <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 p-4 rounded-full shadow-md group-hover:scale-110 transition hover:text-black">
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
          <motion.div className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-400 p-[2px]" variants={itemVariants}>
            <div className="flex items-center gap-5 bg-white rounded-xl p-6 group-hover:-translate-y-1 transition">
              <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 p-4 rounded-full shadow-md group-hover:scale-110 transition hover:text-black">
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
