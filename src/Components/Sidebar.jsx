import React, { useState } from 'react'


export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className={` transition-all ease-in-out duration-700 ${menuOpen ? ' h-screen z-50 ' : ''}`}>
    
      {/* Menu Icon */}
      <div
        className="menu-icon cursor-pointer p-4 fixed z-20 right-12 top-8 space-y-2"
        onClick={toggleMenu}
      >
        <span
          className={`block h-1  mb-1 transition-transform ease-in-out duration-200    ${
            menuOpen ? 'transform rotate-45 translate-y-2 w-8 bg-black ' : 'w-5 bg-white'
          }`}
        ></span>
        <span
          className={`block h-1 w-8 mb-1 transition-transform ease-in-out duration-200 bg-white font-bold ${
            menuOpen ? 'opacity-0 ' : ''
          }`}
        ></span>
        <span
          className={`block h-1  mb-1 transition-transform ease-in-out duration-200  ${
            menuOpen ? 'transform -rotate-45 w-8 -translate-y-2 bg-black' : 'w-5 bg-white'
          }`}
        ></span>
      </div>

      {/* Navigation Menu */}
      <div
        className={`nav fixed inset-0 z-10 transition-all duration-700 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="nav__content flex justify-center items-center h-full text-center bg-white">
          <ul className="nav__list text-black text-3xl md:text-5xl lg:text-6xl font-light space-y-10 md:space-y-0 md:flex md:space-x-7 lg:space-x-10 tracking-wider">
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600">
              Home
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600">
              About
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600">
              Projects
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600">
              Contact
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      { <div className="site-content flex justify-center items-center">
        {/* /*<h1 className={`text-5xl text-white font-light transition-all ease-in duration-150 ${menuOpen?'invisible':'block'}`}>Another menu concept</h1>
        */ }
        
      </div> }
    </div>
  );
}
