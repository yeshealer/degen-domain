import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link, Element, animateScroll as scroll, Button } from 'react-scroll'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const scrollToTop = function () {
    scroll.scrollToTop();
  }

  const closeIcon = (
    <Icon icon="eva:close-circle-outline" width="30" height="30" />
  )
  return (
    <Element name='home' className='w-full py-3 px-10 h-[100px] flex justify-center'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src='assets/logo.png' alt='logo' className='w-[55px] md:w-[90px] h-[55px] md:h-[90px]' />
          <div className='text-2xl md:text-3xl text-white dashboard-title font-["Panda-font"]'>DEGEN DOMAIN</div>
        </div>
        <div className='gap-10 hidden lg:flex'>
          <Link spy activeClass='active' smooth offset={50} duration={500} className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500' onClick={() => scrollToTop()}>Home</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="aboutus" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>About us</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="buy" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>How to Mint</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="art" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>Art</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to="faq" className='text-base font-thin font-["bamboo"] cursor-pointer text-white hover:text-gray-300 transition-all duration-500'>FAQ</Link>
        </div>
        <div className='bg-transparent hover:bg-[#FFFFFF30] rounded-md transition-all duration-500 block p-1 cursor-pointer lg:hidden' onClick={() => onOpenModal()}>
          <Icon icon="entypo:menu" className='w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-white' />
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        top
        classNames={{
          modal: 'w-auto rounded-xl'
        }}
        closeIcon={closeIcon}
      >
        <div className='flex flex-col w-full'>
          <Link spy activeClass='active' smooth offset={50} duration={500} className="w-[300px] text-stone-800 font-['bamboo'] text-xl px-5 py-2 cursor-pointer hover:bg-[#166534] hover:text-white transition-all duration-500 rounded-xl" onClick={() => scrollToTop()}>Home</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to='aboutus' className="w-[300px] text-stone-800 font-['bamboo'] text-xl px-5 py-2 cursor-pointer hover:bg-[#166534] hover:text-white transition-all duration-500 rounded-xl">About us</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to='buy' className="w-[300px] text-stone-800 font-['bamboo'] text-xl px-5 py-2 cursor-pointer hover:bg-[#166534] hover:text-white transition-all duration-500 rounded-xl">How to Mint</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to='art' className="w-[300px] text-stone-800 font-['bamboo'] text-xl px-5 py-2 cursor-pointer hover:bg-[#166534] hover:text-white transition-all duration-500 rounded-xl">Art</Link>
          <Link spy activeClass='active' smooth offset={50} duration={500} to='faq' className="w-[300px] text-stone-800 font-['bamboo'] text-xl px-5 py-2 cursor-pointer hover:bg-[#166534] hover:text-white transition-all duration-500 rounded-xl">FAQ</Link>
        </div>
      </Modal>
    </Element>
  )
}
