import React, { useState, useEffect } from 'react';
import data from "../Data/pastevent.json";
import "../Css/UpcomingEvent.css";

export default function PastEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let sliderInterval;
    
    if (!isHovered) {
      sliderInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);
    }
    return () => clearInterval(sliderInterval);
  }, [isHovered]);
  return (
    <div className='w-full h-screen bg-[#202729] flex justify-between items-center text-white flex-col'>
    <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold m-5">Past events</p>

    <div 
      className='w-[80%] h-full bg-[#253C44] flex m-2 max-[700px]:flex-col max-[700px]:items-center'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        style={{ backgroundImage: `url(/assets/event/${data[currentIndex].banner})` }} 
        className='w-[90%] h-[90%] m-[2%] mt-3 bg-cover bg-center rounded-t-lg max-[700px]:h-full'
      >
      </div>

      <div className='w-full p-5'>
        <h3 className='text-2xl font-bold'>{data[currentIndex].name}</h3><br/>
        
        <p className='text-sm text-left'>{data[currentIndex].description}</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Visit</button>
      </div>
    </div>

    <div className='w-full text-center'>
      <div className='flex p-10 gap-10 overflow-x-scroll slider1'>

        {data.map((info, index) => (
          <div 
            key={index} 
            className={`w-[80px] h-[80px] flex-shrink-0 ${currentIndex === index ? 'border-4 border-yellow-500' : ''}`}>
            <img 
              src={`/assets/event/${info.banner}`} 
              alt="notfound" 
              className='cursor-pointer w-full h-full object-cover' 
              onClick={() => setCurrentIndex(index)} 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        ))}

      </div>
    </div>
  </div>
  )
}
