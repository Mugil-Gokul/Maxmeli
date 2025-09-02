import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Maxmeli Construction transformed our vision into reality with their exceptional attention to detail and professionalism. We couldn’t be happier!",
    name: "Tom Hardy",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 2,
    text: "Working with Maxmeli Construction was an absolute pleasure. They delivered on time and exceeded our expectations in every way possible.",
    name: "Sarah Johnson",
    img: "https://i.pravatar.cc/100?img=5",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-6 py-16 md:mt-40 mt-96">
      {/* Header */}
      <div className="mb-12 text-left">
        <p className="uppercase text-sm tracking-widest">Testimonials</p>
        <div className="w-[23rem] h-[1px] bg-black my-2"></div>
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          WHAT OUR CLIENTS SAY ?
        </h2>
      </div>

      {/* Testimonial Content */}
      <div className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-20">
        {/* Text Side */}
        <div className="flex-1 text-center">
          <p className="text-xl md:text-2xl italic leading-relaxed">
            “{testimonials[activeIndex].text}”
          </p>

          {/* Client Info */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <img
              src={testimonials[activeIndex].img}
              alt={testimonials[activeIndex].name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="font-medium">{testimonials[activeIndex].name}</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index
                ? "bg-black"
                : "border border-black"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
