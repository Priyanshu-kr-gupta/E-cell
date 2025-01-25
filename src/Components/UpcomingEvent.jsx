import { useState, useEffect } from "react";
import "../Css/UpcomingEvent.css";

export default function UpcomingEvent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/public/get-upcoming-events`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentPage: page }),
        }
      );
      if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();
      setUpcomingEvent(data.upcomingEvents);
      setTotalPages(data.totalPages);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  useEffect(() => {
    let sliderInterval;
    if (!isHovered && !loading && upcomingEvent.length > 1) {
      sliderInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingEvent.length);
      }, 3000);
    }
    return () => clearInterval(sliderInterval);
  }, [isHovered, loading, upcomingEvent]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#253C44] text-white">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
     <div className='w-full h-screen bg-[#1C2833] flex justify-between items-center text-white flex-col'>
      <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold m-5">Upcoming events</p>
      {/* Main Event Card */}
      <div
        className="flex flex-col items-center w-full px-4 py-4 sm:flex-row sm:items-start sm:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            backgroundImage: `url(${upcomingEvent[currentIndex]?.banner})`,
          }}
          className="w-full h-60 bg-cover bg-center rounded-lg shadow-lg sm:w-1/2 sm:h-80"
        ></div>
        <div className="mt-5 sm:ml-8 sm:mt-0 sm:w-1/2">
          <h2 className="text-2xl font-bold">{upcomingEvent[currentIndex]?.name}</h2>
          <p className="text-gray-300 text-sm mt-3">{upcomingEvent[currentIndex]?.intro}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className="flex overflow-x-auto mt-6 px-4 sm:justify-center">
        {upcomingEvent.map((event, index) => (
          <div
            key={index}
            className={`w-20 h-20 mx-2 flex-shrink-0 rounded-lg overflow-hidden ${
              currentIndex === index ? "border-2 border-blue-500" : "border border-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={event.banner}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 mb-6 space-x-2">
        {Array(totalPages)
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
