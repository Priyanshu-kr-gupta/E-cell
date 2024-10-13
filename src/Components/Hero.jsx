import React from 'react';
import "../Css/Hero.css";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png"

export default function Hero() {
  return (
    <div className="hero-container">

      {/* <div className='w-full flex justify-center items-center h-[30vh]'><img src={logo} alt="" className='w-[120px] absolute z-10'/></div> */}
      <motion.div className="hero"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.8}}
      >
          <p className='w-full'>NIT JAMSHEDPUR</p>
          <h1 className='text-white z-[2] text-[40px] font-semibold animate-pulse'>presents</h1>

      <div className='text-white mb-4 z-10 text-[20px] font-medium drop-shadow-[0_0_5px_black] animate-bounce absolute bottom-0 text-center'>|<br/>Scroll down</div>
      
      <div className='absolute text-white z-10 lg:bottom-10 lg:left-10 md:bottom-7 md:left-7 sm:bottom-4 sm:left-4 bottom-2 left-2   flex flex-col gap-5'>
        <div className='text-center text-[50px] '>|</div>
       <FaLinkedin className='text-[28px] hover:text-blue-400 cursor-pointer'/>
       <FaInstagramSquare className='text-[28px] hover:text-pink-500 cursor-pointer'/>
       <FaFacebookMessenger className='text-[28px] hover:text-blue-400 cursor-pointer'/>
       <FaYoutube className='text-[28px] hover:text-red-500 cursor-pointer'/>
       <FaSquareXTwitter className='text-[28px] hover:text-blue-400 cursor-pointer'/>
      </div>
      </motion.div>

   
    </div>
  );
}
