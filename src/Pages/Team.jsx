import React, { useState,useEffect } from "react";
import data from "../Data/Team.json";
import { AiOutlineLinkedin, } from 'react-icons/ai';
import { MdOutlineEmail } from "react-icons/md";
import teamImg from "/assets/user.jpg"
import "../Css/Team.css"
import imgpath from "/assets/speaker/dummyimage.jpg"

export default function Team() {
  const [activeSection, setActiveSection] = useState("Faculty");
  const [teamMembers, setTeamMembers] = useState([]);

 
// backend data is not in similar format as frontned saved in json
// response is having an obect teamMembers and it has array of memmbers wtih designation and other details 

  // fetch team members
  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL+'/api/public/get-team-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ designation: activeSection }),
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("Rsponse ",data)
        setTeamMembers(data.teamMembers);
      } else {
        console.error('Failed to fetch team members');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
    // console.log("Team members ",teamMembers)
  }, [activeSection]);


  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white pt-10 ">
      <div>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight pl-2 md:pl-6pl-2 lg:pl-10 md:pl-6">MEET</h1>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight flex items-center pl-2 lg:pl-10 md:pl-6">THE TEAM 
          <div className="animate-ping text-[10vw] md:text-[8vw] sm:text-[6vw] lg:text-[6vw] pl-1">|</div> 
        </h1>
      </div>
      <div className="w-full h-auto min-h-[80vh] flex teamConatiner">
        <div className="teamSection flex flex-wrap gap-2 justify-center lg:flex-nowrap">
          {["Faculty","Lead","Sponsorship", "Web", "Crn", "Pr", "Creative","Operation"].map((section, index) => (
            <button 
              key={index} 
              className={`p-5 max-[900px]:m-2 min-w-[150px] text-white ${activeSection === section ? "bg-[#ff385c]" : "bg-[#2f4f4f]"} hover:bg-[#ff385c] transition-all duration-300`} 
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
        <div className="lg:w-[70%] md:w-[80%] sm:w-[90%] w-full max-w-7xl px-4 mb-5 ">
          <div className="grid gap-5 max-[390px]:gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-10">
            {/* data[activeSection] */}
            {teamMembers.map((member, index) => (
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
      <div>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight pr-2  lg:pr-10 md:pr-6 text-right mt-10">OUR</h1>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight pr-2  lg:pr-10 md:pr-6 text-right">SPONSERS</h1>
      </div>
      <div className="w-full h-auto p-10 flex flex-wrap">
      <div className='w-full gallery'>
      
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>1</p>
      </div>
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>2</p>
      </div>
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>3</p>
      </div>
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>4</p>
      </div>
    
      
    </div>
      </div>
    </div>
  );
}


