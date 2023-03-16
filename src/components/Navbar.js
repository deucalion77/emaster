import React from 'react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon, 
}from "@heroicons/react/24/outline";
import Home from '../Home';
import Teach from '../teach';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
          <Bars3Icon className="h-6 w-6 md:hidden"/>
          <NavLink exact to="/"><h2 className="text-3xl font-bold">eMASTER</h2></NavLink>
          
          <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
            <MagnifyingGlassIcon className="h-5 w-5 mx-4 text-gray-400"/>
            <input type="text" placeholder="Search for Courses" className="bg-transparent text-sm outline-none"/>
          </form>
          <NavLink exact to="/"><h3 className="hidden text-sm md:block">Home</h3></NavLink>
          <NavLink exact to="Teach"><h3 className="hidden text-sm md:block">Teach with us</h3></NavLink>
          
          
          <h3 className="hidden text-sm lg:block md:hidden">Grade</h3>
          <div className="flex">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 md:hidden"/>
            <ShoppingCartIcon className="h-6 w-6 lg:block  sm:hidden"/>
          </div>
          <div className="hidden md:flex pr-4 space-x-4 justify-end ">
            <NavLink exact to="/login">
            <button className="border border-black h10 text-sm font-bold w-20 hover:bg-[#f5f5f5]">
              Log In
            </button>
            </NavLink>
            <NavLink exact to="/Register">
            <button className="border bg-black text-white border-black h10 text-sm font-bold w-20 ">
              Sing up
            </button>
            </NavLink>
          </div>
          
  </div>
    </div>
  
  );
  
}

export default Navbar