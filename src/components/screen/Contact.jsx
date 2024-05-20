import Link from "next/link"
import Button from "../dom/Button"

const Contact = () => {
    return (
        <div className="lg:p-16 p-4 relative">
            <div className="flex lg:flex-row flex-col items-center justify-between border-b-2 border-[rgba(255,255,255,0.3)] pb-24 pt-16">
                <div className="lg:space-y-14 space-y-6">
                    <h2 className="lg:text-9xl text-7xl font-medium">Let's Chat.</h2>
                    <h5 className="lg:text-3xl text-xl">Unleashing brand potential through <br />creative design and innovation.</h5>
                </div>
                <div className="lg:self-end mt-16">
                    <Button size={32} cln={'bg-white text-black'}>GET IN TOUCH</Button>
                </div>
            </div>
            <div className="pt-16 w-full h-full flex lg:flex-row flex-col lg:space-y-0 space-y-16">
                <div className="lg:w-2/6 w-full flex flex-row justify-between">
                    <div className="flex flex-col space-y-8 text-xl">
                        <Link className='cursorOver' href={'/'}>About</Link>
                        <Link className='cursorOver' href={'/'}>Projects</Link>
                        <Link className='cursorOver' href={'/'}>Services</Link>
                    </div>
                    <div className="flex flex-col space-y-6 text-xl">
                        <Link className='cursorOver' href={'/'}>Contact</Link>
                        <Link className='cursorOver' href={'/'}>Careers</Link>
                    </div>
                </div>
                <div className="flex flex-col lg:w-4/6 w-full lg:items-end lg:gap-10 gap-4">
                    <div className="lg:space-x-12 space-x-4 text-xl">
                        <Link className='cursorOver' href={'/'}>Instagram</Link>
                        <Link className='cursorOver' href={'/'}>Linkedin</Link>
                        <Link className='cursorOver' href={'/'}>Behance</Link>
                    </div>
                    <div className="space-y-2 underline text-xl">
                        <p >hursunss@gmail.com</p>
                        <p >8056201341</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact