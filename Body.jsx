import React from "react";
import {ReactComponent as SvgEl} from '../../element.svg';
import { images } from "../../Constant";
const Body =()=>{
    return(
        <>
          {/* <div className="absolute w-full z-9 translate-y-[-14rem]  ">

<div className="">
 <SvgEl/>
     
</div>       
</div> */}
        <div className="md:h-[120px] ">

        </div>
        <div className=" bg-black">
        
        <div className="text-lightyellow justify-center items-center flex ">
            <div className="text-center font-iranyekan font-bold text-2xl"> دمو اصلی سایت آماده فارسی </div>
            <div className="text-center font-iranyekan font-bold text-2xl ml-1"> 6</div>

        </div>
        
        <div>
            
        <div className="flex justify-center">
         <div className="grid grid-cols-1 lg:mr-10 lg:ml-10 lg:grid-cols-3 sm:grid-cols-2 m-9 gap-2">
         <div className="w-full px-4 lg:px-0 ">
            <div className="p-3 max-w-[450px] shadow-md cursor-pointer">
            <div className="">
                <div className="relative w-full mb-3 h-62 lg:mb-0">
                <img src={images.home3} alt="demo home3"
                    className="object-fill w-full h-full rounded-[12px] "/>
                </div>
            
            </div>
            </div>
            </div>
            <div clasNames="w-full px-4 lg:px-0 ">
            <div className="p-3 rounded max-w-[450px] shadow-md cursor-pointer">
            <div className="">
                <div className="relative w-full mb-3 h-62 lg:mb-0">
                <img src={images.home2} alt="demo home3"
                    className="object-fill w-full h-full rounded-[12px] "/>
                </div>
            
            </div>
            </div>
            </div>
            <div className="w-full px-4 lg:px-0 ">
            <div className="p-3 rounded max-w-[450px] shadow-md cursor-pointer">
            <div className="">
                <div className="relative w-full mb-3 h-62 lg:mb-0">
                <img src={images.home1} alt="demo home3"
                    className="object-fill w-full h-full rounded-[12px] "/>
                </div>
            
            </div>
            </div>
            </div>
            <div className="w-full px-4 lg:px-0 ">
            <div class="p-3 rounded max-w-[450px] shadow-md cursor-pointer">
            <div className="">
                <div className="relative w-full mb-3 h-62 lg:mb-0">
                <img src={images.home6} alt="demo home3"
                    className="object-fill w-full h-full rounded-[12px] "/>
                </div>
            
            </div>
            </div>
            </div>

            <div className="w-full px-4 lg:px-0 ">
            <div class="p-3 rounded max-w-[450px] shadow-md cursor-pointer">
            <div className="">
                <div className="relative w-full mb-3 h-62 lg:mb-0">
                <img src={images.home5} alt="demo home3"
                    className="object-fill w-full h-full rounded-[12px] "/>
                </div>
            
            </div>
            </div>
            </div>
            <div className="w-full px-4 lg:px-0 ">
            <div class="p-3 rounded max-w-[450px] shadow-md cursor-pointer">
            <div className="">
                <div className="relative w-full mb-3 h-62 lg:mb-0">
                <img src={images.home4} alt="demo home3"
                    className="object-fill w-full h-full rounded-[12px] "/>
                </div>
            
            </div>
            </div>
            </div>
         </div>
        </div>
        </div>
        <SvgEl/>
        </div>
        </>
        

            

    )
}
export default Body;