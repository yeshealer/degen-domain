import React from 'react'
import Carousel from "react-multi-carousel";
import { Player } from '@lottiefiles/react-lottie-player'

export default function index() {
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
            <div className='w-3/4 text-black text-center py-20 pb-10 border-b-4 border-lime-400'>
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
                        <div className='text-3xl font-["bamboo"] text-stone-700 mt-20'>DOGEN DOMAIN SERVICES</div>
                        <div className='text-2xl font-["bamboo"] text-stone-700 mt-10'>No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services. No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services.</div>
                    </div>
                </div>
                <div className='w-full text-center py-10 flex flex-col items-center'>
                    <Carousel
                        responsive={responsive}
                        itemClass="flex justify-center"
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                        className="partner-container"
                        shouldResetAutoplay={false}
                        swipeable
                        draggable
                        infinite
                        ssr
                    >
                        <div className='text-black'>ajlaksdjflksjdflkajsdf</div>
                        <div className='text-black'>azxcvasdfasdf</div>
                        <div className='text-black'>qwer235werfgbsdfgasdfasdtgqergfasdfadf</div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
