import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Link } from 'react-scroll'
import { DiscordBtn, LaunchBtn } from '../Gadgets'

export default function Dashboard() {
    return (
        <div className='w-full flex justify-center overflow-hidden'>
            <div className='w-[90%] sm:w-4/5 py-10'>
                <div className='flex items-center'>
                    <div className='w-full sm:w-3/5 py-10 sm:py-0 text-center text-[36px] md:text-[40px] lg:text-[60px] 2xl:text-6xl font-["Panda-font"] text-white leading:[40px] md:leading-[50px] lg:leading-[70px] 2xl:leading-[100px]'>
                        <div className='dashboard-title'>Decentralised naming for</div>
                        <div className='dashboard-title'>wallets, websites, & more.</div>
                        <div className='w-full text-sm lg:text-xl 2xl:text-2xl font-thin font-["bamboo"] mt-10 flex gap-10 justify-center'>
                            <LaunchBtn text="LAUNCH APP" />
                            <DiscordBtn text="JOIN OUR COMMUNITY" />
                        </div>
                    </div>
                    <div className='sm:w-2/5'>
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_udijzyzg.json"
                            className='w-[270px] md:w-[360px] lg:w-[480px] 2xl:w-[600px] h-[270px] md:h-[360px] lg:h-[480px] 2xl:h-[600px] hidden sm:block'
                        />
                    </div>
                </div>
                <div className='w-full text-center mt-20 flex flex-col items-center'>
                    <div className='text-lg lg:text-2xl text-white font-["bamboo"]'>Do you know about web3 username?</div>
                    <Link to='web3name' spy duration={500} smooth className='cursor-pointer'>
                        <Player
                            autoplay
                            loop
                            src="https://assets3.lottiefiles.com/private_files/lf30_NnBW3K.json"
                            className='w-[35px] lg:w-[50px] h-[35px] lg:h-[50px]'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
