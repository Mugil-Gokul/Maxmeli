import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ConstructionImg from "../../assets/collage3.jpg";
import RestorationImg from "../../assets/collage4.jpg";

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

  return (
    <section className="w-full bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Accent line + heading */}
        <div className="mb-10 md:mb-12">
          <div className="h-[0.25px] w-100 bg-yellow-400 mb-4"></div>
          <h2 className="text-2xl md:text-3xl tracking-wider font-bold text-white uppercase">
            Our Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={i}
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
                {/* Title + arrow in one row */}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;
