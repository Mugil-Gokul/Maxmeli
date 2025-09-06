import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ConstructionImg1 from "../../assets/Capture.jpg";
import ConstructionImg2 from "../../assets/Capture2.jpg";
import ConstructionImg3 from "../../assets/Capture3.jpg";
import ConstructionImg4 from "../../assets/Capture4.jpg";
import PaintingImg1 from "../../assets/pp1.jpg";
import PaintingImg2 from "../../assets/pp2.jpg";
import PaintingImg3 from "../../assets/pp3.jpg";
import PaintingImg4 from "../../assets/pp4.jpg";
import PaintingImg5 from "../../assets/pp5.jpg";
import PaintingImg6 from "../../assets/pp6.jpg";
import PaintingImg7 from "../../assets/pp7.jpg";
import MasonryImg1 from "../../assets/ss1.jpg";
import MasonryImg2 from "../../assets/ss2.jpg";
import MasonryImg3 from "../../assets/ss3.jpg";
import MasonryImg4 from "../../assets/ss4.jpg";
import MasonryImg5 from "../../assets/ss5.jpg";
import MasonryImg6 from "../../assets/ss6.jpg";
import MasonryImg7 from "../../assets/ss8.jpg";
import MasonryImg8 from "../../assets/ss9.jpg";
import MasonryImg9 from "../../assets/ss12.jpg";
import MasonryImg10 from "../../assets/ss13.jpg";
import MasonryImg11 from "../../assets/ss14.jpg";
import WaterproofingImg1 from "../../assets/ww1.jpg";
import WaterproofingImg2 from "../../assets/ww2.jpg";
import WaterproofingImg3 from "../../assets/ww3.jpg";
import WaterproofingImg4 from "../../assets/ww4.jpg";
import WaterproofingImg5 from "../../assets/ww5.jpg";
import WaterproofingImg6 from "../../assets/ww6.jpg";
import TrafficToppingWaterProofingImg1 from "../../assets/qq1.jpg";
import TrafficToppingWaterProofingImg2 from "../../assets/qq2.jpg";
import TrafficToppingWaterProofingImg3 from "../../assets/qq3.jpg";
import TrafficToppingWaterProofingImg4 from "../../assets/qq4.jpg";
import TrafficToppingWaterProofingImg5 from "../../assets/qq5.jpg";
import TrafficToppingWaterProofingImg6 from "../../assets/qq6.jpg";
import ConcreteRepairImg1 from "../../assets/tt1.jpg";
import ConcreteRepairImg2 from "../../assets/tt2.jpg";
import ConcreteRepairImg3 from "../../assets/tt3.jpg";
import ConcreteRepairImg4 from "../../assets/tt4.jpg";
import ConcreteRepairImg5 from "../../assets/tt5.jpg";
import ConcreteRepairImg6 from "../../assets/tt6.jpg";
import ConcreteRepairImg7 from "../../assets/tt7.jpg";
import ConcreteRepairImg8 from "../../assets/tt8.jpg";
import ConcreteRepairImg9 from "../../assets/tt9.jpg";
import ConcreteRepairImg10 from "../../assets/tt10.jpg";

