import React, { useState, useEffect } from 'react';
import "../Css/UpcomingEvent.css";
import { Link } from 'react-router-dom';

export default function UpcomingEvent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  const [loading, setLoading] = useState(true);
  const fetchEvents = async () => {
    try {
      setLoading(true);

      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/public/get-top-upcoming-events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data = await response.json();
     console.log(data)
      setUpcomingEvent(data.topUpcomingEvents || []); // Default to an empty array

      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
useEffect(() => {
    fetchEvents();
  }, []);


  if (loading) {
    return (
  
      <div className="flex justify-center items-center h-screen  bg-[#202729]  text-white">
           <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative overflow-hidden z-0 border-[15px] border-[#2f4f4f]">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-center z-10  w-full py-6 sm:py-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 animate-fade-in-down ">
        Upcoming Events
      </h1>
      <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full" />
    </div>

   
  
    <div
      key={upcomingEvent[currentIndex]?._id}
      style={{ backgroundImage: `url(${upcomingEvent[currentIndex]?.banner})` }}
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out "
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm" />
    </div>
  
    <div className="absolute top-[25%] left-0 right-0 px-6 sm:px-12 lg:px-24 text-white z-20 space-y-6 transform transition-all duration-500 ease-out">
      <div className="max-w-4xl space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-2xl animate-slide-up">
          {upcomingEvent[currentIndex]?.name || "Event Name"}
        </h1>
        
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full" />
        
        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-100 max-w-2xl leading-relaxed drop-shadow-md opacity-90 hover:opacity-100 transition-opacity">
          {upcomingEvent[currentIndex]?.intro || "Event description not available."}
        </p>
        
        <Link to={`/EventGallery/${upcomingEvent[currentIndex]?._id}`} className="inline-block">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4a1 1 0 010 2H6v10h4a1 1 0 110 2H6a2 2 0 01-2-2V4zm8 0a1 1 0 011-1h4a2 2 0 012 2v12a2 2 0 01-2 2h-4a1 1 0 110-2h4V4h-4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            coming soon
          </button>
        </Link>
      </div>
    </div>
  
    <div className="absolute bottom-5 right-5 flex gap-3 p-3 overflow-x-auto z-20 w-[80%] lg:w-[40%] slider1">
      {upcomingEvent.map((info, index) => (
        <div
          key={index}
          className={`relative w-20 h-20 sm:w-28 sm:h-32 flex-shrink-0 cursor-pointer transition-all duration-300 group ${
            currentIndex === index
              ? 'ring-4 ring-yellow-400 scale-110'
              : 'opacity-80 hover:opacity-100 hover:scale-105'
          }`}
          onClick={() => setCurrentIndex(index)}
        >
          <img
            src={info.banner}
            alt="Event"
            className="w-full h-full object-cover rounded-lg transform transition-transform"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 ${
            currentIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
          } transition-opacity`} />
        </div>
      ))}
      {/* <Link
        to="/all-events"
        className="flex items-center ml-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 self-center"
      >
        View All
      </Link> */}
    </div>
  </div>
  );
}
