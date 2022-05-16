import { images } from "../constant";
import { useState } from "react";
import {element as ReactComponent} from '../element.svg'
const Header = () => {
   
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    return ( 
        <div className="w-full ">
            <div className="absolute bg-transparent px-0 m-0 block top-0 overflow-hidden mix-blend-overlay" >
             <img src={images.bg} alt="bgcolor" className="h-screen w-screen "/>
            </div>
            {/* nav */}
            <div className="flex w-full relative h-8  top-0  ">
                <div className="pl-14  ">
                    <div className="bg-yellow-400 rounded-b-lg px-3 hidden md:flex">
                        <span>خرید از مارکت راست چین </span>
                    </div>

                </div>
                
                <div className="bg-slate-100 hidden md:flex" >
                    
                    <div>

                    </div>


                </div>

            </div>
            {/* end nav */}
            {/* mobile menue */}
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full' onClick={handleClose} to="home" smooth={true} duration={500}>Home</li>
          <li className='border-b-2 border-zinc-300 w-full' onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</li>
          <li className='border-b-2 border-zinc-300 w-full' onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</li>
          <li className='border-b-2 border-zinc-300 w-full' onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</li>
          <li className='border-b-2 border-zinc-300 w-full' onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>icon</button>
            <button className='px-8 py-3'>copy right</button>
        </div>
      </ul>

            {/* start of headerpng files */}
                <div className="lg:h-[120px] ">

                </div>

                <div className="flex flex-1 items-center " >
                    <div className="z-9 w-96 h-80 px-2 m-4 " >
                        <img src={images.crane} alt="crane" className="color"/>

                    </div>
                    <div className="flex flex-col justify-evenly items-center mt-8 ">
                        <div className="flex flex-row">
                        <img src={images.flogo} alt=""/>
                        <img src={images.lilog} alt=""/>
                        </div>

                        <div className="text-white ">
                            <span className="lg:text-3xl font-bold">بهترین قالب مهندسی، ساختمانی وردپرس </span>
                        </div>
                        <div className="text-white ">
                            <span className="lg:text-3xl font-bold">وب سایت اماده کاملا فارسی سازی شده <span>12</span> </span>
                        </div>
                        <div className="bg-slate-700 flex flex-row ">
                            
                            <span className="lg:text-3xl text-white font-bold ">سازگار با صفحه ساز محبوب و قدرتمند المنتور</span>
                            <img src={images.elementor} alt="" className="h-16 w-16"/>
                        </div>
                    </div>
                    <div className="z-9 w-96 h-80 bg-opacity-10  " >
                        <img src={images.eng} alt="engineer" className=""/>

                    </div>


                </div>
            <element />
        </div>

       
     );
}
 
export default Header;