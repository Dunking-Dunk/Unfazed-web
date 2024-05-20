import { mono } from '../../helpers/font'
import Button from '../dom/Button'

const About = () => {
    return (
        <div className="h-full overflow-hidden w-full mb-10 lg:p-16 px-4" id='about'>
            <div className='flex flex-col lg:gap-28 gap-6'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='md:text-2xl text-md'>Digital Agency Based in <span className=' font-extrabold text-[var(--primary-color)]'>INDIA, IN</span></p>
                    <div className='md:block hidden '>
                        <Button size={14} >GET IN TOUCH</Button>
                    </div>
                </div>
                <p className='leading-relaxed md:text-4xl tracking-wide text-xl'>
                    Unfazed Digital Agency is a freelance creative powerhouse driven by a passion for technology, engineering, and art. Founded by a group of college students renowned for their hackathon successes, we bring digital content to life through innovative solutions and AI-driven products. Our mission is to inspire and redefine the digital landscape, leaving a lasting impact on every project we undertake. Join us in crafting a future where creativity knows no bounds and innovation knows no limits.</p>
                <div className='flex md:flex-row flex-col justify-between md:items-center gap-4'>
                    <h3 style={mono.style} className='md:text-6xl text-4xl text-[var(--primary-color)]'>About Us</h3>
                    <div className='flex flex-col space-y-1 underline text-lg'>
                        <p >hursunss@gmail.com</p>
                        <p >8056201341</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About