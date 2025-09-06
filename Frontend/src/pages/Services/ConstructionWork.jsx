import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Work1 from "../../assets/ch1.jpg";
import Work2 from "../../assets/ch2.jpg";
import Work3 from "../../assets/gs1.jpeg";
import Work4 from "../../assets/gs2.jpeg";
import Work5 from "../../assets/ir1.jpg";
import Work6 from "../../assets/ir2.jpg";
import Work7 from "../../assets/ir3.jpeg";
import Work8 from "../../assets/ir4.jpeg";
import Work9 from "../../assets/ir5.jpeg";
import Work10 from "../../assets/ir6.jpeg";
import Work11 from "../../assets/ls1.jpg";
import Work12 from "../../assets/ls2.jpg";
import Work13 from "../../assets/ls3.jpg";
import Work14 from "../../assets/ls4.jpg";
import Work15 from "../../assets/ls5.jpg";
import Work16 from "../../assets/ls6.jpeg";
import Work17 from "../../assets/ls7.jpeg";

const projects = [
  { title: "New Built And Custom Homes", images: [Work1, Work2] },
  { title: "Fourplex And Garden Suite", images: [Work3, Work4] },
  { title: "Interior Retrofit", images: [Work5, Work6, Work7, Work8, Work9, Work10] },
  { title: "Landscaping", images: [Work11, Work12, Work13, Work14, Work15, Work16, Work17] },
];

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeIn" },
  }),
};

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const ConstructionWork = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [carouselIndexes, setCarouselIndexes] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % projects[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setDirection(1);
    setActiveImageIndex((prev) => {
      const images = projects[currentIndex].images;
      return (prev + 1) % images.length;
    });
  };

  const prevImage = () => {
    setDirection(-1);
    setActiveImageIndex((prev) => {
      const images = projects[currentIndex].images;
      return (prev - 1 + images.length) % images.length;
    });
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
          />
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
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              onClick={() => {
                setDirection(0);
                setCurrentIndex(index);
                setActiveImageIndex(0);
              }}
            >
              <img
                src={project.images[carouselIndexes[index]]}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="py-4 px-4 tracking-wider text-xl uppercase font-bold text-gray-800 bg-white transition duration-300 group-hover:bg-yellow-500 group-hover:text-white">
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
                whileHover={{
                  rotate: 90,
                  backgroundColor: "#eab308",
                  color: "#fff",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrentIndex(null)}
                className="absolute top-0 right-0 bg-white p-2 shadow-lg z-50"
              >
                <AiOutlineClose className="h-4 w-4 text-gray-800" />
              </motion.button>

              {/* Prev */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={prevImage}
                className="absolute left-[-10px] md:left-[-60px] bg-white p-2 rounded-full shadow hover:bg-yellow-500 transition z-50"
              >
                <AiOutlineLeft className="h-5 w-5 text-gray-800" />
              </motion.button>

              {/* Image */}
              <motion.img
                key={activeImageIndex}
                src={projects[currentIndex].images[activeImageIndex]}
                alt={projects[currentIndex].title}
                className="shadow-lg max-h-[70vh] object-contain"
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
                  if (swipe < -swipeConfidenceThreshold) nextImage();
                  else if (swipe > swipeConfidenceThreshold) prevImage();
                }}
              />

              {/* Next */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={nextImage}
                className="absolute right-[-10px] md:right-[-60px] bg-white p-2 rounded-full shadow hover:bg-yellow-500 transition z-50"
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

export default ConstructionWork;
