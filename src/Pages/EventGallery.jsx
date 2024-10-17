import React from 'react'
import { useParams } from 'react-router-dom';
import data from "../Data/pastevent.json";
import { Link } from 'react-router-dom';

export default function EventGallery() {
  const { index } = useParams();
  return (
    <>
    <div className='w-full bg-[#303633]'>
    <div className='bg-[#2f4f4f] text-white flex items-center justify-around flex-col h-full'>
          <p className='block text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold p-10'>{data[index].name}</p>

    </div>
    <div className='conatiner p-2'>
    <img src={"/assets/event/"+data[index].banner} alt="" className='w-full h-full object-contain  max-h-[600px]'/>
    <p className='text-white'>{data[index].description}</p>
    </div>
    <div className='w-full bg-[#303633] flex flex-wrap gap-10 justify-center p-10 '>
      
    {data[index].gallery.map((info, index) => (
        <div key={index} className='relative'>
            <img 
              src={`/assets/event/${info}`} 
              alt="notfound" 
              className=' w-[300px] h-[300px] object-cover flex-shrink-0  bg-zinc-950 cursor-pointer'     
              />
            
          </div>
        ))}
    </div>
    </div>
    </>

  )
}
