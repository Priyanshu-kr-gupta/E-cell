// import React from 'react'

// export default function Guestspeaker() {
//   return (
//     <div className='w-full h-screen bg-[#202729] flex justify-center items-center flex-col text-white'>
//       <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-[10vh]">Guest Speakers</p>

//     <div>

//       {/* no see all button will be there create a slider which will show all the cards */}
//       {/* remove this div  -> create a container for the cards ->  create a card name GuestspeakerCard.jsx -> use Data/guestspeaker.json file*/}
//       <div className='w-[300px] h-[300px] bg-[#253C44]'></div>

//     </div>

//       </div>
//   )
// }

// import React from 'react';
// import { Carousel } from 'react-responsive-3d-carousel';

// export default function Guestspeaker() {
//   return (
//     <div className='w-full h-screen bg-[#202729] flex justify-center items-center flex-col text-white'>
//       <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-[10vh]">Guest Speakers</p>
//       <div className='w-full flex justify-center items-center'>
//         <Carousel>
//           {/* You can add multiple cards, here's one sample */}
//           <div>

//               <img
//                 src="data:image/jpeg;base64,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"
//                 alt="sample-image"
//                 style={{
//                   width: '100%',
//                   height: '300px',
//                   objectFit: 'cover',
//                 }}
//               />
//               <p className=' text-white text-lg '>Dr. Ashok Mondal</p>

