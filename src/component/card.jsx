import React, { useState } from "react";

export const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="fixed bottom-5 right-5 hidden md:flex">
            {!isOpen && (
                <button 
                    className="bg-[#F26922] text-white p-2 rounded-4xl shadow-lg cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <img src="/Chat.png" alt="" className="w-[70px] h-[70px]"/>
                </button>
            )}
            {isOpen && (
                <div className="w-[331px] h-[475px] rounded-3xl gap-[27px] bg-[#F4F4F5] p-4 relative shadow-lg">
                    <button 
                        className="absolute top-2 right-2 text-black bg-black rounded-sm p-2 px-2 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                       ✖
                    </button>
                    <p className="bg-[#F26922] text-white text-[18px] py-[15px] px-[15px] rounded-t-2xl">Chat with Cypher</p>
                    <p className="text-[#FFFFFF] py-[10px] px-[13px] bg-[#3F3F46] w-[213px] text-[12px] h-[57px] mt-3 rounded-xl ml-auto">Lorem ipsum dolar sit general sac mascho werho</p>
                    <p className="text-[#71717A] border-[1px] py-[15px] px-[13px] w-[213px] text-[12px] h-[57px] mt-3 rounded-xl">Lorem ipsum dolar sit general sac mascho werho</p>
                    <p className="text-[#71717A] border-[1px] py-[15px] px-[13px] w-[213px] text-[12px] h-[57px] mt-3 rounded-xl">Lorem ipsum dolar sit general sac mascho werho</p>
                    <p className="text-[#FFFFFF] py-[10px] px-[13px] bg-[#3F3F46] w-[213px] text-[12px] h-[57px] mt-3 rounded-xl ml-auto">Lorem ipsum dolar sit general sac mascho werho</p>
                    <input type="text" placeholder="Enter your question..." className="w-full h-[42px] border-[1px] text-[12px] text-[#71717A] rounded-sm mt-3 py-[12px] px-[10px]" />
                    <div className="flex justify-between items-center w-full h-[30px] mt-3">
                        <div className="flex gap-2">
                            <img src="/camera.png" alt="camera" className="w-6 h-6" />
                            <img src="/gallary.png" alt="gallery" className="w-6 h-6" />
                            <img src="/file.png" alt="file" className="w-6 h-6" />
                        </div>
                        <button className="bg-[#F26922] text-[12px] cursor-pointer rounded-full py-[8px] px-[20px] text-white">Send</button>
                    </div>
                </div>
            )}
        </section>
    );
};
