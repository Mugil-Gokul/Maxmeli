import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgImage from "../../assets/banner2.jpg";

export default function ServicesDescription() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.5,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 + i * 0.2 },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Scroll-triggered overlay */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={overlayVariant}
        className="absolute inset-0 bg-black"
      />

      {/* Content wrapper */}
      <div className="relative w-full min-h-screen flex items-center justify-end px-4 md:px-12 py-12 z-10">
        {/* Animated Card */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariant}
          className="bg-white/95 backdrop-blur-sm border border-gray-100 shadow-2xl max-w-xl w-full p-8 md:p-10 lg:p-12 text-left rounded-lg"
        >
          <motion.p
            custom={0}
            initial="hidden"
            animate={controls}
            variants={textVariant}
            className="text-xs font-semibold tracking-widest text-black uppercase"
          >
            Our services
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            animate={controls}
            variants={textVariant}
            className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
          >
            End‑to‑end construction, renovation, and site development
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate={controls}
            variants={textVariant}
            className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed"
          >
            We deliver full‑scope solutions across residential, commercial, and industrial projects — from new builds and structural upgrades to adaptive renovations and precision restorations — prioritizing quality, safety, and schedule certainty.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
