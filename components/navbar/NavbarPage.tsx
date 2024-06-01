'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { BiX ,BiMenuAltRight, BiSearch  } from "react-icons/bi";
import { useState } from "react";

const NavbarPage = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    function getMenuClasses(){
        let menuClasses = [];

            if(isOpen){
                menuClasses = [
                    "flex",
                    "absolute",
                    "top-[56px]",
                    "bg-white",
                    "w-full",
                    "p-3",
                    "left-0",
                    "gap-5",
                    "flex-col",
                    "transition-all",
                     "duration-700" 
                ];
            }else{
                menuClasses = [
                    "hidden",
                    "md:flex",
                    "transition-all",
                     "duration-700" 
                ]
            }
        return menuClasses.join(" ")
    }
    return ( 
    <nav className="sticky top-0 shadow-xl  z-50 bg-white p-3 sm:p-4 md:justify-between md:items-center transition-all duration-700 ">
        <div className="container mx-auto flex justify-between items-center transition-all duration-700 ">
            
        <div className='mr-5 md:hidden text-blue-800'>
                <Link href={'#'} className="text-2xl font-bold"> Logo </Link>
                </div>
                
            <div className={`transition-all duration-700 items-center ${getMenuClasses()}`}>
                <div className='mr-5 hidden md:block text-blue-800'>
                <Link href={'#'} className="text-2xl font-bold"> Logo </Link>
                </div>
                <Link href={'/'} className={`mx-4 transition-all text-[#545656] duration-300 hover:text-blue-500 ${pathname === '/' ? 'text-blue-500' : ''}`}>
                    Home
                </Link>
                <Link href={'/'} className="mx-4 transition-all text-[#545656] duration-300 hover:text-blue-500">
                    Pages
                </Link>
                <Link href={'/'} className="mx-4 transition-all text-[#545656] duration-300 hover:text-blue-500">
                    Services
                </Link>

                <div className='justify-around items-center gap-5 md:hidden flex flex-col'>
            <div className='text-[#545656]'>Sign Up</div>

            <button className="md:mx-0 font-bold text-blue-700 border hover:text-white border-blue-700 py-2 px-2 rounded-xl  after:bg-blue-900 z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Get free estimation</button>

            </div>
            </div>

            <div className='justify-around items-center gap-5 hidden md:flex'>
            <div className='text-[#545656]'>Sign Up</div>

            <button className="md:mx-0 text-blue-700 border hover:text-white border-blue-700 py-2 px-2 rounded-xl  after:bg-blue-900 z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">Get free estimation</button>

            </div>

            <div className="md:hidden flex items-center transition-all duration-700 ">
                <button
                className="transition-all duration-700 "
                onClick={()=>{
                    setIsOpen(!isOpen)
                }}
                >
                
                {isOpen ? ( <BiX  className="text-3xl transition-all duration-700 "/> ) : ( <BiMenuAltRight  className="text-3xl transition-all duration-700 "/> )}
                </button>

            </div>


        </div>
   </nav>
     );
}
 
export default NavbarPage;

