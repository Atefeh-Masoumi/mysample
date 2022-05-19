import React from "react";
import { HiMenu,HiOutlinePhone,  } from 'react-icons/hi';
import { useState } from "react";
import { FaFacebookF,FaTwitter } from "react-icons/fa";

 import { SiAparat } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import {images} from '../../Constant/index'

export default function Navbar() {
  let Links =[
    {name:"دموها"},
    {name:"سایت مرجع"},
    {name:" سایت اصلی"},
    {name:"سوالات متداول"},
    {name:"تماس با ما"},
  ];
  const [showNav, setShowNav] = useState(false); // initiate isNavOpen state with false
  
  return (
   <>
    <nav className="flex w-full justify-between  relative h-14 md:h-auto  top-0 left-0 bg-white lg:bg-black">
    <div className="lg:pl-14 flex flex-wrap ">
    <div className="w-full  relative flex  lg:w-auto lg:static lg:block justify-evenly lg:bg-navyellow bg-white px-3  mb-0 lg:rounded-b-lg">
       <span
        className="hidden font-bold lg:inline-block mr-4 py-2 whitespace-nowrap  text-black cursor-pointer text-sm font-dana"
        >
        خرید از مارکت راست چین
        </span>
    </div>
    <div className="md:hidden flex bg-white">
          <HiOutlinePhone 
          className="md:hidden flex flex-end w-10 h-10 m-2 p-2 cursor-pointer text-white bg-lightyellow rounded-full "
          />
          <HiMenu
        onClick={() => setShowNav(!showNav)} id="toggle"
          className="md:hidden flex flex-end w-10 h-10  m-2 p-2 cursor-pointer text-white bg-lightyellow rounded-full "
          /> 
    </div>
    <div className=" flex translate-x-full lg:hidden h-14 w-[200px] mr-3 p-3">
         <img src={images.moblogo} alt="logo" className="" />
      </div>

    </div>
  </nav> 

  <div className= {
    (showNav ? " -left-0" : "-left-full ") +"relative md:absolute top-0 md:flex  -right-0 md:mr-24"} >
  
<ul className= "w-[80%]   md:w-auto relative md:h-10  h-[92vh]  top-0 z-10 flex lg:flex-row justify-between flex-col list-none lg:ml-auto bg-navyellow px-1 lg:rounded-b-lg font-dana  md:text-black" >
{
  Links.map((link)=>(<li className="nav-item transition flex-row-reverse flex md:flex-row items-center border-b-[1.5px] border-mobborder">
    <a
      className="px-4 py-2 flex items-center text-[14px] font-bold text-bgb md:text-black hover:text-white"
      href="#href"
    >
      <span className="">{link.name}</span>
    </a>
    </li>))}

    <div className="bg-navyellow h-[50vh] justify-end m-1 p-1 md:hidden flex flex-col">

      <div className=" flex m-2 justify-center">
      <div className="rounded-full  bg-bgt m-1">
        <FaFacebookF className="m-3  text-white "/>
      </div>

    <div className="rounded-full m-1 bg-bgt " >
      <FaTwitter className="m-3 text-white " />
    </div>

    <div className="rounded-full m-1 bg-bgt " >
      <BsInstagram className="m-3  text-white " />
    </div>

    <div className="rounded-full m-1 bg-bgt " >
      <SiAparat className="m-3  text-white " />
    </div>
      </div>
      <div className="justify-center flex text-gray " >
        <span >© کپی رایت ۲۰۲۲</span>
      </div>
    </div>
</ul>

</div>
    
</>

  );
    
}