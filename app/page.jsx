import Image from 'next/image'

import Hero from "@/components/screen/Hero"
import About from '@/components/screen/About'
import Abstract from '@/components/screen/Abstract'
import GreenWave from '../public/img/abstract/greenwave.svg'
import Service from '@/components/screen/Service'
import Review from '@/components/screen/Review'
import Contact from '@/components/screen/Contact'
import BackgroundCanva from '@/components/dom/BackgroundCanva'
import Work from '@/components/screen/Work'

export default function Page() {

  return (
    <div className=' h-full w-full relative'>
      <Image src={GreenWave} className='absolute w-full left-0 bottom-0 right-0 top-[15%] z-0' alt='background abstract' />
      <BackgroundCanva />
      <div className='z-10 relative'>
        <Hero />
        <About />
        <Abstract />
        <Work />
        <Service />
        <Review />
        <Contact />
      </div>
    </div>
  )
}
