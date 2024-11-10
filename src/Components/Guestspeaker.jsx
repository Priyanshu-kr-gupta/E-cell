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
    <div className="w-full h-screen bg-[#202729] flex flex-col justify-center  items-center text-white">
      <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold m-5">
        Guest Speakers
      </p>
      <div className="relative w-full h-5/6 lg:h-4/5">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 !left-0 lg:!left-12 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full text-black hover:bg-white transition" id="prev-slide">
          <NavArrowLeft />
        </div>
        <div className="absolute top-1/2 !right-0 lg:!right-12 z-10 -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full text-black hover:bg-white transition" id="next-slide">
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
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper relative lg:w-[70%] w-full lg:h-full [&_.swiper-pagination-bullet-active]:bg-white"
        >
          {speakersData.map((speaker, index) => (
          <SwiperSlide
          key={index}
          className="!w-[18rem] !h-[25rem] md:w-[22rem] md:h-[30rem] lg:w-[28rem] lg:h-[35rem] flex flex-col rounded-[1rem] justify-center items-center mt-[20px] overflow-hidden bg-[#253C44] md:mt-[30px] lg:mt-[40px] shadow-lg transition-transform duration-200 hover:scale-105"
        >
          <img
            src={`/assets/speaker/${speaker.image}`}
            alt={speaker.name}
            className="p-3 !h-[60%] w-full object-cover object-top mb-4 rounded-t-[1rem] transition-transform duration-200 hover:scale-110"
          />
          <div className="flex flex-col items-center p-4">
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-1 text-white">
              {speaker.name}
            </p>
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
              {speaker.about}
            </p>
          </div>
        </SwiperSlide>
        
          ))}
        </Swiper>
      </div>
    </div>
  );
}


