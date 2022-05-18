import React from "react";
import { HiMenu,HiOutlineMenuAlt3,HiOutlinePhone, HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from "react";
import { images } from "../../Constant";
export default function Navbar() {
  const [showNav, setShowNav] = useState(false); // initiate isNavOpen state with false
const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
  return (
   <>
    <nav className=" flex w-full justify-between relative h-14  top-0 left-0 bg-white lg:bg-black">
    <div className="lg:pl-14 ">
    <div className="w-full relative flex  lg:w-auto lg:static lg:block justify-evenly lg:bg-navyellow bg-white px-3  mb-0 lg:rounded-b-lg">
    <div className="md:hidden flex bg-white">
          <HiOutlinePhone 
          className="md:hidden flex flex-end w-10 h-10 m-2 p-2 cursor-pointer text-white bg-lightyellow rounded-full "
          />
          <HiMenu
        onClick={() => setShowNav(!showNav)} id="toggle"
          className="md:hidden flex flex-end w-10 h-10  m-2 p-2 cursor-pointer text-white bg-lightyellow rounded-full "
          /> 
    </div>
   
    
     
        <span
        className=" hidden font-bold lg:inline-block mr-4 py-2 whitespace-nowrap  text-black cursor-pointer text-sm font-dana"
        >
        خرید از مارکت راست چین
        </span>
        
        <div className="flex float-left lg:hidden w-[200px] mr-3 p-3">
        <img src={images.moblogo} alt="logo" className="" />
      </div>
    </div>
      
    </div>
    
      
  


    <div className= {
      (showNav ? "flex" : "hidden") +""} >
  
<ul className= "relative  -right-0 z-10 flex lg:flex-row flex-col list-none lg:ml-auto bg-navyellow px-1 lg:rounded-b-lg font-dana text-black" >
  <li className="nav-item ">
    <a
      className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug text-black hover:text-white"
      href="#pablo"
    >
      <span className="ml-2"> تماس با ما</span>
    </a>
  </li>
  <li className="nav-item">
    <a
      className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug text-black hover:text-white"
      href="#pablo"
    >
      <span className="ml-2 ">سوالات  متداول</span>
    </a>
  </li>
  <li className="nav-item">
    <a
      className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug text-black hover:text-white"
      href="#pablo"
    >
      <span className="ml-2">سایت اصلی</span>
    </a>
  </li>
  <li className="nav-item">
    <a
      className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug text-black hover:text-white"
      href="#pablo"
    >
      <span className="ml-2">سایت مرجع</span>
    </a>
  </li>
  <li className="nav-item">
    <a
      className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug text-black hover:text-white"
      href="#pablo"
    >
      <span className="ml-2">دموها</span>
    </a>
  </li>
</ul>



</div>
    </nav> 
    
</>

  );
    
}