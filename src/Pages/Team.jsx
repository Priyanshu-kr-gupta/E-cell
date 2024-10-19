import React from "react";
import data from "../Data/Team.json"
export default function Team() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#303633] text-white pt-10 ">
      <div className="">
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight pl-2 md:pl-6pl-2 lg:pl-10 md:pl-6">MEET</h1>
        <h1 className="text-[15vw] md:text-[10vw] sm:text-[12vw] font-bold font-serif leading-tight flex items-center pl-2 lg:pl-10 md:pl-6">THE TEAM <div className="animate-ping text-[10vw] md:text-[8vw] sm:text-[6vw] lg:text-[6vw] pl-1">|</div></h1>
      </div>


<div className="mx-auto max-w-7xl px-4">
  <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-10">
    <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">John Doe</h2>
        <p className="text-sm text-gray-600">Software Engineer</p>
      </div>
      <div className="flex justify-center">
        <img src="(link unavailable)" className="w-20 h-20 rounded-full" />
      </div>
    </div>
    <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">Jane Smith</h2>
        <p className="text-sm text-gray-600">Marketing Manager</p>
      </div>
      <div className="flex justify-center">
        <img src="(link unavailable)" className="w-20 h-20 rounded-full" />
      </div>
    </div>
    <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">Bob Johnson</h2>
        <p className="text-sm text-gray-600">Sales Representative</p>
      </div>
      <div className="flex justify-center">
        <img src="(link unavailable)" className="w-20 h-20 rounded-full" />
      </div>
    </div>
    <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">Alice Williams</h2>
        <p className="text-sm text-gray-600">Graphic Designer</p>
      </div>
      <div className="flex justify-center">
        <img src="(link unavailable)" className="w-20 h-20 rounded-full" />
      </div>
    </div>
    <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">Mike Davis</h2>
        <p className="text-sm text-gray-600">Customer Support</p>
      </div>
      <div className="flex justify-center">
        <img src="(link unavailable)" className="w-20 h-20 rounded-full" />
      </div>
    </div>
    <div className="bg-white w-full h-48 md:h-60 lg:h-72 rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">Emily Chen</h2>
        <p className="text-sm text-gray-600">Data Analyst</p>
      </div>
      <div className="flex justify-center">
        <img src="(link unavailable)" className="w-20 h-20 rounded-full" />
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
