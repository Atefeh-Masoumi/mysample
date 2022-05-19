
import React from "react";
import { images } from "../../Constant";
import { useState } from "react";
import {ReactComponent as SvgEl} from '../../element.svg';

import Navbar from "../Navbar/Navbar";

const Header = () => {
    
    return ( 
       <>
        <div className="w-full ">
            <div className="absolute bg-transparent px-0 m-0 block top-0 overflow-hidden mix-blend-overlay " >
             <img src={images.bg} alt="bgimage" className="h-[100vh] w-screen"/>
            </div>
            {/* nav */}
           <Navbar/>
           {/* <nav className=" md:flex w-full justify-between relative h-8  top-0   ">
    <div className="pl-14  ">
    <div className="w-full relative lg:w-auto lg:static lg:block lg:justify-start bg-navyellow px-3  mb-0 rounded-b-lg">
        <span
        className=" font-bold  inline-block mr-4 py-2 whitespace-nowrap uppercase text-black cursor-pointer text-sm font-dana"
        >
        خرید از مارکت راست چین
        </span>
    </div>

    </div>
    
  <div className=" hidden md:flex mr-4 pr-14 " >
        
<ul className="relative flex  lg:flex-row list-none lg:ml-auto bg-navyellow px-1 rounded-b-lg font-dana ">
  <li className="nav-item">
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



    </nav> */}
            {/* end nav */}

            {/* mobile menue */}



           

            {/* start of headerpng files */}
                <div className="lg:h-[100px] ">

                </div>

          <div className=" flex item-center justify-center  mb-12 relative ">
            <div className="mr-4">
              <div className="md:flex flex-1 items-center justify-evenly">
                    <div className="z-10 w-[500px] h-[449px] px-2 m-6 md:flex hidden" >
                        <img src={images.crane} alt="crane" className="z-10  "/>

                    </div>
                    <div className="flex z-10 flex-col justify-evenly items-center mt-8  ">
                        <div className="md:flex hidden flex-row mb-12">
                        <img src={images.logo} alt=""/>
                        <img src={images.lilog} alt=""/>
                        </div>

                        <div className="text-white mb-12">
                            <span className="lg:text-[42px] sm:text-lg font-bold font-kalameh">بهترین قالب مهندسی، ساختمانی وردپرس </span>
                        </div>
                        <div className="text-white mb-4 flex flex-row">
                            <div className="lg:text-xl text-sm font-medium pt-2 mt-4 font-iranyekan">وب سایت آماده کاملا فارسی سازی شده  </div>
                            <div className=" font-kalameh hidden md:flex p-2"><img src={images.dava} alt=""/> </div>
                        </div>
                        <div className="h-20 w-[550px] flex flex-row  ">
                            
                            <div className="lg:text-xl text-sm flex flex-row text-white  font-iranyekan  bg-libl rounded-full h-20">
                             <span className="lg:pt-4  cursor-pointer">سازگار با صفحه ساز محبوب و قدرتمند المنتور</span>
                            <img src={images.elementor} alt="" className=" lg:h-16 lg:w-16"/>
                            </div>
                        </div>
                    </div>
                    <div className="z-10  px-2 hidden md:flex overflow-hidden" >
                        <img src={images.eng} alt="engineer" className="w-full h-[58vh]"/>

                    </div>


            </div>
                
          </div>
               <div className="absolute w-full z-10 translate-y-[24rem]  bg-blend-overlay bg-bottom  ">

<div className="">
 <SvgEl/>
     
</div>       
</div>
               </div>
                
            
        </div>
        
      

       
       </>
     );
}
 
export default Header;