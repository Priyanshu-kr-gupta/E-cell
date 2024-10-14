import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Css/Pastevents.css";
export default function PastEventsCard({ cardData }) {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 1 },
  //   { width: 700, itemsToShow: 2 },
  //   { width: 1200, itemsToShow: 3 },
  // ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 750, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div style={{ backgroundColor: "#202729" }}>
        <h1 className="heading">Past Events</h1>
        <Carousel
       
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          focusOnSelect={true}
          autoPlaySpeed={1000}
        >
          {cardData.map((element) => {
            return (
              <>
                <div className="container" key={element.name}>
                  <div className="card text-center">
                    <img
                      className="banner-img"
                      src={element.banner}
                      alt="image"
                    />

                    <div
                      style={{ backgroundColor: "#253C44" }}
                      className="cardbody"
                    >
                      <h3 className="heading-banner">{element.name}</h3>
                      <p className="banner-description">
                        {element.description}
                      </p>
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

