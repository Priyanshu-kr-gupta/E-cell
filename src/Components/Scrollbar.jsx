import React, { useEffect, useState } from 'react'
import { motion} from "framer-motion";


function Scrollbar() {
      const [scrollProgress, setScrollProgress] = useState(0);
    
      // Update scroll progress
      useEffect(() => {
        const handleScroll = () => {
          const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const currentScroll = window.scrollY;
          const progress = (currentScroll / totalScroll);
          setScrollProgress(progress);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />
  )
}

export default Scrollbar