//           </div>
//           <div>
//             <a href="https://unsplash.com/">
//               <img
//                 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQCBwj/xAAzEAABBAEDAgUCBQQCAwAAAAABAAIDEQQFEiExQQYTIlFhMoEUQnGRoSOxwdEH8BUz4f/EABkBAAIDAQAAAAAAAAAAAAAAAAADAgQFAf/EACARAAMAAgMAAwEBAAAAAAAAAAABAgMREiExEyJRMgT/2gAMAwEAAhEDEQA/APuKIiACIiACIiACIiACLy5waCT0Wr8UwEgoA3ovLHhwBB6rJNIAyiIgAiIgAiIgAiIgAiIgAiIgAiLyXBosoA9LRlZMWLHvmeGj+So7M17Gx3mMAyPHYEKoZ3iNmqak6KMA7ONgNhJvNMobGKqLNNq34qxG3azoPVyvEbjf/t5+VF4LXS0D067R1Ug4NA2igQkLK32PeNLo78XMfE2QPHPZeBlyA3+bstUDSYvUbcDSw+QR9av9E35GkL4LZ2Ras1p2zfcjqpKGaOZu6N4cPhV90uPMKdRd/ZaWyuxJhJA4N92X1XVl/SLxfhakXFhahDkt5c1rx1B4XZ1Tk9+CmmvTKIi6cCIiACIiACIiAChfEOf+Gg8qJw81w/b9VMuuuDRVA8WxTHO9JLowPV7dLSc1OY2h2CVV6ZD5+SwRmnuJfzweXKK0WIuyZXNGwF4F/de5pg8uvt/Kzp8jBlQwx2SXAuPzfCzE9mk10WyXUGYGMfUGNqy7/aisTxHBk5JijlDyfZVPx5NqGex+LprHbYyC94NXxyB+4XP/AMd6JqH46Gc6fK2GNtTyvlJEhu7APTtwOFYUcp3sRy1XaPseMXFrXHqRZUfrEjo7LLt7uPhTsUDTGHB/ZUjx/qbtLhjayg6VwaxzuGtvuT2HufZMuHxSFxSdHZhyyscTQIHUg3S350pMZeKoi1QPDPjIT58mHlujIaSBJC7c1wv6mnix9lcs97m4ztu3cOvzY6j9Uipc9MctPtHGzVpGT1GS4hW7w3rP4kCOYUf7L57FERUznesHt8Ky6VJF50cjHbCf2KMWRqgy405PoIWVpxZPMhDluWoZjCIiACIiACIiAMFQfimDdpj2xj1OPJrlTq5NTh87Eey6NGio0tpolFcaTPhObO9uTI1rODwpXRo3Ny/OlPpiFubXeq/2ufNhjw9XmY+yIn0Nw5JUhgxuycuOVpMeLtJkdXUHjj5PQLI0+WjWbTWyw+GtOjbG7JcAHSndThzRVkiLMeIlo9I5ICiIZpWsaBGY29A0ckD5+VW/+RczIx9AkOFK8Sbh5hBLfTfuruN66KV7ZcotaxHzBrJGlvej3WdYwcPWsGTGnjZIx4P6g9ivzvj61mxuY5rHCZrvqjf9Pyvt+lTZztKxZ5WF0z4mmRvQ3XKnbc+kZX4VPVvBGPpOHJk4LD53e/y1/hS7HvforA6/MEYZ/PH+VN5uaZ8F7/qoG2/m+/z/AHVfyZmDHhLmhm5oFO6D2v25VPLXZbxro5939Ljjjn4KkdF3STMjouYeLHUfKhy9zZix7SA7kDratXhHG35EOQCC2y1w+SK/3+yVhnlaQ3K1MNl2wWbYRxR7rpWGihQWVtGO+wiIg4EREAEREAFhxABJ6LK1TjdG4VZrogD4x4s8n/zOQ5llpeSd/Vx7lbNE1sGKeFoafLLPLDq57Lt8Z6aI8gvJ9R6qnTMl0/Jjyo/oHUdis2lq2acvcIuE2puxmmbIeXOq6vj7Ks6v4zwshssOSwzMawh0beQ4+3/fZYY5+oyb5iRubRAWdI8NRDMzzkQ00yAsvu2hz/JTcfoKOT0Qfhp+gS6j5kwk4PoZKeGnr/C+sYmsY8sI8t3o+Py/P6Kl5PhXFMEj8ZgbIA6j7LhxIsjS2xtheXNYAHA83wB/hdys48PD0vOfMHncHmM3xI08H4P+1CnIjmy3xvFuYynNv35UW3VZ6eC07Xt2gg8WuKODJEzsh0vrd9Vd1UyTsbHRZMZrIm1u3tv09yAvovhTCZDhiVotsgB6d1810bGfK4GyT1X1Xw610eC1h+nt8J3+OftsT/rv66RLIiLRM4IiIAIiIAIiIALj1LLbiwFxNErrJAFk0qd4jzHzSOAcdregHRQuuK2Txzyeiv6w52blPeSXE9yoLJ0qR0Lo5D6LuypeCfbkEO6Ed10TMGQ+NhPoHNDus9vk9l9fXormk4ttPwSApiKYsLnBo2t9JBK5c+CSLJe6AkFzOa7LEMhGOWVR6k+6lLaOqtPaJETboyxjQA7qfhcM+mNlJJNX/C6cUW76TZC7sXFsOD932XabfoVk5PsgsXQw3JuT1D8rR7qR/AB0pibADX1UpvDga243D1VYPuF72bJw9zRVVuaUlxtnVZrxcGOCD0NINcq06CT+Ho8g8gqByMgNaADd9Cpvw49pxNt830VvBpVpFXNtz2TCIitlUIiIAIiIAIiwgDDgHCiAbVR8WPhi2wwtaHclxHVWjOyWYuO6WQ0AFQs5xy3Peb5KRmrU6HYZ72Q0kLiDJXFqU02NjeSbf0v5XKyw0xuHe124jDE9+0Em+CqCfZdfhsnw2tb6xue93J/krndpgbF9PJA/dS+KfOawkcglv/1dgh3uBrirA9lYlchDbTIfHwtlEiiOqk/wn9NzmdQLC6xi2OQtscJDdldUxQQdbIzIidHjwzsHr6mv2XG/KfK0ggEfHZTUjSyLy63VzRNKJka0SUxu0/mafb3+UnItMbDI0GTfwSWexVm8NnbLts9FGMiZ9XHK79Ie2PMaHGgePuu4OqOZu0WgIsBZV8pBERABERABa55WQxl8jqAXqR4Y0uPQKoeI9Z3NLIun91G6UrZOIdPRw+IdaOXl+Sxx8q6r3XJA7aCCVX35hGWOxJ9lP4gY+ub9/YLPdu3svOVK6Ok4wlk47hdGPCY/SeSt0Oxh5546rcA1wc9huq4H60pLGQdmvGidE+2ng8/dSsTeL91xOptkG6PPwpDGc2WMPabCdE6F29nRG22rG2itrKDVqkeGk2U0UjxNE2Rg3duiic3Cvlt2AVLscHhoHcWtT6LXAUUu4TJzWitwtkjbsceWmltgl2y3fQrqzow2Q9iRyuKqc3+VXS4sfvZeMd2+FjvcBbFxaQXHCYXfZdq0F4UX6ERF04FgrK8Su2RucTVAlAFd8TaqYWnHiPPR3CpWfOXtAs2pPVMk5GU97jdu5UBqLiyyB6fdZufI6Zo4YUohs6Qxyb76FWHwzqBnx3f06a09T3VZzngjnlTfhqTzcVm0VtJtLkZRZJJZ2x7o3entx1XHi6jJizyOn3ObQIXaXb42RsN0VxS4xIdfPNqTprwipTXZJQ6pFkSSlm4bmnhw7qW0uZsULWO6BVFu2AAm+XFT2JlRvDTzdJ2O9+iskJLosf4htA3Sj9Qzo2P9Tqa0Au+VyOyRHIygoXPyhPJILFueG18Jl5NIXEbZLy68GPDImD6V7Gc5rKj5c7myoiJoeHACngELzGckTNLq23+wSPlY745JIySOBdKCfel4x2PnymRAfWatezN6TfC6NEaX6nGQDQ5J9l2VtojXS2WyFgijaxvRopbFgLK0CiEREAFw604s0zIc00dpWUUa8Z2fT5aZ3iV3IP6rZksa6CyB06dkRZbNRFR1hoiLtl9F1+D55DjzAu4Y7hEXZOUXnC+kCh1XrNAbHx3CIhkV6Ree0eWT7LRoWTK/IDXOsWiIn0lXhYsslsJePqHRVeHmeRxJJ3OP8rCKeQhiLBjcQtcOp6/upAMaYmkjmkRLJHLNw4gLt0GRzcw7T0A+6In4v6F5P5Li02FlEV8oBERAH//Z"
//                 alt="sample-image"
//                 style={{
//                   width: '100%',
//                   height: '300px',
//                   objectFit: 'cover',
//                 }}
//               />
//             </a>
//           </div>
//           <div>
//             <a href="https://unsplash.com/">
//               <img
//                 src="data:image/jpeg;base64,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"
//                 alt="sample-image"
//                 style={{
//                   width: '100%',
//                   height: '300px',
//                   objectFit: 'cover',
//                 }}
//               />
//             </a>
//           </div>
//           <div>
//             <a href="https://unsplash.com/">
//               <img
//                 src="data:image/jpeg;base64,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"
//                 alt="sample-image"
//                 style={{
//                   width: '100%',
//                   height: '300px',
//                   objectFit: 'cover',
//                 }}
//               />
//             </a>
//           </div>
//           {/* Add more items as needed */}
//         </Carousel>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "../Css/Carousel.css"; // Importing the CSS for styling
import slides from '../Data/guestspeaker.json'
console.log(slides)

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#202729]  text-white ">
      <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mt-10">
        Guest Speakers
      </p>
      <div className="carousel-container ">
        <div className="carousel ">
          {slides.map((slide, index) => {
            let className = "carousel-item rounded-lg";
            if (index === currentIndex) {
              className += " active"; // Center slide
            } else if (
              index ===
              (currentIndex - 1 + slides.length) % slides.length
            ) {
              className += " prev"; // Left slide
            } else if (index === (currentIndex + 1+ slides.length) % slides.length) {
              className += " next"; // Right slide
            }
            return (
              <div
                key={index}
                className={className}
                style={{ backgroundImage: `url(/assets/speaker/${slides[index].image}` }}
              >
                
                <div className="carousel-content">
                  <h2 className="carousel-name">{slide.name}</h2>
                  {/* <p className="carousel-intro">{slide.intro.substring(0, 60)}...</p> */}
                </div>
              </div>
            );
          })}
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