const portfolioData = [
  {
    title: "CONSTRUCTION",
    subheading: "HOME RENOVATIONS",
    description:
      "Updating and improving residential spaces, often including changes to design, layout, and functionality. This process is important as it enhances living comfort, personalizes the space to the homeowner’s preferences, and can increase the property’s value. Renovations also ensure the home remains safe, efficient, and up-to-date.",
    images: [
      ConstructionImg1,
      ConstructionImg2,
      ConstructionImg3,
      ConstructionImg4,
    ],
  },
  {
    title: "RESTORATION",
    subheading: "PAINTING",
    description:
      "The artful process of rejuvenating the aesthetic facade of a structure. It involves meticulously selecting and applying quality paints to breathe new life into the exterior or interior surfaces, harmonizing with the building’s architectural character. This delicate task not only revitalizes the visual appeal but also provides a protective layer, safeguarding the structure against environmental elements and enhancing its enduring beauty.",
    images: [
      PaintingImg1,
      PaintingImg2,
      PaintingImg3,
      PaintingImg4,
      PaintingImg5,
      PaintingImg6,
      PaintingImg7,
    ],
  },
  {
    title: "RESTORATION",
    subheading: "MASONRY",
    description:
      "Involve fixing cracks, replacing damaged bricks or stones, and re-pointing mortar joints in structures made of brick or stone. This process restores the structural integrity and aesthetic appeal of the masonry, and is crucial for maintaining the durability and historical value of such buildings.",
    images: [
      MasonryImg1,
      MasonryImg2,
      MasonryImg3,
      MasonryImg4,
      MasonryImg5,
      MasonryImg6,
      MasonryImg7,
      MasonryImg8,
      MasonryImg9,
      MasonryImg10,
      MasonryImg11,
    ],
  },
  {
    title: "RESTORATION",
    subheading: "WATERPROOFING",
    description:
      "A technique where a thick, liquid membrane made of materials like bitumen is heated and applied to surfaces to prevent water infiltration. Once it cools, it forms a durable, seamless barrier that adapts to the shape of the surface, offering long-lasting protection against water damage. This method is especially important for protecting parts of buildings that are susceptible to moisture, like basements and roofs.",
    images: [
      WaterproofingImg1,
      WaterproofingImg2,
      WaterproofingImg3,
      WaterproofingImg4,
      WaterproofingImg5,
      WaterproofingImg6,
    ],
  },
  {
    title: "RESTORATION",
    subheading: "Traffic Topping Waterproofing",
    description:
      "Involves applying a tough, durable coating on surfaces like parking decks and bridges to protect them from water and wear caused by vehicular traffic. This coating not only waterproofs the surface but also withstands the constant stress from vehicles, helping to extend the lifespan of the structure. This method is essential for areas exposed to both water and regular vehicle use.",
    images: [
      TrafficToppingWaterProofingImg1,
      TrafficToppingWaterProofingImg2,
      TrafficToppingWaterProofingImg3,
      TrafficToppingWaterProofingImg4,
      TrafficToppingWaterProofingImg5,
      TrafficToppingWaterProofingImg6,
    ],
  },
  {
    title: "RESTORATION",
    subheading: "CONCRETE REPAIR",
    description:
      "Involve fixing damaged or deteriorated concrete in structures, like buildings or bridges, to restore their strength and integrity. This process typically includes removing unstable concrete, treating exposed reinforcement, and filling the area with new concrete or repair materials. It’s essential for maintaining the safety and longevity of concrete structures.",
    images: [
      ConcreteRepairImg1,
      ConcreteRepairImg2,
      ConcreteRepairImg3,
      ConcreteRepairImg4,
      ConcreteRepairImg5,
      ConcreteRepairImg6,
      ConcreteRepairImg7,
      ConcreteRepairImg8,
      ConcreteRepairImg9,
      ConcreteRepairImg10,
    ],
  },
];

const PortfolioListing = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Bold Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wider">
            Portfolio
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-[3px] bg-yellow-500 mx-auto mt-3 origin-left"
          />
        </motion.div>

        {portfolioData.map((item, index) => {
          const isReversed = index % 2 !== 0;
          const carouselRef = useRef(null);

          // Auto-scroll effect
          useEffect(() => {
            const interval = setInterval(() => {
              if (carouselRef.current) {
                const container = carouselRef.current;
                const maxScrollLeft =
                  container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScrollLeft - 10) {
                  // Reset to start
                  container.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                  // Scroll forward
                  container.scrollBy({ left: 400, behavior: "smooth" });
                }
              }
            }, 3000); // scroll every 3 seconds

            return () => clearInterval(interval);
          }, []);

          return (
            <motion.div
              key={index}
              className={`relative flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Carousel with controls */}
              <motion.div
                className="relative w-full md:w-2/3 overflow-hidden group"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div
                  ref={carouselRef}
                  className="flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4 scroll-smooth"
                >
                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className="min-w-[80%] md:min-w-[400px] h-[400px] bg-gray-200 snap-center shrink-0"
                      style={{
                        clipPath: isReversed
                          ? "polygon(0 0, 100% 0, 100% 100%, 5% 100%)"
                          : "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                      }}
                    >
                      <img
                        src={img}
                        alt={`${item.title} - ${item.subheading}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating text panel */}
              <motion.div
                className={`relative z-10 bg-white shadow-xl rounded-lg p-8 md:w-1/2 -mt-12 md:mt-0 ${
                  isReversed ? "md:-mr-16" : "md:-ml-16"
                }`}
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-black tracking-wider">
                  {item.title}
                </h2>
                <h3 className="text-lg text-yellow-600 font-semibold mb-4 tracking-wider">
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
