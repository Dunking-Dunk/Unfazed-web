import BackgroundCanva from "@/components/dom/BackgroundCanva"
import EnviromentCanvas from "@/components/dom/EnviromentCanvas"
import Contact from "@/components/screen/Contact"
import Service from "@/components/screen/Service"
import { mono } from "@/helpers/font"

import Image from "next/image"

const Page = () => {

    return (
        <div className="w-full h-full relative">
            <BackgroundCanva />
            <div className="w-full h-screen flex flex-col justify-center lg:px-24 lg:gap-28 gap-10 relative z-10 px-4">
                < h1 className="lg:text-9xl md:text-8xl text-7xl text-[var(--primary-color)]" style={mono.style} > About <br /> Unfazed</h1 >
                <p className="text-2xl lg:w-1/2 w-full">
                    Welcome to Unfazed Digital Studio, a creative hub based in Tamil Nadu, India. Founded by a group of passionate college students, we are driven by a shared love for technology, engineering, and artistic innovation.
                </p>
                <Image alt="scrol Down" className="absolute lg:bottom-28 lg:right-64 bottom-12 w-32 animate-[spin_5s_linear_infinite]" src={require('./../../public/img/abstract/scrolldown.png')} />
            </div >
            <div className="w-full h-screen lg:px-24 px-4 relative">
                <EnviromentCanvas />
                <div className="flex flex-col justify-start lg:space-y-28 space-y-14 z-[20] relative">
                    < h3 className="lg:text-5xl text-4xl font-semibold text-[var(--primary-color)]"  >Creativity and technology are the twin engines of innovation. At Unfazed Digital Studio, we harness both to turn digital dreams into reality.</h3 >
                    <p className="lg:text-4xl text-2xl leading-normal lg:w-1/2 w-full">At Unfazed, we believe in the transformative power of creativity combined with cutting-edge technology. Our team is renowned for excelling in hackathons, consistently proving our skills and pushing the boundaries of what’s possible in the digital realm. This spirit of innovation and excellence is the cornerstone of our studio.</p>
                </div>
            </div >
            <Service />
            <Contact />
        </div >
    )
}

export default Page