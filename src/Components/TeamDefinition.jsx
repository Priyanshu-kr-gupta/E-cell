import { FaBriefcase, FaBullhorn, FaPalette, FaCog, FaLaptopCode } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView, stagger } from "framer-motion";

export default function TeamDefinition() {
  const teamRef = useRef(null);
  const isInView = useInView(teamRef, { once: false, amount: 0.3 });

  // Stagger variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="p-8" ref={teamRef}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-2xl font-bold text-white mb-4 text-center sm:text-left"
          variants={headerVariants}
        >
          Organizational Structure
        </motion.h2>
        
        <motion.p
          className="text-gray-300 mb-6"
          variants={headerVariants}
        >
          E-Cell operates with a core team supported by five specialized units:
        </motion.p>
        
        <motion.ul 
          className="space-y-4"
          variants={containerVariants}
        >
          <motion.li
            className="flex items-center text-lg rounded-lg p-4 text-white hover:bg-gray-800 transition-colors"
            variants={itemVariants}
          >
            <FaBriefcase className="mr-4 text-green-400" />
            <span>Corporate Relations & Networking</span>
          </motion.li>
          <motion.li
            className="flex items-center text-lg rounded-lg p-4 text-white hover:bg-gray-800 transition-colors"
            variants={itemVariants}
          >
            <FaBullhorn className="mr-4 text-blue-400" />
            <span>Social Media & Content</span>
          </motion.li>
          <motion.li
            className="flex items-center text-lg rounded-lg p-4 text-white hover:bg-gray-800 transition-colors"
            variants={itemVariants}
          >
            <FaPalette className="mr-4 text-purple-400" />
            <span>Creative</span>
          </motion.li>
          <motion.li
            className="flex items-center text-lg rounded-lg p-4 text-white hover:bg-gray-800 transition-colors"
            variants={itemVariants}
          >
            <FaCog className="mr-4 text-yellow-400" />
            <span>Operations</span>
          </motion.li>
          <motion.li
            className="flex items-center text-lg rounded-lg p-4 text-white hover:bg-gray-800 transition-colors"
            variants={itemVariants}
          >
            <FaLaptopCode className="mr-4 text-red-400" />
            <span>Web & App Development</span>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}