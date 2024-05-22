import CardCarousel from "@/components/dom/Carousel"
import WorkCard from "@/components/dom/WorkCard"
import { Works } from "@/helpers/data"
import { mono } from "@/helpers/font"

const Work = () => {
    return (
        <div className="w-full h-full px-16 py-10">
            <h1 className="text-9xl font-semibold text-[var(--primary-color)]" style={mono.style}>All Works</h1>
            <div className="h-full w-full pt-10 lg:px-4 overflow-hidden rounded-lg">
                <CardCarousel className="flex flex-row w-full h-full">
                    {Works.map((work) => <WorkCard work={work} key={work.id} cls={'lg:h-[90vh]'} />)}
                </CardCarousel>
            </div>
        </div>

    )
}

export default Work