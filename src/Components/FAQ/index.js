import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Player } from '@lottiefiles/react-lottie-player'
import { Element } from 'react-scroll';
import { FAQs } from '../Gadgets/Constant';

export default function FAQ() {
    const [isFAQOpen, setIsFAQOpen] = useState([])

    const handleFAQ = (index) => {
        let newState = [...isFAQOpen]
        for (let i = 0; i < newState.length; i++) {
            if (index !== i) {
                newState[i] = false
            }
        }
        newState[index] = !newState[index]
        setIsFAQOpen(newState)
    }
    return (
        <Element name='faq' className='w-full flex justify-center bg-[#E5E5E5] relative'>
            <div className='w-[1400px] text-black py-20 border-b-4 border-[#77e2924d] relative flex flex-col items-center'>
                <div className='text-7xl content-title font-["Panda-font"] text-white tracking-widest'>FAQ</div>
                <div className='absolute top-0 right-0'>
                    <Player
                        autoplay
                        loop
                        src='https://assets7.lottiefiles.com/packages/lf20_qjwbwpwr.json'
                        className='w-[300px] h-[300px] rounded-xl'
                    />
                </div>
                <div className='mt-10 w-full flex flex-col items-center'>
                    {FAQs.map((faq, index) => {
                        return (
                            <div key={'faq' + index} className='w-[70%] text-4xl text-stone-900 font-["Panda-font"] text-start bg-white p-5 rounded-xl drop-shadow-xl faq-content cursor-pointer mt-7' onClick={() => handleFAQ(index)}>
                                <div className='flex justify-between items-center'>
                                    {faq.question}
                                    {!isFAQOpen[index] ? <Icon icon="akar-icons:plus" width="30" height="30" /> : <Icon icon="akar-icons:minus" width="30" height="30" />}
                                </div>
                                {isFAQOpen[index] && <div className='font-["bamboo"] text-xl mt-5'>{faq.answer}</div>}
                            </div>
                        )
                    })}
                </div>
                <div className='absolute -bottom-10 -left-10'>
                    <Player
                        autoplay
                        loop
                        src='https://assets7.lottiefiles.com/packages/lf20_q4wbz787.json'
                        className='w-[300px] h-[300px] rounded-xl'
                    />
                </div>
            </div>
        </Element>
    )
}