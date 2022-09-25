import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Element } from 'react-scroll';
import { MintNowBtn } from '../Gadgets';

export default function index() {
    return (
        <Element name='web3name' className='w-full bg-[#e5e5e5] flex justify-center'>
            <div className='w-[1400px] text-black py-20 pb-10 border-b-4 border-[#77e2924d] relative flex flex-col items-center'>
                <div className='font-["panda-font"] text-7xl text-center text-white content-title'>Your web3 username</div>
                <div className='font-["bamboo"] max-w-5xl text-2xl text-center font-thin mt-10 text-stone-700 leading-10'>No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services.</div>
                <div className='w-full flex justify-center'>
                    <div className='flex gap-5 items-center border border-[#77e2924d] px-10 py-2 rounded-full mt-10 bg-white'>
                        <img src='assets/logo.png' className='w-16 h-16' alt='logo' />
                        <div className='font-["bamboo"] text-3xl text-green-900'>panda.degen</div>
                    </div>
                </div>
                <div className='absolute bottom-0 right-5'>
                    <Player
                        autoplay
                        loop
                        src="assets/coding_panda.json"
                        className='w-[240px] h-[240px]'
                    />
                </div>
                <MintNowBtn text="Mint now" />
            </div>
        </Element>
    )
}
