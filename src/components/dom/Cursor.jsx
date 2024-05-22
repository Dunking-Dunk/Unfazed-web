"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { usePathname } from 'next/navigation'

const Cursor = () => {
    const cursorRef = useRef()
    const cursorOuterRef = useRef()
    const textRef = useRef()
    const pathname = usePathname()

    useGSAP((context, contextSafe) => {
        let cursOver = false
        let cursOverDetail = false

        const followCursor = contextSafe((e) => {
            gsap.to(cursorRef.current, {
                top: `${e.clientY - (cursOverDetail ? 34 : cursOver ? 18 : 6)}}px`,
                left: `${e.clientX - (cursOverDetail ? 34 : cursOver ? 18 : 6)}}px`,
                ease: 'power1.out'
            })

            gsap.to(cursorOuterRef.current, {
                top: `${e.clientY - 22}px`,
                left: `${e.clientX - 22}px`,
                delay: 0.05,
                ease: 'power1.out'
            })
        })

        const cursorOver = contextSafe(() => {
            gsap.to(cursorRef.current, {
                width: '2.5rem',
                height: '2.5rem',
                opacity: 0.7
            })
            cursOver = true
        })

        const cursorOut = contextSafe(() => {
            gsap.to(cursorRef.current, {
                width: '1rem',
                height: '1rem',
                opacity: 1
            })
            cursOver = false
        })

        const cursorOverMore = contextSafe(() => {
            gsap.to(cursorRef.current, {
                width: '6rem',
                height: '6rem',
            })

            gsap.to(cursorOuterRef.current, {
                borderWidth: '0px',
            })

            gsap.to(textRef.current, {
                scale: 1,
            })

            cursOverDetail = true
        })
        const cursorOutMore = contextSafe(() => {
            gsap.to(cursorRef.current, {
                width: '1rem',
                height: '1rem',
            })

            gsap.to(cursorOuterRef.current, {
                borderWidth: '1px',
            })

            gsap.to(textRef.current, {
                scale: 0,
            })


            cursOverDetail = false
        })

        const hoverElements = document.querySelectorAll('.cursorOver')
        const hoverMoreElements = document.querySelectorAll('.cursorMore')

        window.addEventListener('mousemove', followCursor)
        hoverElements.forEach((ele) => ele.addEventListener('mouseenter', cursorOver))
        hoverElements.forEach((ele) => ele.addEventListener('mouseout', cursorOut))
        hoverMoreElements.forEach((ele) => ele.addEventListener('mousemove', cursorOverMore))
        hoverMoreElements.forEach((ele) => ele.addEventListener('mouseout', cursorOutMore))

        return () => {
            window.removeEventListener('mousemove', followCursor)
            hoverElements.forEach((ele) => ele.removeEventListener('mouseover', cursorOver))
            hoverElements.forEach((ele) => ele.removeEventListener('mouseout', cursorOut))
            hoverMoreElements.forEach((ele) => ele.removeEventListener('mouseover', cursorOverMore))
            hoverMoreElements.forEach((ele) => ele.removeEventListener('mouseout', cursorOutMore))
        }
    }, { dependencies: [pathname] })

    return (
        <div className={`fixed md:block hidden w-12 h-12 border-[var(--primary-color)] border-[1px] rounded-full z-[100] pointer-events-none cursorOuter`} ref={cursorOuterRef}>
            <div className="fixed w-4 h-4 bg-[var(--primary-color)] rounded-full z-50 pointer-events-none cursorInner flex items-center justify-center" ref={cursorRef} >
                <p className=" scale-0 text-[var(--black-color)] font-medium text-center" ref={textRef}>More Details</p>
            </div>
        </div>
    )
}

export default Cursor