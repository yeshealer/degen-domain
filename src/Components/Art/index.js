import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Carousel from "react-multi-carousel";
import { Element } from 'react-scroll';
import { PandaArts } from '../Gadgets/Constant';
import "react-multi-carousel/lib/styles.css";

export default function Art() {
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
        <Element name='art' className='w-full flex justify-center bg-[#E5E5E5] relative'>
            <div className='w-[1400px] text-black py-20 border-b-4 border-[#77e2924d] relative flex flex-col items-center'>
                <div className='text-7xl content-title font-["Panda-font"] text-white tracking-widest'>Our Art</div>
                <div className='text-2xl text-stone-700 font-["bamboo"] mt-20 break-words leading-10'>
                    We are proud to support ingenuity in all its forms with the <b>DEGEN DOMAIN SERVICE</b>. The <b>DEGENArmy</b> is made up of talented individuals who have united to build something remarkable, and we support this by cultivating an environment which encourages creativity and growth. Through the power of the <b>DEGEN DOMAIN SERVICE</b>, we help holders find the tools they need to bring their inspiration and unique perspectives to life. This as just another way to encourage others to step outside of preconceived limits and regulations and experience what it means to be part of our decentralized movement.
                </div>
                <Carousel
                    responsive={responsive}
                    itemClass="flex justify-center break-words"
                    containerClass="carousel-container w-full top-10"
                    removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                    className="partner-container"
                    shouldResetAutoplay={false}
                    autoPlay
                    swipeable
                    draggable
                    infinite
                    ssr
                >
                    {PandaArts.map((pandaArt, index) => {
                        return (
                            <Player
                                autoplay
                                loop
                                src={`assets/panda-art-${index + 1}.json`}
                                className='w-[300px] h-[300px] rounded-xl'
                                key={pandaArt + index}
                            />
                        )
                    })}
                </Carousel>
            </div>
        </Element>
    )
}