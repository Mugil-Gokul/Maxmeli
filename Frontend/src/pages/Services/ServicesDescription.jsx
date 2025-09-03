import bgImage from "../../assets/collage2.jpg";

export default function ServicesDescription() {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content wrapper */}
      <div className="relative w-full min-h-screen flex items-center justify-end px-4 md:px-12 py-12">
        {/* Card on the right */}
        <div className="bg-white/95 backdrop-blur-sm border border-gray-100 shadow-2xl  max-w-xl w-full p-8 md:p-10 lg:p-12 text-left">
          <p className="text-xs font-semibold tracking-widest text-black uppercase">
            Our services
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            End‑to‑end construction, renovation, and site development
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            We deliver full‑scope solutions across residential, commercial, and industrial projects — from new builds and structural upgrades to adaptive renovations and precision restorations — prioritizing quality, safety, and schedule certainty.
          </p>
        </div>
      </div>
    </section>
  );
}
