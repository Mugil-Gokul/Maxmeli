import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
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

const mapVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const ContactLocation = () => {
  return (
    <section className="py-16 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Address Info */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start gap-4"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 p-4 rounded-full shadow-md group-hover:scale-110 transition hover:text-black"
            variants={itemVariants}
          >
            <AiOutlineEnvironment className="text-white text-3xl" />
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-gray-800"
            variants={itemVariants}
          >
            Our Location
          </motion.h3>

          <motion.p
            className="text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Unit 15, No:44 Goodmark Place<br />
            Etobicoke, Ontario<br />
            M9W 6N8, Canada
          </motion.p>

          <motion.a
            href="https://www.google.com/maps/place/44+Goodmark+Pl,+Etobicoke,+ON+M9W+6N8,+Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 font-semibold tracking-widest shadow-md hover:brightness-110 hover:text-black transition"
            variants={itemVariants}
          >
            View on Google Maps
          </motion.a>
        </motion.div>

        {/* Map */}
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          variants={mapVariants}
        >
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.947987616321!2d-79.612!3d43.717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f4b6f0f0f0f%3A0x123456789abcdef!2s44%20Goodmark%20Pl%2C%20Etobicoke%2C%20ON%20M9W%206N8%2C%20Canada!5e0!3m2!1sen!2sca!4v0000000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactLocation;
