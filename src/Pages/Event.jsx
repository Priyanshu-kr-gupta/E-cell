import React from 'react'
import { Link } from 'react-router-dom';
import data from "../Data/pastevent.json";
export default function Event() {
  return (
    <div className='w-full'>
    <div className='bg-[#2f4f4f] text-white flex items-center justify-around flex-col h-full'>
    {/* {"EVENTS".split("").map((letter, index) => (
            <span key={index} className="block text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold">{letter}</span>
          ))} */}
          <p className='block text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold p-10'>Past Events</p>

    </div>
    <div className='w-full bg-[#303633] flex flex-wrap gap-10 justify-center p-10 '>
      
    {data.map((info, index) => (
    <Link to={`/EventGallery/${index}`}>
        <div key={index} className='relative'>
            <img 
              src={`/assets/event/${info.banner}`} 
              alt="notfound" 
              className=' w-[300px] h-[300px] object-cover flex-shrink-0  bg-zinc-950 cursor-pointer' 
              
              />
            
          <div className='w-full text-center p-4 bg-[rgba(0,0,0,0.5)] text-white absolute bottom-0 '>{info.name}</div>
          </div>
    </Link>
        ))}
    </div>
    </div>
  )
}
