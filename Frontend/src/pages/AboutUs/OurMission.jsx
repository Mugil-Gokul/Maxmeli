import bgImage from "../../assets/collage5.jpg";

export default function OurMission() {
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
            Our Mission
          </p>

          <h2 className="mt-2 text-lg md:text-xl lg:text-xl font-bold text-gray-900 leading-tight">
            At Maxmeli Construction Ltd., our mission is to create spaces that stand the test of time, combining quality materials, innovative designs, and expert workmanship to exceed our clients’ expectations. We are committed to:
          </h2>

          <p className="mt-4 text-base md:text-md text-gray-700 leading-relaxed">
           o Delivering high-quality construction and restoration services with honesty and transparency.
           <br />
o Providing personalized solutions tailored to the unique needs of each client.
<br />
o Ensuring sustainability, safety, and compliance in every project.
<br />
o Building long-term relationships based on trust, communication, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
