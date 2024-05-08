"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'
import Confinment from '../../../public/img/abstract/confine.svg'
import Yourself from '../../../public/img/abstract/yourselfto.svg'
import CoolGlass from '../../../public/img/abstract/coolglass.svg'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const MarcusCanvas = dynamic(() => import('@/components/canvas/Marcus'), {
    ssr: false
})

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center absolute'>
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

const Abstract = () => {
    return (
        <div className="h-screen w-full relative">
            <Image src={Confinment} className='absolute left-[20%] top-12 z-10 ' />
            <Image src={Yourself} className='absolute left-[20%] top-40 z-10 ' />
            {/* <Image src={CoolGlass} className='absolute left-[40%] top-14 z-10 ' /> */}
            <View className='w-full h-full absolute z-0'>
                <Suspense fallback={null}>
                    <Common />
                    <MarcusCanvas />
                </Suspense>
            </View>
        </div>
    )
}

export default Abstract