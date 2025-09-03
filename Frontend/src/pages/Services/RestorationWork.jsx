import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Work1 from "../../assets/collage1.jpg";
import Work2 from "../../assets/collage2.jpg";
import Work3 from "../../assets/collage3.jpg";
import Work4 from "../../assets/collage4.jpg";
import Work5 from "../../assets/collage5.jpg";

const projects = [
  { img: Work1, title: "Limberlost Place - George Brown College" },
  { img: Work2, title: "BMO Centre Expansion" },
  { img: Work3, title: "Limberlost Place - George Brown College" },
  { img: Work4, title: "BMO Centre Expansion" },
  { img: Work5, title: "Limberlost Place - George Brown College" },
];

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeIn" }
  })
};

const swipeConfidenceThreshold = 100; // px threshold for swipe
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const RestorationWork = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold uppercase tracking-widest"
          >
            Our Work
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-[3px] bg-yellow-500 mx-auto mt-3 origin-left"
          ></motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-lg group cursor-pointer rounded-lg"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              onClick={() => {
                setDirection(0);
                setCurrentIndex(index);
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="p-4 text-center font-semibold text-gray-800 bg-white transition duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                {project.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence initial={false} custom={direction}>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative mx-4 flex items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close */}
              <motion.button
                whileHover={{ rotate: 90, backgroundColor: "#eab308", color: "#fff" }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrentIndex(null)}
                className="absolute top-0 right-0 bg-white p-2 shadow-lg  z-50"
              >
                <AiOutlineClose className="h-4 w-4 text-gray-800" />
              </motion.button>

              {/* Prev */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={prevImage}
                className="absolute left-[-60px] bg-white p-2 rounded-full shadow hover:bg-yellow-500 transition z-50"
              >
                <AiOutlineLeft className="h-5 w-5 text-gray-800" />
              </motion.button>

              {/* Image with swipe */}
              <motion.img
                key={currentIndex}
                src={projects[currentIndex].img}
                alt={projects[currentIndex].title}
                className="shadow-lg max-w-[600px] max-h-[70vh] object-contain rounded-lg"
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextImage();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevImage();
                  }
                }}
              />

              {/* Next */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={nextImage}
                className="absolute right-[-60px] bg-white p-2 rounded-full shadow hover:bg-yellow-500 transition z-50"
              >
                <AiOutlineRight className="h-5 w-5 text-gray-800" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RestorationWork;
