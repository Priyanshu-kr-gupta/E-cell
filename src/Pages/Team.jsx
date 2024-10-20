import React from "react";
import data from "../Data/Team.json"
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

import teamImg from "/assets/team.png"
import "../Css/Team.css"
export default function Team() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white pt-10 ">
      <div className="">
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight pl-2 md:pl-6pl-2 lg:pl-10 md:pl-6">MEET</h1>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight flex items-center pl-2 lg:pl-10 md:pl-6">THE TEAM <div className="animate-ping text-[10vw] md:text-[8vw] sm:text-[6vw] lg:text-[6vw] pl-1">|</div></h1>
      </div>


<div className="mx-auto max-w-7xl px-4">
  <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-10">



  <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md flex relative teamCard">

    <img src={teamImg} className="w-full h-full object-cover teamHero"/>
  
  <div className="absolute bottom-0 bg-black bg-opacity-6 w-full teamInfo">
    <div className="flex flex-col md:flex-row justify-between items-center transition-all duration-300 ease-in-out teamInfoVisible">
      <div className="text-center md:text-left">
        <h2 className="text-lg font-bold">John Doe</h2>
        <p className="text-sm text-gray-600">Software Engineer</p>
      </div>

      <div className="hidden md:block teamInfoHidden">
        <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
          <AiOutlineLinkedin size={24} />
        </a>
        <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
          <AiOutlineTwitter size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <AiOutlineGithub size={24} />
        </a>
      </div>
    </div>
  </div>
</div>



</div>
</div>


    </div>
  );
}
