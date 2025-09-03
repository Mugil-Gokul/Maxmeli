import bgImage from "../../assets/collage1.jpg"; // Replace with your background image path

export default function ContactSection() {
  return (
    <section
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md">
            LET&apos;S BUILD TOGETHER
          </h2>
        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-20 shadow-lg max-w-sm ml-auto flex flex-col items-center text-center">
          <h3 className="text-sm font-medium text-gray-700 mb-2">LET&apos;S TALK</h3>
          <p className="font-bold mb-6">NEED TO REACH US?</p>
          <a
            href="#contact"
            className="font-sm tracking-wider inline-block bg-yellow-400 text-white font-semibold px-4 py-2 hover:bg-yellow-500 transition-colors"
          >
            CONTACT US
          </a>
        </div>

      </div>
    </section>
  );
}
