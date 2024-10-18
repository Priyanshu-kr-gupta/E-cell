import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_2 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_3 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_4 from  '../../public/assets/speaker/dummyimage.jpg';
import slide_image_5 from  '../../public/assets/speaker/dummyimage.jpg';
import slide_image_6 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_7 from  '../../public/assets/speaker/dummyimage.jpg';

export default function Guestspeaker() {
  return (
    <div className="max-w-[124rem] bg-[#202729] mx-auto">

      <h1 className="text-white text-3xl text-center mb-8">
        Our - Speakers
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative h-[48.5rem] py-4"
      >
        {[slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7].map((image, index) => (
          <SwiperSlide key={index} className="flex flex-col justify-center items-center bg-[#253C44] rounded-2xl shadow-lg w-[30rem] h-[41rem]">
            <img src={image} alt={`slide_image_${index + 1}`} className="w-[30rem] h-[35rem] mt-[-3rem] rounded-2xl object-cover" />
            <h3 className="text-white pt-4">Lorem ipsum-{index + 1}</h3>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </SwiperSlide>
        ))}

        <div className="slider-controler flex justify-center items-center relative bottom-8">
          <div className="swiper-button-prev bg-white w-14 h-14 rounded-full shadow-md flex justify-center items-center cursor-pointer">
            <ion-icon name="arrow-back-outline" className="text-2xl text-[#222224]"></ion-icon>
          </div>
          <div className="swiper-button-next bg-white w-14 h-14 rounded-full shadow-md flex justify-center items-center cursor-pointer">
            <ion-icon name="arrow-forward-outline" className="text-2xl text-[#222224]"></ion-icon>
          </div>
          <div className="swiper-pagination w-[15rem]"></div>
        </div>
      </Swiper>

    </div>
  );
}
