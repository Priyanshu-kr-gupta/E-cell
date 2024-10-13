import React from "react";
import Carousel from "react-elastic-carousel";
import "../Css/Pastevents.css";
export default function PastEventsCard({ cardData }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#202729" }}>
        <h1 className="heading">Past Events</h1>
        <Carousel enableAutoPlay autoPlaySpeed={6000} focusOnSelect={true}  breakPoints={breakPoints}>
          {cardData.map((element) => {
            return (
              <>
                <div className="container">
            
                <div className="card text-center">
                
                  <img
                    className="banner-img"
                    src={element.banner}
                    alt="image"
                    />
                  
                 
                  <div style={{ backgroundColor: "#253C44" }} className="cardbody">
                    <h3 className="heading-banner">{element.name}</h3>
                    <p className="banner-description">{element.description}</p>
                    
                    </div>
                    </div>
                  </div>
                
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
