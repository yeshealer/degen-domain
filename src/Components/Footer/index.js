import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { CommunityIcon } from '../Gadgets/Constant'

export default function Footer() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-[#E5E5E5] relative'>
            <div className='w-[1400px] text-black py-20 border-b-4 border-[#77e2924d] relative flex flex-col items-center'>
                <div className='flex items-center gap-5'>
                    <img src='assets/logo.png' alt='logo' className='w-[110px] h-[110px]' />
                    <div className='text-5xl text-stone-700 font-["Panda-font"]'>DEGEN DOMAIN</div>
                </div>
                <div className='w-3/4 text-2xl text-stone-700 text-center font-["bamboo"] mt-10 break-words leading-10'>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate DEGEN information.</div>
                <div className='flex mt-10 gap-20'>
                    {CommunityIcon.map((community) => {
                        return (
                            <div key={community} className='flex flex-col items-center cursor-pointer'>
                                <img src={`assets/${community}.svg`} alt="community" className='w-12 h-12' />
                                <div className='text-lg font-["bamboo"] text-stone-700'>{community}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='absolute bottom-5 font-["bamboo"] text-xl text-stone-700'>@Copyright by 2022</div>
                <Player
                    autoplay
                    loop
                    src='https://assets8.lottiefiles.com/packages/lf20_yxw1cjj4.json'
                    className='w-[220px] h-[220px] rounded-xl absolute bottom-10 left-0'
                />
            </div>
        </div>
    )
}
