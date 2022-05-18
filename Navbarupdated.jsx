import React from "react";
import { HiMenu,HiOutlinePhone,  } from 'react-icons/hi';
import { useState } from "react";
import { images } from "../Constant/index";
import { FiTwitter, } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
 import { SiAparat } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

export default function Navbar() {
  let Links =[
    {name:"تماس با ما"},
    {name:" سوالات  متداول"},
    {name:" سایت اصلی"},
    {name:"سایت مرجع"},
    {name:"دموها"},
  ];
  const [showNav, setShowNav] = useState(false); // initiate isNavOpen state with false
  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
  return (
   <>
    <nav className=" flex w-full justify-between relative h-14  top-0 left-0 bg-white lg:bg-black">
    <div className="lg:pl-14 flex justify-between ">
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
        
    </div>
        <div className="flex   lg:hidden w-[200px] mr-3 p-3">
        <img src={images.moblogo} alt="logo" className="" />
      </div>
      
    </div>

    </nav> 
    <div className= {
      (showNav ? " -left-0" : "-left-full ") +"relative md:absolute top-0 md:flex -right-0"} >
  
<ul className= " relative md:h-auto m h-[80vh] top-0 z-10 flex lg:flex-row flex-col list-none lg:ml-auto bg-navyellow px-1 lg:rounded-b-lg font-dana  md:text-black" >
{
  Links.map((link)=>(<li className="nav-item  ">
    <a
      className="px-3 py-2 flex items-center text-[14px]  font-bold leading-snug text-black hover:text-white"
      href="#href"
    >
      <span className="ml-2"> {link.name} </span>
    </a>
    </li>))}
    <div className="bg-navyellow  m-1 p-1 md:hidden flex ">

      <div className="rounded-full bg-bgt m-1">
        <FiFacebook className="m-3 w-8 h-8 text-white "/>
      </div>

    <div className="rounded-full m-1 bg-bgt " >
      <FiTwitter className="m-3 w-8 h-8 text-white " />
    </div>

    <div className="rounded-full m-1 bg-bgt " >
      <BsInstagram className="m-3 w-8 h-8 text-white " />
    </div>

    <div className="rounded-full m-1 bg-bgt " >
      <SiAparat className="m-3 w-8 h-8 text-white " />
    </div>
    

    </div>
</ul>

</div>
    
</>

  );
    
}