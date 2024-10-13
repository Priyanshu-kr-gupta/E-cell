import React from 'react'
import data from '..//Data/pastevent.json';
import PastEventCard from './PastEventsCard';
export default function PastEvents() {
  return (
   // <div className="w-full h-screen bg-[#202729] flex justify-center items-center flex-col text-white">
     // <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-[10vh]">
       // Past events
     // </p>

    //  <div>
        // no see all button will be there create a slider which will show all the cards */}
        // remove this div  -> create a container for the cards  -> create a card name PastEventsCard.jsx -> use Data/pastevents.json file
  //  <div className="w-[300px] h-[300px] bg-[#253C44]"></div>
     <div>
    <PastEventCard cardData={data} />
       </div>
      //</div>
    //</div>
  )
}
