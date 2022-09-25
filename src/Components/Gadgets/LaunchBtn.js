import React from 'react'

export default function LaunchBtn(props) {
    return (
        <button class="relative inline-flex items-center justify-center p-4 px-10 py-4 overflow-hidden font-medium text-lime-700 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-emerald-600">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-lime-700 via-emerald-700 to-green-800"></span>
            <span class="absolute bottom-0 right-0 block w-80 h-64 mb-48 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-lime-600 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span class="relative text-white">{props.text}</span>
        </button>
    )
}