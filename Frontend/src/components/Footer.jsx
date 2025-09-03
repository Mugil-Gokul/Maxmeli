import { useState } from "react";
import { Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <footer className="w-full bg-black text-white">
      {/* Top Section - Column Layout */}
      <div className="border-b border-gray-600">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center text-center gap-4">
          <h2 className="text-sm font-normal tracking-widest pb-7">
            CONNECT WITH US
          </h2>
          <div className="flex items-center gap-32 text-md">
            <a
              href="#"
              className="flex items-center flex-col gap-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center flex-col gap-2 hover:text-pink-400 transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center flex-col gap-2 hover:text-red-500 transition-colors"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="max-w-6xl mx-auto px-4 py-12 flex items-start justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="flex gap-16 font-medium text-sm tracking-wider">
            {/* First Column */}
            <div className="flex flex-col gap-2">
              <NavLink text="ABOUT US" href="#" />
              <NavLink text="PORTFOLIO" href="#" />
              <NavLink text="CONTACT US" href="#" />
            </div>

            {/* Second Column - Dropdown */}
            <div className="flex flex-col relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 font-semibold hover:text-gray-400 transition-colors"
              >
                SERVICES
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="flex flex-col gap-2 mt-2">
                  <NavLink text="CONSTRUCTION" href="#" />
                  <NavLink text="RESTORATION" href="#" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
/* Reusable NavLink with underline animation */
function NavLink({ text, href }) {
  return (
    <a
      href={href}
      className="relative group w-fit"
    >
      {text}
      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}
