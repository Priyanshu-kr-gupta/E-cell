import React from 'react';
import speakersData from '../Data/guestspeaker.json'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Guestspeaker() {
  return (
    <div className="w-full h-screen bg-[#202729] flex flex-col justify-center items-center text-white">
      <p className="h-1/6 text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold flex items-center">
        Guest Speakers
      </p>
      
      <div className="relative w-full h-5/6 ">
        {/* Custom Navigation Buttons */}
        <div
          className="absolute top-1/2  !left-0 lg:!left-12 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full text-black hover:bg-white transition"
          id="prev-slide"
        >
          <NavArrowLeft />
        </div>
        <div
          className="absolute top-1/2 !right-0 lg:!right-12 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full text-black hover:bg-white transition"
          id="next-slide"
        >
          <NavArrowRight />
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          initialSlide={Math.floor(speakersData.length / 2)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '#prev-slide',
            nextEl: '#next-slide',
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true ,

           }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper relative !w-full  !h-full  lg:!w-2/3 lg:h-full    
                  [&_.swiper-pagination-bullet-active]:bg-white sm:!w-full sm:h-2/4 "
        >  
          {speakersData.map((speaker, index) => (
            <SwiperSlide
              key={index}
              className="!w-[22rem] !h-[32rem]  sm:w-[10rem] sm:h-[18rem] flex flex-col rounded-[2rem] justify-center
               items-center   mt-[20px] overflow-hidden  bg-[#253C44]  "
            >
              <img
                src={`/assets/speaker/${speaker.image}`}
                alt={speaker.name}
                className="!h-[25rem] w-full sm:h-[15] object-center rounded-[2rem] 
                             " 
              />
              <p className="text-center text-base font-bold mt-1">{speaker.name}</p>
              <p className="text-center text-base">{speaker.about}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

