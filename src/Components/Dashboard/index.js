import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { DiscordBtn, LaunchBtn } from '../Gadgets'

export default function index() {
    return (
        <div className='w-full flex justify-center overflow-hidden'>
            <div className='w-full w-4/5 flex items-center py-10'>
                <div className='w-3/5 text-center text-[66px] font-["Panda-font"] text-white leading-[100px]'>
                    <div className='dashboard-title'>Decentralised naming for</div>
                    <div className='dashboard-title'>wallets, websites, & more.</div>
                    <div className='w-full text-2xl font-thin font-["bamboo"] mt-10 flex gap-10 justify-center'>
                        <LaunchBtn text="LAUNCH APP" />
                        <DiscordBtn text="JOIN OUR COMMUNITY" />
                    </div>
                </div>
                <div className='w-2/5'>
                    <Player
                        autoplay
                        loop
                        src="https://assets9.lottiefiles.com/packages/lf20_udijzyzg.json"
                        className='w-[600px] h-[600px]'
                    />
                </div>
            </div>
        </div>
    )
}
