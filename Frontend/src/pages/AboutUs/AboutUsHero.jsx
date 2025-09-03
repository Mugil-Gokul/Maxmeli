import React from 'react';
import { motion } from 'framer-motion';
import AboutUsHeroImg from '../../assets/collage4.jpg'; // make sure this path is correct

const AboutUsHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${AboutUsHeroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-16">
        
        {/* Left rail: ABOUT US + line */}
        <div className="flex items-center mr-6 md:mr-10">
          {/* ABOUT US text animation */}
          <motion.span
            initial={{ x: -50, opacity: 0, rotate: -90 }}
            animate={{ x: 0, opacity: 1, rotate: -90 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white text-xs md:text-sm tracking-[0.3em] uppercase"
            style={{
              display: 'inline-block',
              transformOrigin: 'center', // ensures perfect pivot
            }}
          >
            ABOUT US
          </motion.span>

          {/* Vertical line animation */}
          <motion.span
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '20rem', opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
            className="ml-4 w-px bg-white/60"
            aria-hidden="true"
          />
        </div>

        {/* Main Text animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            We create structures that endure, combining sustainable design with world-class construction expertise.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHero;
