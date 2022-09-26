import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link, Element, animateScroll as scroll } from 'react-scroll'

export default function Header() {
  const scrollToTop = function () {
    scroll.scrollToTop();
  }
  return (
    <Element name='home' className='w-full py-3 px-10 h-[100px] flex justify-center'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <img src='assets/logo.png' alt='logo' className='w-[50px] md:w-[76px] h-[50px] md:h-[76px]' />
          <div className='text-2xl md:text-3xl text-white dashboard-title font-["Panda-font"]'>DEGEN DOMAIN</div>
        </div>
        <div className='gap-10 hidden lg:flex'>
          <Link spy activeClass='active' smooth offset={50} duration={500} className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500' onClick={() => scrollToTop()}>Home</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="aboutus" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>About us</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="buy" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>How to Mint</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="art" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>Art</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="faq" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>FAQ</Link>
        </div>
        <div className='bg-transparent hover:bg-[#FFFFFF30] rounded-md transition-all duration-500 block p-1 cursor-pointer lg:hidden'>
          <Icon icon="entypo:menu" className='w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-white' />
        </div>
      </div>
    </Element>
  )
}
