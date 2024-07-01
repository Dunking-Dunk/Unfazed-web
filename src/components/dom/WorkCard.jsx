"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "./Button"


const WorkCard = ({ work, cls }) => {
    const router = useRouter()

    const handleOnClick = () => {
        router.push(`/work/${work.id}`)
    }

    return (
        <div className={`${cls} w-full lg:h-screen h-[80vh]  relative lg:rounded-xl overflow-hidden cursorMore`} onClick={handleOnClick}>
            < div className="w-full h-full relative" >
                <Image src={require(`./../../../public/case/${work.cover}`)} className="w-full h-full object-cover absolute top-0 bottom-0 left-0 right-0" alt="Work Image" />
                <div className="bg-[rgba(0,0,0,0.3)] w-full h-full absolute pointer-events-none z-10">

                </div>
            </div >
            <div className="absolute w-full bottom-0 left-0 flex flex-row justify-between lg:p-16 px-4 lg:pb-20 pb-10 z-50 gap-24">
                <div className="lg:w-1/2 w-full flex flex-col lg:items-start space-y-6 ">
                    <h3 className="text-start text-5xl font-medium ">{work.title}</h3>
                    <p className="text-xl text-start lg:block hidden">{work.description.slice(0, 300)}</p>
                    <Button size={26} cln={'lg:hidden'}>Veiw Detail</Button>
                </div>
                <div className="lg:w-1/2 flex-wrap gap-4 h-full lg:flex hidden">
                    {work.category.map((category, categoryIndex) => <div key={categoryIndex} className="px-6 py-2 text-lg bg-white text-[var(--black-color)] rounded-3xl bg-opacity-50 font-medium">
                        {category}
                    </div>)}

                </div>
            </div>
        </div >
    )
}

export default WorkCard
