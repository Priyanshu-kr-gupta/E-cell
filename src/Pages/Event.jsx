import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../Data/pastevent.json";

export default function Event() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  const j = currentPage * itemsPerPage;
  const i = j - itemsPerPage;
  const items = data.slice(i, j);
  
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center text-center" 
           style={{ backgroundImage: 'url(/assets/hero-background.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold mb-6">Our Past Events</h1>
          <p className="text-lg font-medium mb-10">Relive the moments, explore the excitement</p>
        </div>
      </div>
      
      <div className="w-full py-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] sm:w-[85%] lg:w-[80%]">

          {items.map((info, index) => {
            const imageIndex = i + index; // Calculate the actual index of the image in the array

            return (
              <Link key={index} to={`/EventGallery/${imageIndex}`} className="group relative overflow-hidden rounded-lg shadow-lg">
                
                {/* Spinner (shown until the image is loaded) */}
                {!imageLoaded[imageIndex] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="w-12 h-12 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Image */}
                <img 
                  src={`/assets/event/${info.name}/${info.banner}`} 
                  alt={info.name} 
                  className={`w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110 ${!imageLoaded[imageIndex] ? 'hidden' : 'block'}`} 
                  onLoad={() => handleImageLoad(imageIndex)} // Image load handler
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-5 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold">{info.name}</h3>
                  <h2 className='text-center'>{info.intro}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="w-full flex justify-center mb-10">
        {Array(totalPages).fill().map((_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} 
                  className={`px-4 py-2 mx-2 rounded-md ${currentPage === index + 1 ? 'bg-[#1c3b3b] text-white' : 'bg-[#2f4f4f] text-gray-300'}`}>
            {index + 1}
          </button>
        ))}
      </div>
      
      <div className="w-full bg-[#1c3b3b] py-12 flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-6 text-center">Excited for More?</h2>
        <p className="text-lg font-medium mb-10 w-[70%] text-center">Stay tuned for our upcoming events where you can be part of something exciting and create memories just like these.</p>
        <Link to={'#'}>
          <button className="bg-[#2f4f4f] text-white px-8 py-3 rounded-md hover:bg-[#1c3b3b] transition"> 
            View Upcoming Events 
          </button>
        </Link>
      </div>
    </div>
  );
}
