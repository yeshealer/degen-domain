import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Element } from 'react-scroll';
import { MintNowBtn } from '../Gadgets';
import { Content, ComponentTitle } from '../Gadgets/Constant';

export default function Web3Name() {
    return (
        <Element name='web3name' className='w-full bg-[#e5e5e5] flex justify-center'>
            <Content>
                <ComponentTitle>Your web3 username</ComponentTitle>
                <div className='relative sm:absolute bottom-0 right-0 sm:right-5 mt-5 sm:mt-0'>
                    <Player
                        autoplay
                        loop
                        src="assets/coding_panda.json"
                        className='w-[200px] sm:w-[150px] md:w-[180px] lg:w-[320px] h-[200px] sm:h-[150px] md:h-[180px] lg:h-[320px]'
                    />
                </div>
                <div className='font-["bamboo"] max-w-5xl text-base md:text-lg lg:text-xl xl:text-2xl text-center font-thin mt-0 sm:mt-10 text-stone-700 leading-5 sm:leading-7 lg:leading-10'>No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services.</div>
                <div className='w-full flex justify-center'>
                    <div className='flex gap-5 items-center border border-[#77e2924d] px-10 py-2 rounded-full mt-10 bg-white'>
                        <img src='assets/logo.png' className='w-12 lg:w-16 h-12 lg:h-16' alt='logo' />
                        <div className='font-["bamboo"] text-xl md:text-2xl lg:text-3xl text-green-900'>panda.degen</div>
                    </div>
                </div>
                <MintNowBtn text="Mint now" />
            </Content>
        </Element>
    )
}
