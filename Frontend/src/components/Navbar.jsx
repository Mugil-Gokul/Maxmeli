import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Detect scroll for background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
      className={`fixed w-full z-50 px-4 sm:px-6 py-2 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo - Left */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-16 sm:h-20 md:h-24 w-auto object-contain"
        />
      </Link>

      {/* Center Navigation */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-white space-x-10 uppercase tracking-widest text-sm font-semibold">
        <NavItem to="/about" label="About" />
        <NavItem to="/portfolio" label="Portfolio" />

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link to="/services" className="relative group">
            <span>Services</span>
            <Underline />
          </Link>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg"
              >
                <Link
                  to="/services/construction"
                  className="block px-4 py-2 hover:bg-yellow-500 transition"
                >
                  Construction
                </Link>
                <Link
                  to="/services/restoration"
                  className="block px-4 py-2 hover:bg-yellow-500 transition"
                >
                  Restoration
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Contact - Right */}
      <div className="hidden md:flex text-white uppercase tracking-widest text-sm font-semibold">
        <Link to="/contact" className="flex items-center gap-2 relative group">
          <span>Contact Us</span>
          <Underline />
          <Mail size={18} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-6 md:hidden z-10"
          >
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/services/construction">Construction</Link>
            <Link to="/services/restoration">Restoration</Link>
            <Link to="/contact" className="flex items-center gap-2">
              <Mail size={18} />
              <span>Contact Us</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

// Reusable Nav Item
function NavItem({ to, label }) {
  return (
    <Link to={to} className="relative group">
      <span>{label}</span>
      <Underline />
    </Link>
  );
}

// Reusable Underline
function Underline() {
  return (
    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
  );
}
