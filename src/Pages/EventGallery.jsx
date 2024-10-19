import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../Data/pastevent.json";
import { Link } from 'react-router-dom';

export default function EventGallery() {
  const { index } = useParams();
  const event = data[index];
  console.log(event);
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const imagesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage=Math.ceil(data[index].gallery.length/imagesPerPage);
  const handleImageClick = (index) => {
    setCurrentImage(index);
    setIsGalleryOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % event.gallery.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + event.gallery.length) % event.gallery.length);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  if (!event) return <div>Event not found</div>;

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="w-full h-[60vh] bg-cover bg-center relative flex items-center justify-center text-center" 
           style={{ backgroundImage: `url(/assets/event/${event.name}/${event.banner})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold mb-6">{event.name}</h1>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="w-full py-16 flex justify-center">
        <div className="w-[80%] lg:w-[60%]">
          <p className="text-lg font-medium mb-10">{event.description}</p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="w-full py-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] sm:w-[85%] lg:w-[80%]">
          {event.gallery.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage).map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => handleImageClick((currentPage - 1) * imagesPerPage + index)}>
              <img src={`/assets/event/${event.name}/${image}`} alt={event.name} 
                   className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">View Image</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      


      {/* <div className="flex justify-center mb-10">
        {currentPage > 1 && (
          <button className="bg-[#2f4f4f] text-white px-8 py-3 rounded-md hover:bg-[#1c3b3b] transition mr-4" onClick={handlePrevPage}>
            Prev
          </button>
        )}
        {Math.ceil(event.gallery.length / imagesPerPage) > currentPage && (
          <button className="bg-[#2f4f4f] text-white px-8 py-3 rounded-md hover:bg-[#1c3b3b] transition" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div> */}



      <div className="flex justify-center mb-10">
      {
        Array(totalPage).fill().map((_,index)=>{
          return(
            <button key={index+1} className={`px-4 py-2 mx-2 rounded-md ${currentPage === index+1?'bg-[#1c3b3b] text-white' : 'bg-[#2f4f4f] text-gray-300'}`} onClick={()=>{setCurrentPage(index+1)}}>{index+1}</button>
          )
        })
      }
      </div>



      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center overflow-hidden z-50">
          <button className="absolute top-1/2 left-0 text-white text-5xl cursor-pointer" onClick={handlePrevImage}>
            &#8592;
          </button>
          <img src={`/assets/event/${event.gallery[currentImage]}`} alt={event.name} 
               className="max-w-full max-h-full object-contain" />
                <button className="absolute top-1/2 right-0 text-white text-5xl cursor-pointer" onClick={handleNextImage}>
            &#8594;
          </button>
          <button className="absolute top-0 right-0 text-white text-3xl cursor-pointer" onClick={handleCloseGallery}>
            X
          </button>
        </div>
      )}


  <div className="w-full bg-[#1c3b3b] py-12 flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-6 text-center">Explore More Events</h2>
        <p className="text-lg font-medium mb-10 w-[70%] text-center">Want to relive more moments? View our entire collection of past events.</p>
        <Link to={'/events'}><button className="bg-[#2f4f4f] text-white px-8 py-3 rounded-md hover:bg-[#1c3b3b] transition"> 
        See All Past Events 
        </button>
        </Link>
      </div>
      
    </div>
  );
}

