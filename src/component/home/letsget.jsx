import React from "react";
import { LongCard } from "../../lib/DV/note";
import { useNavigate } from "react-router-dom";

export const LetsGet = () => {

    let Navigate = useNavigate();
    const handleClick = () =>{
      Navigate("/DesCribe")
    }

    return (
        <section className="flex flex-col justify-center items-center text-center px-4">
            {/* Title  Description */}
            <div className="flex flex-col justify-center items-center pt-6 space-y-3">
                <h1 className="font-bold w-full max-w-[613px] text-[24px] md:text-[32px] text-[#09090B]">
                    Let’s get started
                </h1>
                <p className="text-[12px] md:text-[14px] text-[#71717A] font-semibold">
                    Lorem ipsum dolor sit general sac mascho ipsum dolar sit <br />
                    general sac mascho werhoLorem ipsum dolar sit gene
                </p>
                <img 
                    src="/kati.png" 
                    alt="Illustration" 
                    className="pt-4 hidden md:block mx-auto w-full max-w-[300px] md:max-w-none"
                />
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center pt-5 w-full max-w-4xl">
                {LongCard.map(({ img, title, p }, i) => (
                    <div 
                        key={i} 
                        className="w-full max-w-[235px] h-[270px] border rounded-xl px-4 py-5 bg-[#F4F4F5] hover:bg-pink-200 transition duration-200 flex flex-col justify-center items-center text-center"
                    >
                        <img src={img} className="mb-2 w-[50px] md:w-[60px]" alt={title} />
                        <h5 className="font-bold text-[16px] md:text-[20px] text-[#09090B]">{title}</h5>
                        <p className="text-[#71717A] text-[12px] md:text-[14px]">{p}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button  */}
            <div className="flex justify-center items-center pt-10 md:pt-16 pb-10">
                <a href="#">
                    <button onClick={handleClick} className="bg-[#F26922] px-6 py-3 text-white text-[14px] rounded-md shadow-md hover:bg-orange-600 transition">
                        Get Started
                    </button>
                </a>
            </div>
        </section>
    );
};
