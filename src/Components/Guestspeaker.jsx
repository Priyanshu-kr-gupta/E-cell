import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import '../Css/Guestspeaker.css'




import slide_image_1 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_2 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_3 from '../../public/assets/speaker/dummyimage.jpg';
import slide_image_4 from  '../../public/assets/speaker/dummyimage.jpg';
import slide_image_5 from  '../../public/assets/speaker/dummyimage.jpg';
import slide_image_6 from  '../../public/assets/speaker/dummyimage.jpg';
import slide_image_7 from  '../../public/assets/speaker/dummyimage.jpg';
import slide_image_8 from  '../../public/assets/speaker/dummyimage.jpg';




export default function Guestspeaker() {
  return (
    <div className="container">

      <h1 className="heading">
        Guest-Speakers
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
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-1
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-2
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-3
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-4
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-5
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-6
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-7
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
          <h3 className="nameofSpeaker">
            Lorem ipsum-8
          </h3>
          <p className="aboutofSpeaker" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>

    </div>

