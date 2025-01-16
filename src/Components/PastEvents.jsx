import React, { useState, useEffect } from 'react';
import "../Css/UpcomingEvent.css";
import { Link } from 'react-router-dom';

export default function PastEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchEvents = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/public/get-past-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPage }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data = await response.json();
      setUpcomingEvent(data.upcomingEvents || []); // Default to an empty array
      setTotalPages(data.totalPages || 1); // Default to 1
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
    let sliderInterval;

    if (!isHovered && upcomingEvent.length > 0) {
      sliderInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingEvent.length);
      }, 3000);
    }

    return () => clearInterval(sliderInterval);
  }, [isHovered]);

  if (!upcomingEvent.length) {
    return (
      <div className="w-full h-screen bg-[#202729] flex justify-center items-center text-white">
        <p className="text-xl font-semibold">No events to display</p>
      </div>
    );
  }

  return (
    <div className='w-full h-screen bg-[#202729] flex justify-between items-center text-white flex-col'>
      <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold m-5">Past events</p>

      <div 
        className='w-[80%] h-full bg-[#253C44] flex m-2 max-[700px]:flex-col max-[700px]:items-center'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          style={{ 
            backgroundImage: `url(${upcomingEvent[currentIndex]?.banner})`, 
            backgroundSize: "cover" 
          }} 
          className='w-[90%] h-[90%] m-[2%] mt-3 bg-cover bg-center rounded-t-lg max-[700px]:h-full'
        >
        </div>

        <div className='w-full p-5'>
          <h3 className='text-2xl font-bold'>{upcomingEvent[currentIndex]?.name || "Event Name"}</h3>
          <br />
          <p className='text-sm text-left'>{upcomingEvent[currentIndex]?.intro || "Event description not available."}</p>
          <Link to={`/EventGallery/${currentIndex}`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Gallery</button>
          </Link>
        </div>
      </div>

      <div className='w-full text-center'>
        <div className='flex p-10 gap-10 overflow-x-scroll slider1'>
          {upcomingEvent.map((info, index) => (
            <div 
              key={index} 
              className={`w-[80px] h-[80px] flex-shrink-0 ${currentIndex === index ? 'border-4 border-yellow-500' : ''}`}>
              <img 
                src={`${info.banner}`} 
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
      <div className="flex justify-center mt-4 space-x-2 ">
      {Array(totalPages).fill().map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index+1)}
          className={`px-3 py-1 border rounded ${
            currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
    </div>
  );
}
