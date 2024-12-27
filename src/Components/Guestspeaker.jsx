// import React from 'react';
// import speakersData from '../Data/guestspeaker.json';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { NavArrowRight, NavArrowLeft } from "iconoir-react";
// import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// export default function Guestspeaker() {
//   return (
//     <div className="w-full h-screen bg-[#202729] flex flex-col justify-center  items-center text-white">
//       <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold m-5">
//         Guest Speakers
//       </p>
//       <div className="relative w-full h-5/6 lg:h-4/5">
//         {/* Custom Navigation Buttons */}
//         <div className="absolute top-1/2 !left-0 lg:!left-12 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full text-black hover:bg-white transition" id="prev-slide">
//           <NavArrowLeft />
//         </div>
//         <div className="absolute top-1/2 !right-0 lg:!right-12 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full text-black hover:bg-white transition" id="next-slide">
//           <NavArrowRight />
//         </div>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           loop={true}
//           initialSlide={Math.floor(speakersData.length / 2)}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             prevEl: '#prev-slide',
//             nextEl: '#next-slide',
//           }}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
//           className="mySwiper relative lg:w-[70%] w-full lg:h-full [&_.swiper-pagination-bullet-active]:bg-white"
//         >
//           {speakersData.map((speaker, index) => (
//           <SwiperSlide
//           key={index}
//           className="!w-[18rem] !h-[25rem] md:w-[22rem] md:h-[30rem] lg:w-[28rem] lg:h-[35rem] flex flex-col rounded-[1rem] justify-center items-center mt-[20px] overflow-hidden bg-[#253C44] md:mt-[30px] lg:mt-[40px] shadow-lg transition-transform duration-200 hover:scale-105"
//         >
//           <img
//             src={`/assets/speaker/${speaker.image}`}
//             alt={speaker.name}
//             className="p-3 !h-[60%] w-full object-cover object-top mb-4 rounded-t-[1rem] transition-transform duration-200 hover:scale-110"
//           />
//           <div className="flex flex-col items-center p-4">
//             <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-1 text-white">
//               {speaker.name}
//             </p>
//             <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
//               {speaker.about}
//             </p>
//           </div>
//         </SwiperSlide>
        
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import speakersData from '../Data/guestspeaker.json';

export default function Guestspeaker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) return; // Stop auto-slide if hovered
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % speakersData.length);
    }, 2000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [isHovered, speakersData.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="w-full h-screen bg-[#202729] flex flex-col justify-center  items-center text-white">
      <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-6">
        Guest Speakers
      </p>
      <div
        className="w-full max-w-7xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="w-36 h-36 rounded-full overflow-hidden">
              <img
                src={`/assets/speaker/${speakersData[currentIndex].image}`}
                alt={speakersData[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-semibold mb-2 text-violet-500">
              {speakersData[currentIndex].name}
            </h2>
            <p className="text-base font-light text-gray-400 mb-5 mx-auto">
              {speakersData[currentIndex].intro}
            </p>
            <div className="text-lg font-light mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 mr-auto ml-10 dark:text-violet-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="max-w-2xl mx-auto">{speakersData[currentIndex].about}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 ml-auto mr-10 dark:text-violet-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


