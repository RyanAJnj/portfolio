import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();


  const toggleSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const untoggleSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(+16rem)';
  }
  
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
      setIsScroll(true);
    }
    else {
      setIsScroll(false);
    }
    })
},[]);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='background' className='w-full' />
    </div>
      
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
      ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-md shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Companylogo" className='w-28 cursor-pointer mr-14' />
        </a>

        {/* Navbar Links: Hidden on small screens, visible on medium and larger */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 
        rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark: border dark: border-white/50 dark:bg-transparent"} `}>

          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#Bio">Bio</a></li>
          <li><a className='font-Ovo' href="#resume">Resume</a></li>
          <li><a className='font-Ovo' href="#projects">Projects</a></li>
          <li><a className='font-Ovo' href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={()=>setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='DarkMode' className='w-6' />
          </button>

          <a href="#contact" className='hidden md:flex items-center gap-3 px-10 py-2.5 
          border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon : assets.arrow_icon} alt="" className='w-3'/></a>


          <button className='block md:hidden ml-3' onClick={toggleSideMenu}> 
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='DarkMode' className='w-6' />
          </button>
        </div>

 {/*Mobile menu*/}

 <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 
 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 
 transition duration-500 dark:bg-darkHover dark:text-white'>

<div className='absolute right-6 top-6' onClick={untoggleSideMenu}>
  <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close' className='w-5 
  cursor pointer' />
</div>

          <li><a className='font-Ovo' onClick={untoggleSideMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={untoggleSideMenu} href="#Bio">Bio</a></li>
          <li><a className='font-Ovo' onClick={untoggleSideMenu} href="#resume">Resume</a></li>
          <li><a className='font-Ovo' onClick={untoggleSideMenu} href="#projects">Projects</a></li>
          <li><a className='font-Ovo'onClick={untoggleSideMenu}  href="#contact">Contact</a></li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;