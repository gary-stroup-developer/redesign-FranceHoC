import React from 'react';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram} from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { GrPinterest } from "react-icons/gr";
import NavbarMenu from './NavbarMenu';



export const Navbar = () => {
    const [hidden, setHidden] = useState(false)

    function showMenu() {
        setHidden(!hidden)
    }

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setHidden(false)
        } else {
            setHidden(true)
        }
    }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  return (
    <div>
    <div className="bg-blue-900 w-100 h-10"></div>
    <div className="flex flex-wrap justify-around px-4">
        <Image src="/images/hoc-nav-logo.webp"
        alt="France House of Crepes logo"
        width={250}
        height={250}
        />
        <div className='flex justify-evenly w-1/2'>
            
            <div className='flex justify-around w-1/2'>
            <p className='text-lg text-blue-900'>FOLLOW US</p>
                <GrFacebook className="facebook"/>
                <GrInstagram className='instagram'/>
                <GrYoutube className='youtube'/>
                <GrPinterest className='pinterest'/>  
            </div>
            
        </div>
    </div>
    <div className='bg-blue-900 text-white grid grid-cols-2 grid-rows-7 h-auto relative'>
        <div className='bg-red-700 col-span-2 h-1 mb-5'></div>
        <h2 className='row-start-2 text-xl px-4'>Executive Chef Leticia Quehl</h2>
        <p className='absolute right-1 top-1/4 menuicon md:hidden'><CgMenuGridO onClick={showMenu}/></p>
            {hidden ? <NavbarMenu hidden={true}/> : <NavbarMenu hidden={false} /> }
        <div className='row-start-7 bg-red-700 col-span-2 h-0.5'></div>
        <div className='py-5 col-span-2'></div>
    </div>
        
    </div>
  )
}
