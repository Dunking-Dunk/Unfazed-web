'use client'

import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const mono = localFont({ src: './manolo-mono.woff2', variable: '--font-mano', })
const Hero = dynamic(() => import('@/components/canvas/Hero'))
const HeroTitle = dynamic(() => import('@/components/dom/HeroTitle'))

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
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='relative h-screen w-full flex items-center justify-start'>
        <div className='z-10 ml-48'>
          <HeroTitle />
        </div>
        <View className='w-full h-full absolute '>
          <Suspense fallback={null}>
            <Common />
            <Hero />
          </Suspense>
        </View>
      </div>
    </>
  )
}
