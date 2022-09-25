import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Link } from 'react-scroll'
import { DiscordBtn, LaunchBtn } from '../Gadgets'

export default function Dashboard() {
    return (
        <div className='w-full flex justify-center overflow-hidden'>
            <div className='w-full w-4/5 py-10'>
                <div className='flex items-center'>
                    <div className='w-3/5 text-center text-[60px] 2xl:text-[64px] font-["Panda-font"] text-white leading-[70px] 2xl:leading-[100px]'>
                        <div className='dashboard-title'>Decentralised naming for</div>
                        <div className='dashboard-title'>wallets, websites, & more.</div>
                        <div className='w-full text-base xl:text-xl 2xl:text-2xl font-thin font-["bamboo"] mt-10 flex gap-10 justify-center'>
                            <LaunchBtn text="LAUNCH APP" />
                            <DiscordBtn text="JOIN OUR COMMUNITY" />
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_udijzyzg.json"
                            className='w-[500px] 2xl:w-[600px] h-[500px] 2xl:h-[600px]'
                        />
                    </div>
                </div>
                <div className='w-full text-center mt-20 flex flex-col items-center'>
                    <div className='text-2xl text-white font-["bamboo"]'>Do you know about web3 username?</div>
                    <Link to='web3name' spy duration={500} smooth className='cursor-pointer'>
                        <Player
                            autoplay
                            loop
                            src="https://assets3.lottiefiles.com/private_files/lf30_NnBW3K.json"
                            className='w-[50px] h-[50px]'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
