import React from "react";
export const NewIncident=()=>{
    return(
        <section>
             <div className="bg-[#F4F4F5] pt-4 pb-4 pl-6 pr-6 ">
                {/* Dashboard part */}
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <img src="/coros.png" alt="" className="w-[41px] h-[41px]" />
                        <div>
                            <p className="text-[12px] text-[#71717A]">Home - Incidents - New Incident</p>
                            <h2 className="text-[26px] font-bold text-[#030712]">New Incident</h2>
                        </div>
                    </div>
                    <div className="md:flex hidden justify-center items-center ">
                        <img src="/scroll.png" alt="" className="" />
                    </div> 
                    <div className="flex justify-end items-end gap-2">
                        <button className="bg-[#FAFAFA] px-[25px] py-[8px] flex text-[12px] rounded-sm text-[#71717A] border-[1px]">Back</button>
                        <a href="#">
                            <button className="bg-[#F26922] px-[25px] py-[8px] flex text-[12px] rounded-sm text-white">Next step</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}