import { images } from "../constant";
import { useState } from "react";

const Header = () => {
   
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    return ( 
        <div className="w-full ">
            <div className="absolute bg-transparent px-0 m-0 block top-0 overflow-hidden mix-blend-overlay" >
             <img src={images.bg} alt="bgcolor" className="object-cover mix-blend-overlay"/>
            </div>

            <div className="flex w-full relative h-8  top-0  ">
                <div className="pl-14  ">
                    <div className="bg-yellow-400 rounded-b-lg px-3   ">
                        <span>خرید از مارکت راست چین </span>
                    </div>

                </div>
                <div>

                </div>

            </div>
        </div>

       
     );
}
 
export default Header;