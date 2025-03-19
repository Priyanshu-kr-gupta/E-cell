import { useEffect } from "react";
import "../Css/Footer.css";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/assets/logo.png";

export default function Footer() {
  useEffect(() => {
    // Add smooth scroll behavior for footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  const socialIcons = [
    { icon: <FaFacebookSquare />, link: "https://www.facebook.com/entrepreneurship.cell.nit.jsr/", label: "Facebook" },
    { icon: <FaTwitterSquare />, link: "https://x.com/ecell_nitjsr/", label: "Twitter" },
    { icon: <FaInstagramSquare />, link: "https://www.instagram.com/ecell.nitjsr/", label: "Instagram" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/e-cell-nit-jamshedpur1234/posts/?feedView=all", label: "LinkedIn" }
  ];

  return (
    <footer className="footer-container bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
      {/* Wave SVG Divider */}
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="#27272a" 
            fillOpacity="1" 
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,10.7C960,0,1056,0,1152,16C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>

      <div className="footer-content max-w-7xl mx-auto px-4 py-12">
        {/* Logo Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="logo-section flex items-center justify-center mb-8"
        >
          <img src={logo} alt="NIT Jamshedpur Logo" className="w-[150px] mr-3 hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            NIT Jamshedpur
          </h2>
        </motion.div>

        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="footer-section"
          >
            <h4 className="text-xl font-bold mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2">
              CONTACT US
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+918809257745" className="hover:text-blue-400 transition-colors duration-300">
                  8809257745
                </a>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+917359687206" className="hover:text-blue-400 transition-colors duration-300">
                  7359687206
                </a>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:entrepreneurship@nitjsr.ac.in" className="hover:text-blue-400 transition-colors duration-300">
                  entrepreneurship@nitjsr.ac.in
                </a>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                <span>NIT Jamshedpur, Jharkhand</span>
              </li>
            </ul>
          </motion.div>

          {/* Important Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="footer-section"
          >
            <h4 className="text-xl font-bold mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2">
              IMPORTANT LINKS
            </h4>
            <ul className="space-y-3">
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="/" className="footer-link flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="hover:text-blue-400 transition-colors duration-300">Home</span>
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="/events" className="footer-link flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="hover:text-blue-400 transition-colors duration-300">Upcoming Events</span>
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="/past-events" className="footer-link flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="hover:text-blue-400 transition-colors duration-300">Past Events</span>
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="/team" className="footer-link flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="hover:text-blue-400 transition-colors duration-300">Our Team</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="footer-section"
          >
            <h4 className="text-xl font-bold mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mt-2">
              SOCIAL MEDIA
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex items-center justify-center w-12 h-12 rounded-full bg-zinc-700 text-2xl hover:bg-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            <div className="newsletter mt-6">
              <h5 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="py-2 px-3 rounded-l-md w-full bg-zinc-700 border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-r-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-10 pt-6 border-t border-zinc-700 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="made-with flex justify-center items-center mb-2"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-red-500 mx-1"
            >
              ❤️
            </motion.span>
            <span>by team E-cell</span>
          </motion.div>
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Copyright: E-Cell NIT Jamshedpur</p>
        </div>
      </div>
    </footer>
  );
}