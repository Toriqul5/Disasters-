import React from "react";
import { useNavigate } from "react-router-dom";

export const LetsGive = ()=>{
  let Navigate = useNavigate();
  const handleClick = () =>{
    Navigate("/Map")
  }

   let Navigate2 = useNavigate();
    const handleClick2 = () =>{
      Navigate2("/Describe")
    }




    return(
        <section>
            <div>
                {/* incident section */}
             <div className="bg-[#F4F4F5] pt-4 pb-4 pl-6 pr-6">
                {/* Dashboard part */}
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                        <img src="/coros.png" alt="" className="w-[41px] h-[41px]" />
                        <div>
                            <p className="text-[12px] text-[#71717A]">Home - Incidents - New Incident</p>
                            <h2 className="md:text-[26px] text-[18px] font-bold text-[#030712]">New Incident</h2>
                        </div>
                    </div>
                     <div className="md:flex hidden justify-center items-center">
                        <img src="/scroll.png" alt="" className="" />
                     </div> 
                      <div className="flex justify-end items-end gap-2">
                        <button className="bg-[#FAFAFA] px-[25px] py-[8px] flex text-[12px] rounded-sm text-[#71717A] border-[1px]" onClick={handleClick2}>Back</button>
                        <a href="#">
                            <button className="bg-[#F26922] px-[25px] py-[8px] flex text-[12px] rounded-sm text-white" onClick={handleClick}>Next step</button>
                        </a>
                      </div>
                    </div>
                </div>

               {/* faq section */}

              <div className="   gap-y-2 pt-6 pb-32">
                <div className=" flex flex-col justify-center items-center">
                  <h4 className="text-[#09090B] md:text-[24px] text-[16px] font-bold md:pr-28  pr-18">Let’s give the incident a title?</h4>
                  <p className="md:text-[14px] text-[10px]  text-[#71717A] pt-2 pb-2 md:pr-36 pr-18">Make a title that will easily identify the incidents</p>
                  <div className="">
                  <input type="text" placeholder="Add title here"  className=" bg-[#F4F4F5] 
                  text-[12px] rounded-sm border-[1px] md:w-[452px] w-[290px]  h-[50px] px-[12px] py-[10px] "/>
                  </div>
                  <h4 className="text-[#09090B] pl-12 pt-4  md:text-[24px] text-[16px] font-bold">Describe what happened during the incident?</h4>
                  <p className="md:text-[14px] text-[10px] md:pr-10  text-[#71717A] pt-2 pb-2">Share some information about the incident. The when, where, how. </p>
                  <div className="">
                  <input type="text" placeholder="Type here"  className=" bg-[#F4F4F5] 
                  text-[12px] rounded-sm border-[1px] md:w-[452px] w-[290px] h-[50px] px-[20px] py-[20px]"/>
                  </div>
                </div>
                
                
              </div>

            </div>
        </section>
    )
}