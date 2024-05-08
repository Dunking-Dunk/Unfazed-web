import { mono } from '../../helpers/font'

const About = () => {
    return (
        <div className="h-full overflow-hidden w-full relative">
            <div className='flex flex-col gap-8 w-2/3 p-20'>
                <h3 style={mono.style} className=' text-9xl text-[var(--primary-color)]'>About <br /> Us</h3>
                <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, maiores. Consequuntur a optio reiciendis corporis? Dolores esse saepe illum numquam, veniam ab enim perferendis molestias asperiores, assumenda natus, sint consectetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita placeat vero voluptate sed unde, dignissimos impedit ducimus quia optio corrupti exercitationem nam ipsum. Illo accusantium porro autem consequatur enim.</p>
            </div>
        </div>
    )
}

export default About