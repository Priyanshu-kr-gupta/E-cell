import React from 'react'
import "../Css/ThanksGallery.css"
import imgpath from "/assets/speaker/dummyimage.jpg"
export default function ThanksGallery() {
  return (
    <>
    <div className='w-full bg-zinc-900 h-auto gap-10 pt-10 pb-10 flex justify-center items-center white flex-col'>

    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Special Thanks</p>
    <p className="text-center text-white text-base md:text-xl tracking-wide font-medium mb-10 mx-5 lg:mx-0 bg-zinc-900 ">
    Team E-Cell extends our heartfelt gratitude for your unwavering support and guidance in making our event, Business Conclave 2023, a resounding success.
          </p>
    </div>
    <div className=' bg-zinc-900  gallery'>
      
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>Dr. Ashok Mandal</p>
      </div>
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>Dr. Ranjit Prasad</p>
      </div>
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>Dr. Ram Krishna</p>
      </div>
      <div className='thanksCard'>
        <img src={imgpath} alt="Profile Picture" className="profile-pic" />
        <p className='text-white text-[18px] font-semibold font-sans'>Dr. Kanika Prasad</p>
      </div>
    
      
    </div>
    
    </>
  )
}
