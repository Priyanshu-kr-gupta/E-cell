// import React from 'react'

// export default function Guestspeaker() {
//   return (
//     <div className='w-full h-screen bg-[#202729] flex justify-center items-center flex-col text-white'>
//       <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-[10vh]">Guest Speakers</p>

//     <div>

//       {/* no see all button will be there create a slider which will show all the cards */}
//       {/* remove this div  -> create a container for the cards ->  create a card name GuestspeakerCard.jsx -> use Data/guestspeaker.json file*/}
//       <div className='w-[300px] h-[300px] bg-[#253C44]'></div>

//     </div>

//       </div>
//   )
// }
import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import speakersData from '../Data/guestspeaker.json'; // Adjust the path as needed

export default function Guestspeaker() {
  return (
    <div className='w-full h-screen bg-[#202729] flex flex-col justify-center items-center text-white'>
      <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-[10vh]">Guest Speakers</p>
      <div className='w-full flex justify-center items-center'>
        <Carousel>
          {speakersData.map((speaker, index) => (
            <div key={index} className='relative md:w-full h-[400px]  md:h-[600px] flex justify-center items-center'>
              <img
                src={`/assets/speaker/${speaker.image}`}
                alt={speaker.name}
                className='w-[50%] md:w-full h-full object-cover'
              />
              <p className='absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 p-2 text-sm sm:text-lg'>
                {speaker.name}
              </p>
              
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

 // import React, { useState } from "react";
// import "../Css/Carousel.css"; // Importing the CSS for styling
// import slides from '../Data/guestspeaker.json'
// console.log(slides)

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);

//   const handlePrev = () => {
//     const newIndex = (currentIndex - 1 + slides.length) % slides.length;
//     setCurrentIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (currentIndex + 1) % slides.length;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="w-full flex justify-center items-center flex-col bg-[#202729]  text-white ">
//       <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mt-10">
//         Guest Speakers
//       </p>
//       <div className="carousel-container ">
//         <div className="carousel ">
//           {slides.map((slide, index) => {
//             let className = "carousel-item rounded-lg";
//             if (index === currentIndex) {
//               className += " active"; // Center slide
//             } else if (
//               index ===
//               (currentIndex - 1 + slides.length) % slides.length
//             ) {
//               className += " prev"; // Left slide
//             } else if (index === (currentIndex + 1+ slides.length) % slides.length) {
//               className += " next"; // Right slide
//             }
//             return (
//               <div
//                 key={index}
//                 className={className}
//                 style={{ backgroundImage: `url(/assets/speaker/${slides[index].image}` }}
//               >

//                 <div className="carousel-content">
//                   <h2 className="carousel-name">{slide.name}</h2>
//                   {/* <p className="carousel-intro">{slide.intro.substring(0, 60)}...</p> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <button className="carousel-button prev" onClick={handlePrev}>
//           &#10094;
//         </button>
//         <button className="carousel-button next" onClick={handleNext}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
