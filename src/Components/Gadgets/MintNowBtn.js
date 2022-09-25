import React from 'react'

export default function MintNowBtn(props) {
    return (
        <button class="rounded-xl relative inline-flex group items-center justify-center px-10 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-2xl text-white font-['bamboo'] mt-10">
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-48 opacity-10"></span>
            <span class="relative">{props.text}</span>
        </button>
    )
}
