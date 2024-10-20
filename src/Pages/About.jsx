
import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export default function Event() {
   // Refs to the left and right divs
   const leftDivRef = useRef(null);
   const rightDivRef = useRef(null);
   const teamRef=useRef(null);
   // Detect when the left and right divs are in view
   const leftInView = useInView(leftDivRef, { once: false });
   const rightInView = useInView(rightDivRef, { once: false });
   const teamView=useInView(teamRef,{once:false})


 

  return (
    <div className="w-full flex flex-col space-y-48 items-center bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white min-h-screen ">
      
      <div
        className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: "url(/assets/hero-background.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div className="relative z-10"
        
        initial={{ y: "-100vw" }} // Initially off-screen
        animate={{ y: 0 }}        // Slide in when scrolled into view
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <h1 className="text-3xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl tracking-wide text-justify font-medium mb-10 mx-5 lg:mx-0">
            Ecell of NIT Jamshedpur: Where Every Small Idea Matters In the heart
            of innovation and entrepreneurship, Ecell of NIT Jamshedpur proudly
            stands as the catalyst for change. We believe that every small idea
            carries the potential to create something extraordinary. Our mission
            is simple yet powerful: to nurture, support, and celebrate these
            small ideas, transforming them into impactful ventures. With a
            vibrant community of like-minded individuals, we foster a culture of
            creativity and collaboration. Embrace the power of small ideas, and
            together, let's prove that even the smallest of ideas can make a big
            difference.
          </p>
        </motion.div>
      </div>

      <div className="w-full py-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] sm:w-[85%] lg:w-[80%]">
          
        <motion.div
        ref={leftDivRef}
        initial={{ x: "-10vw" }} // Initially off-screen
        animate={leftInView ? { x: 0 } : {}}       // Slide in when scrolled into view
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
            {/* header */}
            <div className="flex justify-around ">
              {/* icon */}
             
              <p className="text-3xl font-bold mb-6 text-center">Workshops</p>
              {/* title */}
            </div>
            <p className="text-justify text-lg tracking-wide">
              We conduct diverse workshops, offering hands-on learning
              experiences, expert guidance, and a platform for creative
              exploration. We empower individuals to transform ideas into
              ventures, catering to a wide range of interests and aspirations.
            </p>
          </motion.div>

          {/* second */}
        <div>
           
              {/* header */}

              <div className="flex justify-around ">
                {/* icon */}

                <p className="text-3xl font-bold mb-6 text-center">Talks</p>
                {/* title */}
              </div>
              <p className="text-justify text-lg tracking-wide">
                We host engaging talk sessions with successful entrepreneurs and
                industry experts, delving into various subjects such as
                entrepreneurial experiences, emerging opportunities, and
                inspiring students to chase their entrepreneurial aspirations.
              </p>
            </div>
          
          {/* third */}
          <motion.div
        ref={rightDivRef}
        initial={{ x: "10vw" }} // Initially off-screen
        animate={rightInView ? { x: 0 } : {}}         // Slide in when scrolled into view
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
       
      >
            {/* header */}
            <div className="flex justify-around ">
              {/* icon */}
             
              <p className="text-3xl font-bold mb-6 text-center">Competitions</p>
              {/* title */}
            </div>
            <p className="text-justify text-lg tracking-wide">
            We host engaging talk sessions with successful entrepreneurs and industry experts, delving into various subjects such as entrepreneurial experiences, emerging opportunities, and inspiring students to chase their entrepreneurial aspirations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-[#1c3b3b] py-12 flex flex-col items-center ">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-center my-4">
        E-Cell Gallery: Rediscover Our Moments

        </h2>
       
        <motion.div
        className="mx-5 lg:mx-0"
        ref={teamRef}
        initial={{ x: "-30vw" }} // Initially off-screen
        animate={teamView ? { x: 0 } : {}}       // Slide in when scrolled into view
        transition={{ type: "spring", stiffness: 50, damping: 20 }}>

       
        <img
 
         src={`/assets/about/team.webp`}/>
          </motion.div>
          
        
      </div>
    </div>
  );
}
