"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { FaArrowRight } from "react-icons/fa";

const Button = ({ children, size = 12, onClick, Icon = () => <FaArrowRight size={size} />, cln }) => {
    const btnRef = useRef()

    useGSAP((context, contextSafe) => {

        const onHover = contextSafe(() => {
            gsap.to(btnRef.current, {
                borderRadius: 10,
                ease: 'power4.out',
            })
        })

        const onHoverOut = contextSafe(() => {
            gsap.to(btnRef.current, {
                borderRadius: 100,
                ease: 'power2.in',
            })
        })

        btnRef.current.addEventListener("mouseover", onHover)
        btnRef.current.addEventListener("mouseout", onHoverOut)

        return () => {
            // <-- cleanup
            btnRef.current.removeEventListener("mouseout", onHoverOut)
            btnRef.current.removeEventListener('mouseover', onHover);
        };
    }, [])

    return (
        <button style={{ fontSize: size }} onClick={onClick} className={`${cln} cursorOver border-[2px] py-4 px-10 rounded-3xl  flex flex-row items-center justify-center gap-6 `} ref={btnRef}>
            {children}
            {Icon && <Icon />}
        </button>
    )
}

export default Button