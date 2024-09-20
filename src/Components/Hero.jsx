import React from 'react';
import "../Css/Hero.css";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="background-color" />
      <motion.div className="hero"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.8}}
      >
      <p>Nit Jsr Presents</p>
      <div className='text-white mb-4 text-[20px] font-medium drop-shadow-[0_0_5px_black] animate-bounce text-center'>Scroll down</div>
      </motion.div>
    </div>
  );
}
