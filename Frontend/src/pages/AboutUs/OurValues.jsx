import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const valuesData = [
  {
    title: "INTEGRITY",
    heading: "We keep it real.",
    description:
      "We are upfront, open and realistic. We are genuine about delivering what we say we will.",
  },
  {
    title: "EXCELLENCE",
    heading: "We aim for perfection.",
    description:
      "We hold ourselves to the highest standards, ensuring every detail is executed flawlessly.",
  },
  {
    title: "INNOVATION",
    heading: "We think differently.",
    description:
      "We embrace creativity and new ideas to deliver better solutions for our clients.",
  },
  {
    title: "CUSTOMER FOCUS",
    heading: "We put you first.",
    description:
      "Your needs drive our decisions, and your satisfaction is our top priority.",
  },
  {
    title: "SUSTAINABILITY",
    heading: "We build for tomorrow.",
    description:
      "We are committed to responsible practices that protect the environment for future generations.",
  },
];

const OurValues = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20 h-screen">
      {/* White line above heading */}
      <div className="w-full h-[0.25px] bg-white my-4"></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl uppercase font-semibold tracking-widest text-gray-300 mb-8 py-6">
            Our Values
          </h3>

          <ul className="space-y-5">
            {valuesData.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelected(index)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                {/* Blue dot only for selected */}
                {selected === index && (
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                )}
                {selected !== index && (
                  <span className="w-3 h-3"></span> // keeps alignment
                )}
                <span
                  className={`text-lg font-medium transition-colors duration-300 ${
                    selected === index ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Dynamic Content */}
        <div className="flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-4">
                {valuesData[selected].heading}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {valuesData[selected].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
