"use client"


import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import HeroTitle from './HeroTitle'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const HeroCanvas = dynamic(() => import('@/components/canvas/Hero'))
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
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
        <div className="w-full h-screen relative">
            <View className='w-full h-full absolute'>
                <Suspense fallback={null}>
                    <Common />
                    <HeroCanvas />
                </Suspense>
            </View>
            <div className='w-full h-full flex flex-col justify-center absolute px-32 gap-10 z-10 bg-[rgba(0,0,0,0.3)]'>
                <HeroTitle />
                <p className='text-white text-2xl w-1/3'>Empowering digital realms with unwavering resolve and limitless innovation</p>
            </div>

        </div>
    )
}

export default Hero