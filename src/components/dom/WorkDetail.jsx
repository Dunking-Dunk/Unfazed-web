"use client"

import Image from "next/image"

import { mono } from "@/helpers/font"
import Link from "next/link"


const WorkDetail = ({ data }) => {
    return (
        <div className="w-full h-full relative z-10 py-20">
            <div className="w-full h-full lg:my-40 mt-40 mb-6 relative">
                <Image src={require(`./../../../public/case/${data.cover}`)} className="h-screen object-cover" alt="cover page" />
                <h2 className="lg:text-9xl text-6xl absolute -top-20 text-[var(--primary-color)] text-center w-full " style={mono.style}>{data.title}</h2>
            </div>
            <div className="w-full h-full lg:px-24 px-4 flex lg:flex-col flex-col-reverse lg:gap-12 gap-6">
                <div className="flex lg:flex-row flex-col justify-between gap-y-6">
                    <div className="lg:space-y-6 lg:w-1/4">
                        <h5 className="font-medium text-sm opacity-50">TECHNOLOGY</h5>
                        <p className="text-lg">{data.technologies}</p>
                    </div>
                    <div className=" lg:space-y-6  lg:w-2/4">
                        <h5 className="font-medium text-sm opacity-50">CATEGORY</h5>
                        <div className="flex flex-wrap gap-y-2 gap-x-2">
                            {data.category.map((cat, index) => <p className="text-lg" key={index}> {cat}  · </p>)}
                        </div>
                    </div>
                    {data.link && (
                        <div className="flex lg:flex-col flex-row justify-between w-full lg:space-y-6 lg:w-1/6">
                            <h5 className="font-medium text-sm opacity-50">LIVE URL</h5>
                            <div>
                                <Link href={data.link} className="text-lg cursorOver underline">Link</Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="lg:space-y-6">
                    <h5 className="font-medium text-sm opacity-50">DESCRIPTION</h5>
                    <p className="text-xl leading-relaxed">{data.description}</p>
                </div>
            </div>
            <div className="flex w-full h-full flex-col lg:gap-10 gap-4 lg:py-20 py-10 items-center">
                {
                    data.gallery.map((img, index) => (
                        <div className={`max-w-[${img.width}]`} key={index}>
                            <span className={`pt-[${img.height / img.width * 100}%]`}>
                                <Image src={require(`./../../../public/case/${data.id}/${img.image}`)} alt="Project image" />
                            </span>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default WorkDetail