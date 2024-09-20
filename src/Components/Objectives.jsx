import React,{useEffect,useState} from 'react';
import { motion } from "framer-motion";
import "../Css/Objective.css"
export default function Objectives() {

  return (
    <div className="w-full bg-white relative flex flex-col justify-center">
      <div className="objectivecontainer">
      <div
        className="section"
        id="mission"
        // variants={sectionVariants}
      >
        <motion.h1
        className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-[10vh]"
        initial={{opacity:"0",marginBottom:"0%"}}
        whileInView={{opacity:"1",marginBottom:"5%"}}
        exit={{opacity:"0"}}
        viewport={{ once: false, amount: 1 }}
        >Mission</motion.h1>
        <motion.p
          initial={{opacity:"0"}}
          whileInView={{opacity:"1"}}
          exit={{opacity:"0"}}
          viewport={{ once: false, amount: 1 }}
        >
          
        To spread awareness about India's growing start-up ecosystem and expose students to its nuances thereby developing an entrepreneurial spirit in the students.
        </motion.p>
      </div>

      <div
        className="section"
        id="goal"
        // variants={sectionVariants}
      >
        <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-[10vh]"
        initial={{opacity:"0",marginBottom:"0%"}}
        whileInView={{opacity:"1",marginBottom:"5%"}}
        exit={{opacity:"0"}}
        viewport={{ once: false, amount: 1 }}
        >Goal</motion.h1>
        <motion.p
          initial={{opacity:"0"}}
          whileInView={{opacity:"1"}}
          exit={{opacity:"0"}}
          viewport={{ once: false, amount: 1 }}
        >
          
          To encourage students by educating them about diverse fields and their roles right from ideation to operation.
        </motion.p>
      </div>
      <div
        className="section"
        id="vision"
        // variants={sectionVariants}
      >
        <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-[10vh]"
        initial={{opacity:"0",marginBottom:"0%"}}
        whileInView={{opacity:"1",marginBottom:"5%"}}
        exit={{opacity:"0"}}
        viewport={{ once: false, amount: 1 }}
        >Vision</motion.h1>
        <motion.p
          initial={{opacity:"0"}}
          whileInView={{opacity:"1"}}
          exit={{opacity:"0"}}
          viewport={{ once: false, amount: 1 }}
        >
          
        We envision a lively environment where students can explore their entrepreneurial talents. We aim to foster a culture of creativity and innovation, offering support, mentorship, and opportunities for students to turn their ideas into successful ventures.
        </motion.p>
      </div>
    </div>
    </div>
  );
}
