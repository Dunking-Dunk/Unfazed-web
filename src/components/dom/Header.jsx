"use client"

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import unfazedLogo from '../../../public/img/unfazedLogo.png'
import Link from 'next/link'

const Header = () => {
    const navbarRef = useRef()
    const [open, setOpen] = useState(false)


    const handleOpen = useCallback(() => {
        setOpen((state) => !state)
    }, [])

    return (
        <div className="fixed w-full h-20 z-50 flex items-center lg:px-14  px-8 justify-between lg:backdrop-blur-md">
            <div className='lg:w-fit w-full flex items-center justify-center'>
                <Image src={unfazedLogo} alt='unfazed logo' className='lg:relative w-56 ' />
            </div>
            <div className={`flex lg:flex-row lg:items-center justify-evenly lg:w-1/3 lg:h-full text-sm  max-lg:fixed  flex-col h-screen w-full left-0 top-0 ${open ? 'top-0' : 'top-[-150%]'} lg:text-sm text-6xl lg:bg-transparent  z-50 md:p-20 p-10 lg:p-0 transition-all ease-out duration-200 backdrop-blur-lg`} ref={navbarRef}>
                <Link href='#about'>About</Link>
                <Link href='#about'>Service</Link>
                <Link href='#about'>Contact</Link>
            </div>
            <div className={`lg:hidden flex flex-col ${open ? 'justify-center items-center' : 'justify-between'} w-6 h-5 cursor-pointer right-14 z-50 `} onClick={handleOpen}>
                <span className={`w-full rounded-md h-0.5 transition-transform ease-out duration-400 bg-white ${open && 'rotate-45 translate-y-0.5'}`} />
                <span className={`rounded-md h-0.5 transition-all ease-out duration-600 bg-white ${open ? 'w-0' : 'w-full'}`} />
                <span className={`w-full rounded-md h-0.5 transition-transform ease-out duration-400 bg-white ${open && '-rotate-45 -translate-y-0.5'}`} />
            </div>
        </div>
    )
}

export default Header