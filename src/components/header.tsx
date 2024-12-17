"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart, FaTimes, FaCircle, FaHome } from "react-icons/fa";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Header() {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleVisiblity = () => {
        setIsVisible(isVisible => !isVisible);
    }

 
    return(
        <div>
            <div>
                <div className="h-10 w-full bg-white flex justify-around items-center ">
                  <div className="flex items-center gap-3 ">
                      <button className="flex flex-col gap-1" onClick={handleVisiblity}>
                        {!isVisible ? 
                         <div className="flex flex-col gap-1">
                            <div className="h-[0.3vh] w-4 bg-black"></div>
                        <div className="h-[0.3vh] w-4 bg-black"></div>
                        <div className="h-[0.3vh] w-4 bg-black"></div></div> :
                        <div className="relative">
                            <div className="flex flex-col gap-1 ">
                            <div className="h-[0.3vh] w-4 bg-black"></div>
                        <div className="h-[0.3vh] w-4 bg-black"></div>
                        <div className="h-[0.3vh] w-4 bg-black"></div>
                        </div>
                        <div className="shadows bg-black h-[105vh] w-[75vw] absolute -top-5 -left-6 flex flex-col justify-center items-start gap-14 pl-8">
                            <FaTimes className="hover:bg-white hover:text-black text-white size-4 rounded-full ml-2" />

                            <div className="flex flex-col gap-8">
                                <div className="text-white flex gap-3 text-sm hover:bg-white hover:text-black hover:rounded-lg h-8 w-40 items-center  pl-2 "><FaHome /><Link href={"/"}>Home</Link></div>
                                <div className="text-white flex gap-3 text-sm hover:bg-white hover:text-black hover:rounded-lg h-8 w-40 items-center  pl-2"><FaShoppingCart /><Link href={""}>Your Cart List</Link></div>
                                <div className="text-white flex gap-3 text-sm hover:bg-white hover:text-black hover:rounded-lg h-8 w-40 items-center  pl-2"><FaHeart /><Link href={""}>Your WishList</Link></div>
                                <div className="text-white flex gap-3 text-sm hover:bg-white hover:text-black hover:rounded-lg h-8 w-40 items-center  pl-2"><div className="flex flex-col items-center"><FaCircle size={"10"} /><div className="h-2 w-4 rounded-t-lg hover:bg-black bg-white"></div></div><Link href={""}>Your Profile</Link></div>

                            </div>
               
                            </div>       
                            </div>
                                         }
                       
                    </button>
                    <h1 className="fonts text-sm ">M FITS</h1>
                 </div>
                 <div className="flex items-center gap-3">
                    <Select>
  <SelectTrigger className="w-[120px] h-[5vh] text-[2vh] border-gray-600 border-[0.5px]">
    <SelectValue placeholder="Select Category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="shirts">Shirts</SelectItem>
    <SelectItem value="t-shirts">T-Shirts</SelectItem>
    <SelectItem value="pants">Pants</SelectItem>
  </SelectContent>
</Select>
<div className="flex gap-2">
<div><FaRegHeart /></div>
<div><FaShoppingCart /></div>
</div>
</div>
                </div>
                
            </div>
        </div>
    )
}