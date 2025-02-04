import React from "react";
import { Hero } from "./Hero";

 export const Dashboard = () => {
  return (
    <div className="w-full  bg-gray-200 p-6">
    
      <div className="flex flex-wrap justify-between items-center">
        {/* Welcome Section */}
        <div>
          <p className="text-gray-500">Welcome back</p>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Action Buttons*/}
        <div className=" relative mt-4 flex gap-4 md:flex">
        <img src="/search.svg" alt="" className="absolute top-3 left-3" />
            <input
              type="text"
              placeholder=" Search incident"
              className="px-2 py-2 pl-8 pr-2 border rounded-md shadow-sm w-60 "
            />
          <button className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-100 transition hidden md:block">
            Sort By: Date modified
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition">
            Cypher AI
          </button>
        </div>
        <Hero></Hero>
      </div>
    </div>

    
  );
};


