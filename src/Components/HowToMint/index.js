import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Element } from 'react-scroll'
import { HowToBuy, Content, ComponentTitle } from '../Gadgets/Constant'

export default function HowToMint() {
    return (
        <Element name='buy' className='w-full flex justify-center bg-[#E5E5E5] relative'>
            <Content>
                <ComponentTitle>How to Mint</ComponentTitle>
                <div className='grid grid-cols-2 gap-5 mt-20 lg:relative'>
                    {HowToBuy.map((process, index) => {
                        return (
                            <div className='border-2 border-[#166534] bg-white p-7 lg:p-10 rounded-xl flex flex-col overflow-hidden shadow-xl relative' key={process.title}>
                                <div className={`text-white font-["bamboo"] text-2xl xl:text-3xl font-bold dashboard-title lg:w-4/5 ${index % 2 === 1 ? 'text-end self-end' : 'text-start self-start'}`}>{process.title}</div>
                                <div className={`text-stone-700 text-lg xl:text-xl font-["bamboo"] mt-5 lg:w-4/5 ${index % 2 === 1 ? 'text-end self-end' : 'text-start self-start'}`}>{process.description}</div>
                                <div className={`absolute text-[#166534] bg-[#77e2924d] w-16 lg:w-20 h-16 lg:h-20 rounded-full -top-6 ${index % 2 === 1 ? '-right-6' : '-left-6'}`} />
                                <div className={`absolute text-[#166534] text-xl lg:text-3xl font-["bamboo"] font-bold flex items-center justify-center top-1 lg:top-2 ${index % 2 === 1 ? 'right-3 lg:right-4' : 'left-3 lg:left-4'}`}>{index + 1}</div>
                            </div>
                        )
                    })}
                    <div className='w-[240px] lg:w-[300px] xl:w-[350px] h-[240px] lg:h-[300px] xl:h-[350px] 2xl:w-[370px] 2xl:h-[370px] border-none lg:border border-[#166534] rounded-full p-10 absolute lg:bg-[#e5e5e5] -left-10 lg:left-[300px] xl:left-[400px] 2xl:left-[515px] -top-5 lg:top-44 xl:top-24 2xl:top-12'>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_ki2ohgx3.json"
                        />
                    </div>
                </div>
            </Content>
        </Element>
    )
}