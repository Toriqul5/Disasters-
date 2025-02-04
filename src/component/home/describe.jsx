import React from "react";
import { ImgCard } from "../../lib/DV/note";
import { useNavigate } from "react-router-dom";

export const DesCribe = () => {

  let Navigate = useNavigate();
  const handleClick = () =>{
    Navigate("/LetsGive")
  }

  let Navigate2 = useNavigate();
  const handleClick2 = () =>{
    Navigate2("/LetsGet")
  }





  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      {/* Header Section */}
      <div className="bg-[#F4F4F5] pt-4 pb-4 px-6 w-full">
        {/* Dashboard part */}
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex gap-2 items-center">
            <img src="/coros.png" alt="" className="w-[41px] h-[41px]" />
            <div>
              <p className="md:text-[12px] text-[8px] text-[#71717A]">Home - Incidents - New Incident</p>
              <h2 className="md:text-[26px] text-[10px] font-bold text-[#030712]">New Incident</h2>
            </div>
          </div>
          <div className="md:flex hidden justify-center items-center">
            <img src="/scroll.png" alt="" />
          </div>
          <div className="flex justify-end items-end gap-2">
            <button className="bg-[#FAFAFA]  md:px-[25px] px-[15px] md:py-[8px] py-[6px] md:text-[12px] text-[9px] rounded-sm text-[#71717A] border" onClick={handleClick2}>Back</button>
            <a href="#">
              <button className="bg-[#F26922] md:px-[25px] px-[15px] md:py-[8px] py-[6px] md:text-[12px] text-[9px] rounded-sm text-white" onClick={handleClick}>Next step</button>
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="md:pl-7 pb-32 px-6 text-center max-w-4xl w-full">
        <div className="pt-10">
          <p className="md:text-[24px] text-[14px] text-[#09090B] font-semibold">
            Which of these best describes the incident?
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center pt-6 ">
          {ImgCard.map(({ img, p }, i) => (
            <div
              key={i}
              className="bg-[#F4F4F5] hover:bg-[#F26922]  p-4 w-[180px] h-[69px] border rounded-sm flex items-center gap-2 mx-auto"
            >
              <img src={img} alt={p} className="w-10 h-10" />
              <p className="text-[#71717A] hover:text-white text-[14px]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
