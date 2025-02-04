import React from "react";
import { useNavigate } from "react-router-dom";

export const Map=()=>{
let Navigate = useNavigate();
    const handleClick = () =>{
      Navigate("/Location")
    }

let Navigate2 = useNavigate();
    const handleClick2 = () =>{
      Navigate2("/LetsGive")
    }    



    return(
        <section>
            {/* New incident section */}
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
                            <button className="bg-[#F26922] px-[25px] py-[8px] flex text-[12px] rounded-sm text-white" onClick={handleClick}>Finished</button>
                        </a>
                      </div>
                    </div>
                </div>

                {/* img section */}
                <div className="pt-6 pb-32 space-y-2 flex  flex-col justify-center items-center ">
                    <h4 className="font-bold text-[#000000]  text-[24px]">Where’s the incident?</h4>
                    <p className="md:text-14px text-[10px] text-[#71717A]  w-[518px] h-[32px] pb-12">Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
                    <img src="/Map.png" alt="" className="h-auto w-auto"/>
                </div>


        </section>
    )
}