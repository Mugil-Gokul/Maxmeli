import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-24">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label with hyphen */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="block w-8 h-[2px] bg-yellow-500"></span>
            <h3 className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Who We Are
            </h3>
          </motion.div>

          <div className="px-6 md:px-8 lg:px-20 py-6">
            {/* Main Heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-6 px-6 md:px-8 lg:px-20 text-3xl md:text-5xl font-bold text-gray-900 leading-snug"
            >
              Focused and <span className="text-yellow-500">Future Ready</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="mt-6 px-6 md:px-8 lg:px-20 text-gray-700 leading-relaxed text-lg"
            >
              Maxmeil Construction Ltd. is a trusted leader in the construction
              and restoration industry, serving homeowners, property managers,
              and businesses across Ontario. With years of experience and a
              passion for excellence, our dedicated team of experts specializes
              in custom home building, renovations, restoration projects, and
              outdoor transformations.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
