import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { CommunityIcon, Content } from '../Gadgets/Constant'

export default function Footer() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-[#E5E5E5] relative'>
            <Content>
                <div className='flex items-center gap-5'>
                    <Player
                        autoplay
                        loop
                        src='https://assets8.lottiefiles.com/packages/lf20_yxw1cjj4.json'
                        className='w-[100px] lg:w-[130px] xl:w-[160px] w-[100px] lg:w-[130px] xl:h-[160px]'
                    />
                    <div className='text-3xl lg:text-4xl xl:text-5xl text-stone-700 font-["Panda-font"]'>DEGEN DOMAIN</div>
                </div>
                <div className='w-3/4 text-lg lg:text-xl xl:text-2xl text-stone-700 text-center font-["bamboo"] mt-10 break-words leading-8 lg:leading-9 xl:leading-10'>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate DEGEN information.</div>
                <div className='flex mt-10 gap-20'>
                    {CommunityIcon.map((community) => {
                        return (
                            <div key={community} className='flex flex-col items-center cursor-pointer'>
                                <img src={`assets/${community}.svg`} alt="community" className='w-12 h-12' />
                                <div className='text-base lg:text-lg font-["bamboo"] text-stone-700'>{community}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='bottom-5 font-["bamboo"] text-lg xl:text-xl text-stone-700 mt-10 -mb-5'>@Copyright by 2022</div>
            </Content>
        </div>
    )
}
