import { useRef } from "react"

import { mono } from "@/helpers/font"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const Marque = () => {
    const marRef = useRef()

    useGSAP(() => {


        gsap.to(marRef.current, {
            scrollTrigger: {
                trigger: marRef.current,
                scroller: '#scroll-element',
                scrub: 1,
            },
            left: '-100%',
        })

    }, [])

    return (
        <div className="flex flex-row w-[2000%] absolute bottom-0 -left-10 text-[var(--primary-color)] border-4 border-[var(--primary-color)] py-4 gap-20 " ref={marRef}>
            <h3 className="text-7xl" style={mono.style}>UNFAZED STUDIO</h3>
            <h3 className="text-7xl" style={mono.style}>BRANDING </h3>
            <h3 className="text-7xl" style={mono.style}>SOFTWARE DEVELOPMENT </h3>
            <h3 className="text-7xl" style={mono.style}>IDENTITY </h3>
            <h3 className="text-7xl" style={mono.style}>UNFAZED STUDIO</h3>
            <h3 className="text-7xl" style={mono.style}>BRANDING </h3>
            <h3 className="text-7xl" style={mono.style}>SOFTWARE DEVELOPMENT </h3>
            <h3 className="text-7xl" style={mono.style}>BRAND IDENTITY</h3>
            <h3 className="text-7xl" style={mono.style}>DIGITAL MARKETING</h3>
        </div>
    )
}

export default Marque