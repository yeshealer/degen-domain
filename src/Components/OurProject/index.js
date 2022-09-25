import React from 'react'
import { wrapn } from 'wrapn';
import { Icon } from '@iconify/react';
import { Player } from '@lottiefiles/react-lottie-player'
import { Element } from 'react-scroll';
import { Content, ComponentTitle } from '../Gadgets/Constant';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function index() {
    const ProjectDetail = wrapn('div')`
        text-stone-700 text-2xl lg:text-3xl font-["bamboo"] font-thin border-2 rounded-xl w-3/5 md:w-60 lg:w-72 2xl:w-80 relative p-3 lg:p-5 bg-white overflow-hidden
    `
    const CircleBadge = wrapn('div')`
        bg-[#77e2924d] absolute w-32 lg:w-40 h-32 lg:h-40 -top-16 -left-8 rounded-full flex items-center justify-center
    `

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 800 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <Element name='aboutus' className='w-full flex justify-center bg-[#e5e5e5] relative'>
            <Content>
                <ComponentTitle>WHO ARE THE DEGEN DOMAIN?</ComponentTitle>
                <div className='flex items-start'>
                    <div className='w-[30%]'>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_3j3plqzq.json"
                            className='w-[180px] md:w-[240px] lg:w-[300px] h-[180px] md:h-[240px] lg:h-[300px]'
                        />
                    </div>
                    <div className='w-[70%]'>
                        <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-["bamboo"] font-black text-stone-700 mt-10 md:mt-20'>DEGEN DOMAIN SERVICES</div>
                        <div className='text-sm md:text-base lg:text-xl xl:text-2xl font-["bamboo"] text-stone-700 mt-5 lg:mt-10'>No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services. No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services.</div>
                    </div>
                </div>
                <div className='w-4/5 text-center py-10 pb-0 flex flex-col items-center'>
                    <Carousel
                        responsive={responsive}
                        itemClass="flex justify-center break-words"
                        containerClass="carousel-container w-full"
                        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                        className="partner-container"
                        shouldResetAutoplay={false}
                        autoPlay
                        swipeable
                        draggable
                        infinite
                        ssr
                    >
                        <ProjectDetail className='border-[#651616]'>
                            <CircleBadge className='bg-[#ff7cb34d]' />
                            <div className='dashboard-title-red font-bold text-white flex items-center gap-5 justify-between'>
                                <Icon icon="bx:edit" color="#651616" className='w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]' />
                                Mint
                            </div>
                        </ProjectDetail>
                        <ProjectDetail className='border-[#606516]'>
                            <CircleBadge className='bg-[#fdf47b4d]' />
                            <div className='dashboard-title-yellow font-bold text-white flex items-center gap-5 justify-between'>
                                <Icon icon="medical-icon:i-waiting-area" color="#606516" className='w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]' />
                                Waiting
                            </div>
                        </ProjectDetail>
                        <ProjectDetail className='border-[#166534]'>
                            <CircleBadge className='bg-[#77e2924d]' />
                            <div className='dashboard-title font-bold text-white flex items-center gap-5 justify-between'>
                                <Icon icon="icon-park-outline:done-all" color="#166534" className='w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]' />
                                Complete
                            </div>
                        </ProjectDetail>
                    </Carousel>
                </div>
            </Content>
        </Element>
    )
}
