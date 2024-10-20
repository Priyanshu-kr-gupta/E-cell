import React, { useState } from "react";
import data from "../Data/Team.json";
import { AiOutlineLinkedin, } from 'react-icons/ai';
import { MdOutlineEmail } from "react-icons/md";
import teamImg from "/assets/team.png"
import "../Css/Team.css"

export default function Team() {
  const [activeSection, setActiveSection] = useState("Faculty");

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white pt-10 ">
      <div className="">
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight pl-2 md:pl-6pl-2 lg:pl-10 md:pl-6">MEET</h1>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight flex items-center pl-2 lg:pl-10 md:pl-6">THE TEAM 
          <div className="animate-ping text-[10vw] md:text-[8vw] sm:text-[6vw] lg:text-[6vw] pl-1">|</div> 
        </h1>
      </div>
      <div className="w-full h-auto flex teamConatiner">
        <div className="teamSection flex flex-wrap gap-2 justify-center lg:flex-nowrap">
          {["Faculty","Lead", "Web", "Crn", "Pr", "Corporate"].map((section, index) => (
            <button 
              key={index} 
              className={`p-5 text-white ${activeSection === section ? "bg-[#ff385c]" : "bg-[#2f4f4f]"} hover:bg-[#ff385c] transition-all duration-300`} 
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
        <div className="lg:w-[70%] md:w-[80%] sm:w-[90%] w-full max-w-7xl px-4 mb-10">
          <div className="grid gap-5 max-[390px]:gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-10">
            {data[activeSection].map((member, index) => (
              <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md flex relative teamCard" key={index}>
                <img src={teamImg} className="w-full h-full object-cover teamHero"/>
                <div className="absolute bottom-0 bg-[rgba(0,0,0,0.7)] w-full teamInfo">
                  <div className="flex flex-col justify-around items-center transition-all duration-300 ease-in-out teamInfoVisible">
                    <div className="text-center md:text-left pt-2 max-[767px]:pt-1">
                      <h2 className="text-lg font-bold">{member.name}</h2>
                      <p className="text-sm text-gray-100">{member.designation}</p>
                    </div>
                    <div className="w-full flex items-center justify-center p-5 teamInfoHidden">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-blue-500">
                        <AiOutlineLinkedin size={24} />
                      </a>
                      <a href={"mailto:" + member.email} className="text-gray-300 hover:text-red-400">
                      <MdOutlineEmail size={24}/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


