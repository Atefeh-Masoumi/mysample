
import React from "react";
import { images } from "../../Constant";
import { useState } from "react";
import {ReactComponent as SvgEl} from '../../element.svg';
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from 'react-icons/hi';

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    const [showNav, setShowNav] = useState(false);
    return ( 
       <>
        <div className="w-full ">
            <div className="absolute  bg-transparent px-0 m-0 block top-0 overflow-hidden mix-blend-overlay " >
             <img src={images.bg} alt="bgimage" className="h-screen w-screen"/>
            </div>
            {/* nav */}
            <nav className="hidden md:flex w-full justify-between relative h-8  top-0  ">
                <div className="pl-14  ">
                <div className="w-full relative lg:w-auto lg:static lg:block lg:justify-start bg-navyellow px-3  mb-0 rounded-b-lg">
                    <span
                    className=" font-bold  inline-block mr-4 py-2 whitespace-nowrap uppercase text-black cursor-pointer text-sm font-dana"
                    >
                    خرید از مارکت راست چین
                    </span>
                </div>

                </div>
                
              <div className="bg-slate-100 hidden md:flex mr-4 pr-14" >
                    
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
            {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}


            </div>
           

            </nav>
            {/* end nav */}

            {/* mobile menue */}



           

            {/* start of headerpng files */}
                <div className="lg:h-[120px] ">

                </div>

               <div className="flex item-center justify-center mb-12">
               <div className="flex flex-1 items-center justify-between " >
                    <div className="z-10 w-96 h-80 px-2 m-4 " >
                        <img src={images.crane} alt="crane" className="z-10"/>

                    </div>
                    <div className="flex z-10 flex-col justify-evenly items-center mt-8  ">
                        <div className="flex flex-row mb-12">
                        <img src={images.logo} alt=""/>
                        <img src={images.lilog} alt=""/>
                        </div>

                        <div className="text-white mb-12">
                            <span className="lg:text-3xl sm:text-lg font-bold font-kalameh">بهترین قالب مهندسی، ساختمانی وردپرس </span>
                        </div>
                        <div className="text-white mb-12">
                            <span className="lg:text-3xl font-bold font-kalameh">وب سایت اماده کاملا فارسی سازی شده <span>12</span> </span>
                        </div>
                        <div className=" flex flex-row ">
                            
                            <span className="lg:text-2xl text-white font-bold font-kalameh ">سازگار با صفحه ساز محبوب و قدرتمند المنتور</span>
                            <img src={images.elementor} alt="" className="h-16 w-16"/>
                        </div>
                    </div>
                    <div className="z-10  px-2 relative " >
                        <img src={images.eng} alt="engineer" className="w-full h-full"/>

                    </div>


                </div>
               </div>
                
            
        </div>
        <div className="absolute w-full z-9 ">

        <div className="relative">
         <SvgEl/>
             
        </div>       
        </div>

       
       </>
     );
}
 
export default Header;