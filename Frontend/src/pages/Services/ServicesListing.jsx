import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ConstructionImg from "../../assets/banner1.jpg";
import RestorationImg from "../../assets/banner3.jpg";

const ServicesListing = () => {
  const services = [
    {
      title: "Construction Solutions",
      image: ConstructionImg,
      href: "/services/construction",
    },
    {
      title: "Restoration Services",
      image: RestorationImg,
      href: "/services/restoration",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.3,
      },
    }),
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  };

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Animated heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          {/* Animated accent line */}
          <motion.div
            variants={lineVariant}
            className="origin-left h-[0.5px] w-full bg-white mb-4"
          />

          {/* Animated heading */}
          <motion.h2
            variants={headingVariant}
            className="text-2xl md:text-3xl tracking-wider font-bold text-white uppercase"
          >
            Our Services
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariant}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden="true"
              />

              {/* Dark overlays */}
              <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end min-h-[22rem]">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-2xl md:text-2xl tracking-wider uppercase font-semibold drop-shadow-sm">
                    {s.title}
                  </h3>
                  <a
                    href={s.href}
                    className="inline-grid h-12 w-12 place-items-center rounded-full bg-white text-black transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    aria-label={`Go to ${s.title}`}
                  >
                    <FiArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                      size={22}
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;
