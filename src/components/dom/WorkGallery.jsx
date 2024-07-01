"use client"

import './WorkGallery.css'
import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { gallery } from "@/helpers/data"
import { mono } from '@/helpers/font'
import { useRouter } from 'next/navigation'
import useDeviceDetection from '@/templates/hooks/useDeviceDetection'
import Button from './Button'

const Gallery = () => {
    const device = useDeviceDetection()
    const sliderRef = useRef()
    const [cards, setCards] = useState([])
    const [hoverCard, setHoverCard] = useState(null)
    const [hover, setHover] = useState(false)
    const router = useRouter()
    let id = 0

    const animate = () => {
        const scrollElement = document.querySelector('#scroll-element')
        const scroll = Number(scrollElement.getAttribute('data-scroll'))
        const slider = sliderRef.current
        const initalTransform = `translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg) `
        const zOffset = scroll * 0.5;
        if (slider)
            slider.style.transform = `${initalTransform} translateY(${zOffset}px)`
        id = window.requestAnimationFrame(animate)
    }


    const handleMouseEnter = useCallback((e, card) => {
        setHover(true)
        setHoverCard(card)
    }, [])

    const handleMouseOver = useCallback((e, card) => {
        if (!hover)
            e.currentTarget.style.left = "30%"
    }, [])


    const handleMouseOut = useCallback((e) => {
        setHover(false)
        e.currentTarget.style.left = "0%"
    }, [])

    const handleClick = (e, card) => {
        if (device === 'Desktop')
            router.push(`/work/${card.id}`)
    }

    useEffect(() => {
        setCards(gallery)
        animate()
        return () => {
            window.cancelAnimationFrame(id)
        }
    }, [])

    return (
        <>
            <div className="gallery_slider" ref={sliderRef}>
                {
                    cards.map((card, index) => (
                        <div key={index} className="gallery_card" onMouseOver={(e) => handleMouseOver(e, card)} onMouseEnter={(e) => handleMouseEnter(e, card)} onMouseOut={handleMouseOut} onClick={(e) => handleClick(e, card)}>
                            <Image src={require(`./../../../public/case/${card.previewImg}`)} className='w-full h-full' alt='slider images' />
                        </div>
                    ))
                }
            </div>

            {hoverCard && (
                <div className=' fixed lg:bottom-24 lg:right-32 bottom-10  lg:px-0 px-8  space-y-8 flex flex-col items-end '>
                    <h3 className='lg:text-7xl text-5xl text-right text-[var(--primary-color)]' style={mono.style}>{hoverCard.title}</h3>
                    {device !== 'Desktop' && <Button onClick={() => router.push(`/work/${hoverCard.id}`)}>
                        More Details
                    </Button>}

                </div>
            )}

        </>

    )
}

export default Gallery