"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { FaArrowRight } from "react-icons/fa";

const Button = ({ children, size = 12, onClick = () => {
    window.location.href = "mailto:studiounfazed@gmail.com";
}, Icon = (cl) => <FaArrowRight size={size} className={cl} />, cln }) => {
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
        <button style={{ fontSize: size }} onClick={onClick} className={`${cln} cursorOver border-[2px] py-4 px-10 rounded-3xl  flex flex-row items-center justify-center gap-6 cursor-none relative before:absolute before:left-0 before:top-0 before:w-0 before:h-full before:bg-black before:z-[0] hover:before:w-full overflow-hidden before:ease-in-out before:duration-300 hover:text-white`} ref={btnRef}>
            <div className="z-10 cursorOver">
                {children}
            </div>
            <div className="z-10 cursorOver">
                {Icon && <Icon cl={'text-current '} />}
            </div>
        </button>
    )
}

export default Button