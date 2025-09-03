import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
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
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-yellow-500"></span>
            <h3 className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Who We Are
            </h3>
          </div>

          <div className="px-6 md:px-8 lg:px-20 py-6">
            {/* Main Heading */}
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Focused and <span className="text-yellow-500">Future Ready</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            Maxmeil Construction Ltd. is a trusted leader in the construction
            and restoration industry, serving homeowners, property managers,
            and businesses across Ontario. With years of experience and a
            passion for excellence, our dedicated team of experts specializes
            in custom home building, renovations, restoration projects, and
            outdoor transformations.
          </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
