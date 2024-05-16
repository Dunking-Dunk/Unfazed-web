"use client"


import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import HeroTitle from '../dom/HeroTitle'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const HeroCanvas = dynamic(() => import('@/components/canvas/Hero'), {
    ssr: false
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-full w-full flex-col items-center justify-center absolute'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-white' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

const Hero = () => {
    return (
        <div className="w-full h-screen relative z-10">
            <div className='w-full h-full flex flex-col justify-center items-start absolute lg:px-32 px-4 gap-10  bg-[rgba(0,0,0,0.3)]'>
                <HeroTitle />
                <p className='text-white lg:text-2xl text-lg lg:w-2/4'>Empowering digital realms with unwavering resolve and limitless innovation</p>
            </div>
            <View className='w-full h-full absolute z-0'>
                <Suspense fallback={null}>
                    <Common />
                    <HeroCanvas />
                </Suspense>
            </View>
        </div>
    )
}

export default Hero