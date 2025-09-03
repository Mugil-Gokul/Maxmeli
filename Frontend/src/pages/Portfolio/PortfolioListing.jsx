import React from 'react';
import { motion } from 'framer-motion';
import ConstructionImg1 from '../../assets/collage2.jpg';
import RestorationImg from '../../assets/collage3.jpg';
import ConstructionImg2 from '../../assets/collage4.jpg';

const portfolioData = [
  {
    title: 'CONSTRUCTION',
    subheading: 'HOME RENOVATION',
    description:
      'Updating and improving residential spaces, often including changes to design, layout, and functionality. This process is important as it enhances living comfort, personalizes the space to the homeowner’s preferences, and can increase the property’s value.',
    image: ConstructionImg1,
  },
  {
    title: 'RESTORATION',
    subheading: 'HOME RENOVATION',
    description:
      'Restoring and preserving the original charm of a property while upgrading its safety, efficiency, and comfort. Perfect for heritage homes and spaces with character.',
    image: RestorationImg,
  },
  {
    title: 'CONSTRUCTION',
    subheading: 'HOME RENOVATION',
    description:
      'From structural changes to aesthetic upgrades, we deliver spaces that inspire and function beautifully for years to come.',
    image: ConstructionImg2,
  },
];

const PortfolioListing = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {portfolioData.map((item, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              className={`relative flex flex-col ${
                isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image with angled mask */}
              <motion.div
                className="relative w-full md:w-2/3 overflow-hidden group"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className="w-full h-[400px] bg-gray-200"
                  style={{
                    clipPath: isReversed
                      ? 'polygon(0 0, 100% 0, 100% 100%, 5% 100%)'
                      : 'polygon(0 0, 100% 0, 95% 100%, 0 100%)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.subheading}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Floating text panel */}
              <motion.div
                className={`relative z-10 bg-white shadow-xl rounded-lg p-8 md:w-1/2 -mt-12 md:mt-0 ${
                  isReversed ? 'md:-mr-16' : 'md:-ml-16'
                }`}
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <h3 className="text-lg text-yellow-600 font-semibold mb-4">
                  {item.subheading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioListing;
