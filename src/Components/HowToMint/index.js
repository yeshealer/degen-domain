import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { HowToBuy } from '../Gadgets/Constant'

export default function index() {
    return (
        <div className='w-full flex justify-center bg-[#E5E5E5] relative'>
            <div className='w-[1400px] text-black py-20 border-b-4 border-[#77e2924d] relative flex flex-col items-center'>
                <div className='text-7xl content-title font-["Panda-font"] text-white'>How to buy</div>
                <div className='grid grid-cols-2 gap-5 mt-20 relative'>
                    {HowToBuy.map((process, index) => {
                        return (
                            <div className='border-2 border-[#166534] bg-white p-10 rounded-xl flex flex-col' key={process.title}>
                                <div className={`text-white font-["bamboo"] text-3xl font-bold dashboard-title w-3/4 ${index % 2 === 1 && 'text-end self-end'}`}>{process.title}</div>
                                <div className={`text-stone-700 text-xl font-["bamboo"] mt-5 w-3/4 ${index % 2 === 1 && 'text-end self-end'}`}>{process.description}</div>
                            </div>
                        )
                    })}
                    <div className='w-[400px] h-[400px] border border-[#166534] rounded-full p-10 absolute bg-[#e5e5e5] left-[500px] top-10'>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_ki2ohgx3.json"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}