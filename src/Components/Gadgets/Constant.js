import { wrapn } from "wrapn"

export const HowToBuy = [
    {
        title: 'Create MetaMask wallet',
        description: 'Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to mint your NFT.'
    },
    {
        title: 'Send ETH to your wallet',
        description: 'You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc.'
    },
    {
        title: 'Connect your wallet to Our Mint Dapp',
        description: 'Access your wallet to Our Mint Dapp by clicking ‘Connect to a wallet’ and selecting MetaMask.'
    },
    {
        title: 'Mint your NFT',
        description: 'You can start minting as soon as you have ETH available! Press ‘Mint’ and enter the token address or search for it on the tokens list.'
    }
]

export const Partners = [
    'binance', 'dogechain', 'techrate', 'rugdoc'
]

export const FAQs = [
    {
        question: 'How much does each Domain cost?',
        answer: 'Each Domain is free! Please enjoy minting your unique DOGEN Domain!'
    },
    {
        question: 'How many can I mint?',
        answer: 'You can mint 3 domains per wallet.'
    },
    {
        question: 'When can I mint?',
        answer: 'Minting will be live from 10am - 1pm Eastern Time on October 1, 2022.'
    },
    {
        question: 'What can I do with my Domain?',
        answer: "Whatever you want! You are free to do whatever you'd like under the non- exclusive license."
    }
]

export const CommunityIcon = [
    'github', 'twitter', 'medium', 'telegram'
]

export const Content = wrapn('div')`
    w-[350px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1150px] 2xl:w-[1400px] text-black text-center py-10 md:py-20 pb-10 border-b-4 border-[#77e2924d] flex flex-col items-center relative
`

export const ComponentTitle = wrapn('div')`
    text-4xl md:text-5xl lg:text-6xl xl:text-7xl content-title font-["Panda-font"] text-white
`