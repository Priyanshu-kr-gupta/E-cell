import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };
  

  return (
    <div className={` transition-all ease-in-out duration-700 ${menuOpen ? ' h-screen  ' : ''}`}>
    
      {/* Menu Icon */}
      <div
        className={`menu-icon cursor-pointer p-4 fixed z-20 right-1 top-1 space-y-2 ${!menuOpen?"bg-[rgba(255,255,255,0.8)]":"bg-black"}`}
        
        onClick={toggleMenu}
       style={{borderBottomLeftRadius:"50%"}}>
        <span
          className={`block h-1  mb-1 transition-transform ease-in-out duration-200   ${
            menuOpen ? 'transform rotate-45 translate-y-2 w-8 bg-white' : 'w-5 bg-slate-800'
          }`}
        ></span>
        <span
          className={`block h-1 w-8 mb-1 transition-transform ease-in-out duration-200 bg-slate-800 font-bold ${
            menuOpen ? 'opacity-0 ' : ''
          }`}
        ></span>
        <span
          className={`block h-1  mb-1 transition-transform ease-in-out duration-200 bg-slate-800 ${
            menuOpen ? 'transform -rotate-45 w-8 -translate-y-2  bg-white' : 'w-5 bg-slate-800'
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
          <ul className="nav__list text-black text-3xl md:text-4xl lg:text-5xl font-light space-y-10 md:space-y-0 md:flex md:space-x-7 lg:space-x-10 tracking-wider">
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600 cursor-pointer"
            onClick={toggleMenu}>
              <Link to={"/"}>Home</Link>
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600 cursor-pointer"
            onClick={toggleMenu}>
              <Link to={"/Events"}>Events</Link>
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600 cursor-pointer"
            onClick={toggleMenu}>
              <Link to={"/Team"}>Team</Link>
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600 cursor-pointer"
            onClick={toggleMenu}>
              <Link to={"/About"}>About</Link>
              <span className="block w-0 group-hover:w-full h-1 bg-black transition-all duration-500 ease-in-out"></span>
            </li>
            <li className="group nav__list-item transition-all ease-in-out duration-700 hover:text-gray-600 cursor-pointer"
            onClick={toggleMenu}>
              <Link to={"/Contact"}
              >Contact</Link>
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
