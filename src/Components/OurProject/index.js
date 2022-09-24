import React from 'react'
import { wrapn } from 'wrapn';
import { Icon } from '@iconify/react';
import { Player } from '@lottiefiles/react-lottie-player'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function index() {
    const ProjectDetailGreen = wrapn('div')`
        text-stone-700 text-3xl font-["bamboo"] font-thin border-2 border-[#166534] rounded-xl w-80 relative p-5 bg-white overflow-hidden
    `
    const ProjectDetailYellow = wrapn('div')`
        text-stone-700 text-3xl font-["bamboo"] font-thin border-2 border-[#606516] rounded-xl w-80 relative p-5 bg-white overflow-hidden
    `
    const ProjectDetailRed = wrapn('div')`
        text-stone-700 text-3xl font-["bamboo"] font-thin border-2 border-[#651616] rounded-xl w-80 relative p-5 bg-white overflow-hidden
    `
    const CircleBadgeGreen = wrapn('div')`
        bg-[#77e2924d] absolute w-40 h-40 -top-16 -left-8 rounded-full flex items-center justify-center
    `
    const CircleBadgeYellow = wrapn('div')`
        bg-[#fdf47b4d] absolute w-40 h-40 -top-16 -left-8 rounded-full flex items-center justify-center
    `
    const CircleBadgeRed = wrapn('div')`
        bg-[#ff7cb34d] absolute w-40 h-40 -top-16 -left-8 rounded-full flex items-center justify-center
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
        <div className='w-full flex justify-center bg-[#e5e5e5] relative'>
            <div className='w-[1400px] text-black text-center py-20 pb-10 border-b-4 border-[#77e2924d] flex flex-col items-center'>
                <div className='font-["Panda-font"] text-7xl text-white content-title'>WHO ARE THE DOGEN DOMAIN?</div>
                <div className='flex items-start'>
                    <div className='w-[30%]'>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_3j3plqzq.json"
                            className='w-[300px] h-[300px]'
                        />
                    </div>
                    <div className='w-[70%]'>
                        <div className='text-4xl font-["bamboo"] font-black text-stone-700 mt-20'>DOGEN DOMAIN SERVICES</div>
                        <div className='text-2xl font-["bamboo"] text-stone-700 mt-10'>No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services. No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services.</div>
                    </div>
                </div>
                <div className='w-4/5 text-center py-10 flex flex-col items-center'>
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
                        <ProjectDetailRed>
                            <CircleBadgeRed />
                            <div className='dashboard-title-red font-bold text-white flex items-center gap-5 justify-between'>
                                <Icon icon="bx:edit" color="#651616" width="50" height="50" />
                                Mint
                            </div>
                        </ProjectDetailRed>
                        <ProjectDetailYellow>
                            <CircleBadgeYellow />
                            <div className='dashboard-title-yellow font-bold text-white flex items-center gap-5 justify-between'>
                                <Icon icon="medical-icon:i-waiting-area" color="#606516" width="50" height="50" />
                                Waiting
                            </div>
                        </ProjectDetailYellow>
                        <ProjectDetailGreen>
                            <CircleBadgeGreen />
                            <div className='dashboard-title font-bold text-white flex items-center gap-5 justify-between'>
                                <Icon icon="icon-park-outline:done-all" color="#166534" width="50" height="50" />
                                Complete
                            </div>
                        </ProjectDetailGreen>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
