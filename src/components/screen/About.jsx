import { mono } from '../../helpers/font'

const About = () => {
    return (
        <div className="h-full overflow-hidden w-full relative z-20 mb-10" id='about'>
            <div className='flex flex-col lg:gap-8 gap-2 lg:w-2/3 lg:p-20 px-4 py-8'>
                <h3 style={mono.style} className='md:text-9xl text-7xl text-[var(--primary-color)]'>About <br /> Us</h3>
                <p className='md:text-2xl text-lg'>
                    Unfazed Digital Agency is a freelance creative powerhouse driven by a passion for technology, engineering, and art. Founded by a group of college students renowned for their hackathon successes, we bring digital content to life through innovative solutions and AI-driven products. Our mission is to inspire and redefine the digital landscape, leaving a lasting impact on every project we undertake. Join us in crafting a future where creativity knows no bounds and innovation knows no limits.</p>
            </div>
        </div>
    )
}

export default About