import BackgroundCanva from "@/components/dom/BackgroundCanva"
import WorkDetail from "@/components/dom/WorkDetail"
import { Works } from "@/helpers/data"



const Page = ({ params: { id } }) => {
    const data = Works.find((w) => w.id === id)

    return <div className="w-full h-full">
        <BackgroundCanva />
        <WorkDetail data={data} />
    </div>
}

export default Page