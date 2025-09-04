import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 px-6 py-2 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden text-white md:flex space-x-10 absolute left-1/2 transform -translate-x-1/2 uppercase tracking-widest text-sm font-semibold">
        <Link to="/about" className="flex items-center relative group">
          <span>About</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/portfolio" className="flex items-center relative group">
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Services with Dropdown */}
        <div
          className="relative flex items-center group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link
  to="/services"
  className="cursor-pointer relative group"
  onClick={() => setServicesOpen(false)}
>
  <span>Services</span>
  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
</Link>


          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 mt-2 w-48  text-white bg-black rounded-md  shadow-lg overflow-hidden"
              >
                <Link
                  to="/services/construction"
                  className="block px-2 py-2 hover:bg-yellow-500 transition"
                >
                  Construction
                </Link>
                <Link
                  to="/services/restoration"
                  className="block px-2 py-2 hover:bg-yellow-500 transition"
                >
                  Restoration
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Contact */}
      <div className="hidden text-white md:flex uppercase tracking-widest text-sm font-semibold">
        <Link to="/contact" className="flex items-center relative group">
          <span className="pr-2">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          <Mail size={18} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-6 md:hidden z-10"
        >
          <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/portfolio" className="hover:underline" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-semibold">Services</span>
            <Link to="/services/construction" onClick={() => setIsOpen(false)}>
              Construction
            </Link>
            <Link to="/services/restoration" onClick={() => setIsOpen(false)}>
              Restoration
            </Link>
          </div>

          <Link to="/contact" className="flex items-center gap-2 hover:underline" onClick={() => setIsOpen(false)}>
            <Mail size={18} />
            <span>Contact Us</span>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
