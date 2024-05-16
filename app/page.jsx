import Header from '@/components/dom/Header'
import Hero from "@/components/screen/Hero"
import About from '@/components/screen/About'
import Abstract from '@/components/screen/Abstract'
import Image from 'next/image'
import GreenWave from '../public/img/abstract/greenwave.svg'

export default function Page() {
  return (
    <div className=' h-full w-full relative'>
      <Image src={GreenWave} className='absolute w-full left-0 bottom-0 right-0 top-[25%]' />
      <Header />
      <Hero />
      <About />
      <Abstract />
    </div>
  )
}
