import React, { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-2 flex items-center justify-between relative shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-20 md:h-24 w-auto object-contain"
        />
      </div>

      {/* Center Menu */}
      <div className="hidden md:flex space-x-10 absolute left-1/2 transform -translate-x-1/2 uppercase tracking-widest text-sm font-semibold">
        <a href="#about" className="flex items-center relative group">
          <span>About</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#portfolio" className="flex items-center relative group">
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#services" className="flex items-center relative group">
          <span>Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Right Contact */}
      <div className="hidden md:flex uppercase tracking-widest text-sm font-semibold">
        <a href="#contact" className="flex items-center relative group">
          <span className="pr-2">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          <Mail size={18} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-6 space-y-6 md:hidden z-10">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail size={18} />
            <span>Contact Us</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
