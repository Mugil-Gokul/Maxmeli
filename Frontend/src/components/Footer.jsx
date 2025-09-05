import { useState } from "react";
import { Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="w-full bg-black text-white"
    >
      {/* Top Section */}
      <div className="border-b border-gray-600">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center text-center gap-4">
          <motion.h2
            variants={fadeUp}
            className="text-sm font-normal tracking-widest pb-7"
          >
            CONNECT WITH US
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-16 text-md"
          >
            <SocialLink
              icon={<Linkedin size={20} />}
              label="LinkedIn"
              color="hover:text-blue-400"
              href="https://www.linkedin.com/company/yourcompany"
            />
            <SocialLink
              icon={<Instagram size={20} />}
              label="Instagram"
              color="hover:text-pink-400"
              href="https://www.instagram.com/yourcompany"
            />
            <SocialLink
              icon={<Youtube size={20} />}
              label="YouTube"
              color="hover:text-red-500"
              href="https://www.youtube.com/yourcompany"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
          {/* Logo */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-8 md:gap-16 font-medium text-sm tracking-wider items-center md:items-start text-center md:text-left"
          >
            {/* First Column */}
            <div className="flex flex-col gap-2">
              <NavLink text="ABOUT US" to="/about" />
              <NavLink text="PORTFOLIO" to="/portfolio" />
              <NavLink text="CONTACT US" to="/contact" />
            </div>

            {/* Second Column - Dropdown */}
            <div className="flex flex-col relative items-center md:items-start">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-center md:justify-start gap-1 font-semibold transition-colors w-full"
              >
                <NavLink text="SERVICES" />
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-2 mt-2"
                  >
                    <NavLink text="CONSTRUCTION" to="/services/construction" />
                    <NavLink text="RESTORATION" to="/services/restoration" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

/* Reusable NavLink with underline animation using Link */
function NavLink({ text, to }) {
  return (
    <Link to={to || "#"} className="group relative w-fit inline-block">
      <span>{text}</span>
      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

/* Reusable Social Link */
function SocialLink({ icon, label, color, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center flex-col gap-2 ${color} transition-colors`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
