import { useState } from "react";
import { NavLink } from "react-router-dom";

export const  Navbar=()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#E4E4E780] border-b-2 border-[#E4E4E7]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <a href="#" className="text-orange-600 font-bold text-xl flex items-center">
          <img src="/logo.png" alt="Disasters.io" className="h-6 w-auto pr-2" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><NavLink to="/" className="nav">Dashboard</NavLink></li>
          <li><NavLink to="/Incidents" className="nav">Incidents</NavLink></li>
          <li><NavLink to="/Location" className="nav">Location</NavLink></li>
          <li><a href="#" className="nav">Activities</a></li>
          <li><a href="#" className="nav">Documents</a></li>
          <li><a href="#" className="nav">Cypher AI</a></li>
        </ul>

        {/* Profile & Notifications */}
        <div className="hidden md:flex items-center space-x-4">

          <div className="relative">
            <img src="pop.png" alt="" />
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <img src="man.png" alt="Profile" className="w-8 h-8 rounded-full border" />
            <div className="text-sm">
              <p className="font-semibold text-gray-700">Usman Zafar</p>
              <p className="text-gray-500 text-xs">usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-gray-600 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-white w-full shadow-md`}>
        <ul className="flex flex-col space-y-3 p-4">
          <li><NavLink to="/" className="nav">Dashboard</NavLink></li>
          <li><NavLink to="/Incidents" className="nav">Incidents</NavLink></li>
          <li><NavLink to="/Location" className="nav">Location</NavLink></li>
          <li><a href="#" className="nav">Activities</a></li>
          <li><a href="#" className="nav">Documents</a></li>
          <li><a href="#" className="nav">Cypher AI</a></li>
        </ul>

        {/* Mobile Profile */}
        <div className="p-4 flex items-center space-x-2 border-t">
          <img src="man.png" alt="Profile" className="w-8 h-8 rounded-full border" />
          <div className="text-sm">
            <p className="font-semibold text-gray-700">Usman Zafar</p>
            <p className="text-gray-500 text-xs">usmanzafar@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
