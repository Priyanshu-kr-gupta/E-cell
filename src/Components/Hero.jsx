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
          <p className='w-full'>NIT JAMSHEDPUR</p>
          <h1 className='text-white z-[2] text-[40px] font-semibold animate-pulse'>presents</h1>
      <div className='text-white mb-4 text-[20px] font-medium drop-shadow-[0_0_5px_black] animate-bounce absolute bottom-0 text-center'>|<br/>Scroll down</div>
      {/* <div className='absolute text-white z-10 bottom-1 left-1 flex flex-col gap-3'>
        <div className='lg:w-10 w-8 aspect-square bg-white rounded-full'></div>
        <div className='lg:w-10 w-8 aspect-square bg-white rounded-full'></div>
        <div className='lg:w-10 w-8 aspect-square bg-white rounded-full'></div>
        <div className='lg:w-10 w-8 aspect-square bg-white rounded-full'></div>
      </div> */}
      </motion.div>

   
    </div>
  );
}
