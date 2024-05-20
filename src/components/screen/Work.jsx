import CardCarousel from "../dom/Carousel"
import WorkCard from "../dom/WorkCard"
import { Works } from "@/helpers/data"

const Work = () => {
    return (
        <div className="h-full w-full pt-24 lg:px-4 overflow-hidden rounded-lg relative">
            <CardCarousel className="flex flex-row w-full h-full">
                {Works.map((work) => <WorkCard work={work} key={work.id} />)}
            </CardCarousel>
        </div>
    )
}

export default Work