import React from "react";
import { HeroCard } from "../lib/DV/note";
import { ChatBox } from "./card";
import { Dashboard } from "./dashboard";

export const Hero = () => {

  return (

    <section className="">
      {/* <Dashboard/> */}
      <div className="flex flex-wrap gap-x-[25px] justify-start items-center pt-9 gap-y-12">
        {HeroCard && HeroCard.map(({ img, title, des, rs }, i) => (
          <div key={i} className="pt-9">
            <img src={img} className="h-[253px] w-[280px]" alt={title} />
            <h5 className="font-bold">{title}</h5>
            <p className="text-xs">{des}</p>
            <p>{rs}</p>
          </div>
        ))}

         <ChatBox/>
      </div>
     

    </section>
  );
};
