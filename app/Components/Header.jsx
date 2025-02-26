import React, { useRef } from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets';
import profile from '../assets/profile-img.png';

const header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-x1 md:text-2x1 mb-3 font-Ovo'>
            Hi! My Name is Ryan Jimenez <Image src={assets.hand_icon} alt='' 
            className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl md:text-7xl lg:text-[66px] font-Ovo'>
        Student Aspiring To Be A Software Engineer    </h1> 
        <p className='max-w-2x1 mx-auto font-Ovo'>
        I'm a student proficient in 
        data structures, computer vision, 
        and AI, with a strong foundation in software development and a passion 
        for solving real-world 
        problems through technology.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2 dark:bg-transparent'
            >Contact Me   <Image src={assets.right_arrow_white} alt='' 
            className='w-4'/> </a>
            
            <a href="/resume.pdf" download 
            className='px-10 py-3 border rounded-full 
            border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                My Resume <Image src={assets.download_icon} alt='' 
            className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default header
