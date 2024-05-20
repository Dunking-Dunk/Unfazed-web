"use client"

import Link from "next/link"
import { useEffect } from "react"
import Cursor from "@/components/dom/Cursor"

const Page = () => {
    useEffect(() => {
        console.log('page about')
    }, [])
    return (
        <div>
            <Cursor />
            <Link href={'/'}>About</Link>
        </div>

    )
}

export default Page