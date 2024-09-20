import React from 'react'
import "../Css/ThanksGallery.css"
export default function ThanksGallery() {
  return (
    <>
    <div className='w-full bg-zinc-900 h-[30vh] flex justify-center items-center white '>

    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Special Thanks</p>
    </div>
    <div className=' bg-zinc-900  gallery'>
        <div className="img img-1 ">1</div>
        <div className="img img-2 ">2</div>
        <div className="img img-3 ">3</div>
        <div className="img img-4 ">4</div>
        <div className="img img-5 ">5</div>
        <div className="img img-6 ">6</div>

    </div>
    </>
  )
}
