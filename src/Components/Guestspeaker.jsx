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
// import speakersData from '../Data/guestspeaker.json';
import Marquee from "react-fast-marquee";

export default function Guestspeaker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);
  // speakers
  const [speakersData,setSpeakersData]=useState([]);

    // Fetch guest speakers data
    const fetchGuestSpeakers = async () => {
      try {
        // setLoading(true);
        // console.log("Fetching data.")
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL+"/api/public/get-all-guest-speakers",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ currentIndex }),
          }
        );
        // console.log("respobse",response)
        if (!response.ok) {
          throw new Error("Failed to fetch guest speakers");
        }
        const data = await response.json();
        // console.log("Data is ",data)
        setSpeakersData(data.guestSpeakers);
        // setTotalPages(data.totalPages);
  
      } catch (error) {
        console.error("Error fetching guest speakers:", error);
        setSpeakersData([]);
      } 
      // finally {
      //   setLoading(false);
      // }
    };


  useEffect(() => {
    fetchGuestSpeakers();
  }, []);


  return (
    <div className="w-full h-screen bg-[#202729] flex flex-col items-center justify-center text-white overflow-hidden pt-8 relative">
    {/* Heading */}
    <div className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-6 absolute top-10">
        Guest Speakers
    </div>
  
    {/* Marquee */}
    {speakersData.length ? (
      <div className="w-full max-w-[90%] mt-20">
        <Marquee gradient={false} speed={50} pauseOnHover>
          {speakersData.map((speaker, index) => (
            <div
              key={index}
              className="w-72 h-[20rem] bg-gray-800 p-5 rounded-xl shadow-lg mx-3 flex flex-col items-center hover:shadow-xl transition-shadow duration-200"
            >
              {/* Avatar */}
              <div className="w-28 h-28 rounded-full mb-5 overflow-hidden border-2 border-violet-400 hover:border-violet-300 transition-colors">
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
  
              {/* Content */}
              <div className="flex flex-col items-center flex-1 w-full">
                <h2 className="text-xl font-semibold mb-3 text-center">
                  {speaker.name}
                </h2>
                <div className="relative w-full flex-1">
                  <p className="text-sm text-gray-300 leading-relaxed px-3 h-full overflow-y-auto scrollbar-hover">
                    {speaker.about}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    ) : (
      <div className="text-gray-400">No speakers found</div>
    )}
  </div>
  );
}


