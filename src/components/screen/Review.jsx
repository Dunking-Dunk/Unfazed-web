import Image from "next/image"
import Hursun from '../../../public/img/hursun.png'

const Review = () => {
    return (
        <div className="lg:py-32 lg:px-56 py-16 px-4 bg-[var(--primary-color)] relative flex flex-col items-center justify-center">
            <p className="leading-normal lg:text-4xl text-2xl text-[var(--black-color)] text-center lg:mb-20 mb-6 font-medium">I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Unfazed for anyone looking for a talented and professional designer.</p>
            <Image src={Hursun} alt='Hursun photo' className=" rounded-full w-24 h-24 mb-10 object-cover" />
            <p className="lg:w-full w-1/2 text-center text-2xl text-[var(--black-color)] font-semibold">Hursun , <span className="opacity-70"> CEO of Unfazed</span></p>
        </div>
    )
}

export default Review