import HeroTitle from '../dom/HeroTitle'

const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <div className='w-full h-full flex flex-col justify-center items-start absolute lg:px-16 gap-10 px-4'>
                <HeroTitle />
                <p className='text-white lg:text-2xl text-lg lg:w-1/3'>Empowering digital realms with unwavering resolve and limitless innovation</p>
            </div>
        </div>
    )
}

export default Hero