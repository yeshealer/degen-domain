import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { animateScroll as scroll } from 'react-scroll'

export default function ScrollToTopBtn() {
    const [btnShow, setBtnShow] = useState('hidden')

    const scrollToTop = function () {
        scroll.scrollToTop();
    }

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            setBtnShow('block')
        } else {
            setBtnShow('hidden')
        }
    }
    return (
        <button className={`fixed bottom-10 right-10 p-3 rounded-full bg-[#166534] ${btnShow}`} onClick={() => scrollToTop()}>
            <Player
                autoplay
                loop
                src='assets/scrolltotop.json'
                className='w-10 h-10'
            />
        </button>
    )
}