import React from "react";
import { ReactCard } from "../../lib/DV/note";

export const Location = () => {
  return (
    <section className="w-full">
      {/* Dashboard Section */}
      <div className="bg-gray-200 p-4 md:p-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Title  */}
          <div>
            <p className="text-gray-500 md:text-sm text-[14px]">Incidents - DR-4699 March 2023 Severe Storms</p>
            <div className="flex items-center gap-2">
              <img src="/loca.png" alt="Location" className="w-6 h-6" />
              <h1 className="md:text-2xl text-lg font-bold">DR-4699 March 2023 Severe Storms</h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 relative  gap-x-2 md:flex hidden">
            <img src="/search.svg" alt="" className="absolute top-3 left-3" />
            <input
              type="text"
              placeholder=" Search incident"
              className="px-2 py-2 pl-8 pr-2 border rounded-md shadow-sm w-60 "
            />
            <button className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-100 transition">
              Sort By: Date modified
            </button>
            <a href="#">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition">
                + New Incident
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-6 p-4">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-2/3 space-y-6">
          {/* Location  */}
          <div className="flex items-center gap-2">
            <img src="/location.png" alt="Location" className="w-6 h-6" />
            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <h3 className="text-black text-[12px] md:text-xl font-bold">
                Tulare County, Los Angeles, CA 23415
              </h3>
            </div>
          </div>

          {/* Cost Info */}
          <div className="flex items-center gap-2">
            <img src="/location1.png" alt="Cost" className="w-6 h-6" />
            <div>
              <p className="text-gray-500 text-sm">Approx. Cost:</p>
              <h3 className="text-black md:text-lg text-[12px] font-bold">$60,607,456.00</h3>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-b py-4">
            <h5 className="text-black font-bold text-lg">Description</h5>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo lobortis eget.
            </p>
          </div>

          {/* Image Cards */}
          <h5 className="text-black font-bold text-lg">Images</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ReactCard.map(({ img, h5, p, h6 }, i) => (
              <div key={i} className="w-full bg-white p-2 shadow hover:bg-slate-200  rounded-md">
                <img src={img} alt={h5} className="w-full h-auto rounded-md" />
                <h5 className="text-black font-bold">{h5}</h5>
                <p className="text-gray-500 text-sm">{p}</p>
                <h6 className="text-black font-bold text-sm">{h6}</h6>
              </div>
            ))}
          </div>

          {/* Activities Section */}
          <div className="border-t border-b border-[#E4E4E7] py-4">
            <div className="flex justify-between items-center">
              <p className="text-black font-semibold">Activities</p>
              <p className="border-b border-black text-sm cursor-pointer">See all</p>
            </div>

            <div className="space-y-3">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-3 bg-gray-100 p-3 rounded-md">
                  <img src="/react1.png" alt="Activity" className="w-20 h-20 rounded-md" />
                  <div>
                    <h5 className="text-black font-semibold">Activity Name</h5>
                    <p className="text-gray-500 text-sm">16.12212, -122.1424</p>
                    <h4 className="text-black font-semibold text-lg">$1,456,654.00</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Section */}
          <div className=" py-4">
            <div className="flex justify-between items-center">
              <p className="text-black font-semibold">Documents</p>
              <p className="border-b border-black text-sm cursor-pointer">See all</p>
            </div>

            <div className="space-y-3">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-3 bg-gray-100 p-3 rounded-md">
                  <img src="/react1.png" alt="Document" className="w-20 h-20 rounded-md" />
                  <div>
                    <h5 className="text-black font-semibold">Document Name</h5>
                    <p className="text-gray-500 text-sm">16.12212, -122.1424</p>
                    <h4 className="text-black font-semibold text-lg">$1,456,654.00</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section  */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <p className="text-gray-500 text-sm">Incident Map</p>
          <img src="/last.png" alt="Map" className="w-full h-auto rounded-md" />
          <p className="text-gray-500 text-sm mt-2">
            Start 19.1232, -118.233 | End 19.3245, -119.2323
          </p>
        </div>
      </div>
    </section>
  );
};
