"use client"

import { mono } from '../../helpers/font'
import dynamic from 'next/dynamic'
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center absolute'>
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

const ServiceCanvas = dynamic(() => import('@/components/canvas/Service'), {
    ssr: false
})



const Service = () => {
    const containerRef = useRef()
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })
    const [alpha, setAlpha] = useState(0)
    const [imageIdx, setImageIdx] = useState(null)

    useEffect(() => {

        containerRef.current.addEventListener('mousemove', handleMove)
        return () => {
            containerRef.current?.removeEventListener('mousemove', handleMove)
        }
    }, [containerRef])

    const handleMove = useCallback((e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }, [])

    const handleMouseEnter = useCallback((idx) => {
        setImageIdx(idx)
        setAlpha(1)
    }, [setImageIdx, setAlpha])

    const handleMouseLeave = useCallback(() => {
        setAlpha(0)
    }, [setAlpha])

    return (
        <div className="w-full h-full lg:px-16 px-4 lg:py-28 py-12 relative" ref={containerRef}>
            <View className='w-full h-full absolute'>
                <Suspense fallback={null}>
                    <Common />
                    <ServiceCanvas mouse={mouse} alpha={alpha} textureIdx={imageIdx} />
                </Suspense>

            </View>
            < div className="flex flex-col lg:gap-12 gap-4" >
                <h3 style={mono.style} className='md:text-8xl text-6xl text-[var(--primary-color)]'>Our Services</h3>
                <p className="lg:text-2xl text-xl lg:w-2/3 w-full">Our services are more than just solutions, they're opportunities to transform your digital presence and achieve your business objectives. We're here to make your digital dreams a reality.</p>
            </div >
            <div className='mt-12 flex flex-col'>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-6xl text-4xl font-medium'>Product Design</h5>
                    <p className='text-lg lg:w-1/3 opacity-80'>Craft unforgettable, user-centric experiences with our product design experts. We transform ideas into beautiful, functional designs that users will adore.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-6xl text-4xl font-medium'>Branding</h5>
                    <p className="text-lg lg:w-1/3 opacity-80">Elevate your brand identity with ArtistryLab. We understand the importance of a strong brand, and we'll help you establish a unique and unforgettable one.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-6xl text-4xl font-medium'>Web Development</h5>
                    <p className='text-lg lg:w-1/3 opacity-80'>Let our tech wizards weave their magic online. We create dynamic websites that captivate your audience and provide seamless user experiences.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-6xl text-4xl font-medium'>App Development</h5>
                    <p className='text-lg lg:w-1/3 opacity-80'>Transform your app idea into a reality. Our skilled developers bring your concept to life, creating mobile apps that are both elegant and powerful.</p>
                </div>
            </div>
        </div >
    )
}

export default Service